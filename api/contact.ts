type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const json = (res: any, status: number, body: Record<string, unknown>) => {
  res.status(status).setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { error: "Method not allowed" });
  }

  const payload = (req.body ?? {}) as ContactPayload;
  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message) {
    return json(res, 400, { error: "Name, email, and message are required." });
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
    return json(res, 502, {
      error: "Failed to send email.",
      details,
    });
  }

  return json(res, 200, { ok: true });
}

