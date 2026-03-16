import SectionShell from "../layout/SectionShell";

const ContactSection = () => (
  <SectionShell
    id="contact"
    eyebrow="Contact"
    title="Let’s build something together."
  >
    <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
      <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
        <div>
          <label className="text-xs text-slate-300">Name</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            required
          />
        </div>
        <div>
          <label className="text-xs text-slate-300">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            required
          />
        </div>
        <div>
          <label className="text-xs text-slate-300">How can I help?</label>
          <textarea
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2 text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/30 transition hover:bg-cyan-400"
        >
          Send message
        </button>
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

export default ContactSection;

