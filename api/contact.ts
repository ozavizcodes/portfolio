type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // Honeypot field (must stay empty)
};

const json = (res: any, status: number, body: Record<string, unknown>) => {
  if (typeof res.status === "function") {
    res.status(status);
  } else {
    res.statusCode = status;
  }
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LEN = 100;
const MAX_EMAIL_LEN = 254;
const MAX_MESSAGE_LEN = 5000;

// Best-effort, in-memory rate limiting (works per serverless instance).
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipHits = new Map<string, number[]>();

const getClientIp = (req: any): string => {
  const xff = req.headers?.["x-forwarded-for"];
  if (typeof xff === "string" && xff.length > 0) {
    return xff.split(",")[0].trim();
  }
  if (Array.isArray(xff) && xff.length > 0) {
    return String(xff[0]).trim();
  }
  return String(req.socket?.remoteAddress ?? "unknown");
};

const isRateLimited = (ip: string, now: number): boolean => {
  const recent = (ipHits.get(ip) ?? []).filter((ts) => now - ts < WINDOW_MS);
  recent.push(now);
  ipHits.set(ip, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
};

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return json(res, 405, { error: "Method not allowed" });
    }

    const rawBody = req.body ?? {};
    let payload: ContactPayload = {};
    if (typeof rawBody === "string") {
      try {
        payload = JSON.parse(rawBody) as ContactPayload;
      } catch {
        return json(res, 400, { error: "Invalid JSON payload." });
      }
    } else {
      payload = rawBody as ContactPayload;
    }

    const name = String(payload.name ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const message = String(payload.message ?? "").trim();
    const website = String(payload.website ?? "").trim();

    // Honeypot: bots often fill hidden fields.
    if (website) {
      return json(res, 200, { ok: true });
    }

    if (!name || !email || !message) {
      return json(res, 400, { error: "Name, email, and message are required." });
    }
    if (
      name.length > MAX_NAME_LEN ||
      email.length > MAX_EMAIL_LEN ||
      message.length > MAX_MESSAGE_LEN
    ) {
      return json(res, 400, { error: "One or more fields are too long." });
    }
    if (!EMAIL_RE.test(email)) {
      return json(res, 400, { error: "Please provide a valid email address." });
    }

    const ip = getClientIp(req);
    const now = Date.now();
    if (isRateLimited(ip, now)) {
      return json(res, 429, {
        error: "Too many requests. Please wait a minute and try again.",
      });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      return json(res, 500, {
        error:
          "Server email configuration is incomplete. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.",
      });
    }

    const subject = `Portfolio contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const sendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!sendResponse.ok) {
      const details = await sendResponse.text();
      console.error("Resend send failed", {
        status: sendResponse.status,
        details,
      });
      return json(res, 502, {
        error: "Failed to send email.",
      });
    }

    return json(res, 200, { ok: true });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return json(res, 500, {
      error: "Internal server error in contact handler.",
    });
  }
}

