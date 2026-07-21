import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const fade = (reduced: boolean, delay = 0) => ({
  initial: reduced ? false : { opacity: 0, y: 18 },
  animate: reduced ? {} : { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

const outcomes = [
  ["~90%", "of the backend API", "Led the NestJS/TypeORM API implementation."],
  ["100%", "of doctor + admin UIs", "Sole developer of both React/TypeScript applications."],
  ["2", "care modalities", "Zoom video and Sendbird chat in one clinical workflow."],
  ["3", "report types", "Video, chat, and combined consultation reporting."],
];

export default function VirtualHealthcareCaseStudyPage() {
  const reduced = useReducedMotion() ?? false;
  return <article className="case-study-page">
    <div className="case-study-inner">
      <Link className="back-link" to="/#work">← Back to selected work</Link>
      <motion.header {...fade(reduced)} className="case-study-hero">
        <p className="eyebrow">Case study · Healthcare</p>
        <h1>Remote care that keeps clinical work structured, exclusive, and auditable.</h1>
        <p>As lead full-stack engineer, I delivered the core API and solely built the doctor and admin applications for a dual-modality virtual healthcare platform serving verified members, doctors, and operations teams.</p>
        <div className="case-study-tags"><span>NestJS</span><span>React</span><span>TypeScript</span><span>TypeORM</span><span>Zoom Video SDK</span><span>Sendbird</span><span>Azure Blob</span></div>
      </motion.header>

      <motion.section {...fade(reduced, .08)} className="case-section"><div className="case-section-label">The problem</div><div><h2>Remote care needs more than a video call.</h2><p>Verified insurance members needed remote access to in-house doctors. Each consultation had to support structured clinical documentation—symptoms, diagnoses, tests, prescriptions, and referrals—while ensuring only one doctor could own a session at a time and operations could audit the full process.</p></div></motion.section>

      <motion.section {...fade(reduced, .12)} className="case-section"><div className="case-section-label">The solution</div><div><h2>One care workflow across video, chat, documentation, and operations.</h2><p>The platform supports Zoom video and Sendbird chat consultations, a patient queue and waiting room, doctor session ownership, structured clinical notes, end-of-session notifications, and an admin console for doctor lifecycle, live monitoring, consultation logs, and Excel reports.</p></div></motion.section>

      <motion.section {...fade(reduced, .16)} className="case-section"><div className="case-section-label">My ownership</div><div><ul className="case-list"><li>Led design and implementation of approximately 90% of the NestJS API: session lifecycle, Zoom tokens, clinical CRUD, chat locking, reporting, integrations, and auth/RBAC paths.</li><li>Solely built the doctor application: dashboard, video queue and controls, chat, clinical panel, history, session details, profile, and settings.</li><li>Solely built the admin application: doctor onboarding and lifecycle, bulk upload, consultation logs, live monitoring, and report generation/history.</li><li>Contributed to the patient waiting room and consult-entry flow; collaborated with product on UX and QA on staging verification.</li></ul></div></motion.section>

      <motion.section {...fade(reduced, .2)} className="case-impact"><p className="eyebrow">Delivery footprint</p><div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">{outcomes.map(([number, label, detail]) => <div key={label} className="bg-white p-6 dark:bg-slate-950"><strong>{number}</strong><h3>{label}</h3><p>{detail}</p></div>)}</div></motion.section>

      <motion.section {...fade(reduced, .24)} className="case-section"><div className="case-section-label">Key decisions</div><div><ul className="case-list"><li><strong>Exclusive doctor session locking:</strong> timeout and conflict handling prevented concurrent clinical edits on a consultation.</li><li><strong>Shared clinical model:</strong> video and chat consultations persisted through one documentation and reporting path.</li><li><strong>Server-minted Zoom tokens:</strong> signing secrets stayed off the client application.</li><li><strong>Completion gating:</strong> a session could only complete after the owning doctor saved clinical documentation.</li><li><strong>Short-lived Blob access:</strong> reports and documents used read-only SAS links instead of public storage.</li></ul></div></motion.section>

      <motion.section {...fade(reduced, .28)} className="case-section"><div className="case-section-label">Safe architecture view</div><div><h2>Guardrails across clinical sessions and operations.</h2><p>This high-level diagram deliberately avoids patient information, credentials, internal URLs, and proprietary implementation detail.</p><div className="architecture-diagram"><div>Patient · Doctor · Admin<br /><small>queues · care · operations</small></div><span>→</span><div>Secure API<br /><small>authentication · RBAC · session locks</small></div><span>→</span><div>Clinical + operational records<br /><small>documentation · auditability · reporting</small></div><span>↔</span><div>Care integrations<br /><small>Zoom · Sendbird · secure file exports</small></div></div></div></motion.section>

      <motion.aside {...fade(reduced, .32)} className="case-note"><p className="eyebrow">Confidentiality</p><p>This case study deliberately excludes patient data, employer branding, internal URLs, live KPIs, and screenshots. Future visuals will use scrubbed or synthetic data only, with employer approval.</p></motion.aside>
    </div>
  </article>;
}
