import SectionShell from "../layout/SectionShell";
import { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s build something together."
    >
      <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
        <form
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus(null);
            setIsSending(true);

            const formData = new FormData(e.currentTarget);
            const name = String(formData.get("name") ?? "").trim();
            const email = String(formData.get("email") ?? "").trim();
            const message = String(formData.get("message") ?? "").trim();
            const website = String(formData.get("website") ?? "").trim();

            if (!name || !email || !message) {
              setStatus("Please fill in all fields.");
              setIsSending(false);
              return;
            }
            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message, website }),
              });

              const data = (await response.json()) as {
                error?: string;
                ok?: boolean;
              };

              if (!response.ok || !data.ok) {
                setStatus(data.error ?? "Could not send message. Please try again.");
                return;
              }

              e.currentTarget.reset();
              setStatus("Message sent successfully. Thank you!");
            } catch {
              setStatus("Network error. Please try again.");
            } finally {
              setIsSending(false);
            }
          }}
        >
          <div>
            <label className="text-xs text-slate-300">Name</label>
            <input
              name="name"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="text-xs text-slate-300">Email</label>
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="text-xs text-slate-300">How can I help?</label>
            <textarea
              name="message"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              rows={4}
              required
            />
          </div>
          <div className="hidden" aria-hidden>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2 text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            {isSending ? "Sending..." : "Send message"}
          </button>

          {status && (
            <p className="text-xs text-slate-300" role="status">
              {status}
            </p>
          )}
        </form>

        <div className="space-y-3 text-xs text-slate-300">
          <p className="font-semibold text-slate-50">Prefer direct contact?</p>
          <ul className="space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:faithabraham00@gmail.com"
                className="text-cyan-300 underline underline-offset-2"
              >
                faithabraham00@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/ozavizcodes"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 underline underline-offset-2"
              >
                ozavizcodes
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/faith-abraham-a738bb223/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 underline underline-offset-2"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
};

export default ContactSection;

