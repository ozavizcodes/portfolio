import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const fade = (reduced: boolean, delay = 0) => ({
  initial: reduced ? false : { opacity: 0, y: 18 },
  animate: reduced ? {} : { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

const outcomes = [
  ["50%", "of UI commits", "350 commits across the React frontend."],
  ["16", "product modules", "40+ screens across 80 routed views."],
  ["24+", "AI-related commits", "AI panel, assistants, insights, and command palette."],
  ["~170", "new test lines", "AI and bank-reconciliation service coverage."],
];

export default function NotchBooksCaseStudyPage() {
  const reduced = useReducedMotion() ?? false;
  return <article className="case-study-page">
    <div className="case-study-inner">
      <Link className="back-link" to="/#work">← Back to selected work</Link>
      <motion.header {...fade(reduced)} className="case-study-hero">
        <p className="eyebrow">Case study · Private testing</p>
        <h1>NotchBooks: making financial workflows and AI feel dependable.</h1>
        <p>As frontend lead, I own the product’s frontend functionality and AI experience, partner on backend delivery, and drive the requirement-to-functionality testing that closes gaps before release.</p>
        <div className="case-study-tags"><span>React</span><span>TypeScript</span><span>NestJS</span><span>Prisma</span><span>MySQL</span><span>Vercel AI SDK</span></div>
      </motion.header>

      <motion.section {...fade(reduced, .08)} className="case-section"><div className="case-section-label">The product</div><div><h2>AI-assisted accounting, with financial safety at its core.</h2><p>NotchBooks is a multi-tenant accounting platform for sales, purchases, banking, reconciliation, budgets, reporting, and AI assistance. The product is still in private testing, so this case study focuses on my engineering contribution and safe, non-confidential system principles.</p></div></motion.section>

      <motion.section {...fade(reduced, .12)} className="case-section"><div className="case-section-label">My ownership</div><div><ul className="case-list"><li>Led delivery of the React frontend across accounting, banking, reports, budgets, inventory, and settings.</li><li>Shipped the frontend AI product surfaces: agent panel, create-page assistant, insights banner, and command palette.</li><li>Partnered with the backend team on functionality and fixes across AI, bank, bills, invoices, quotes, and inventory.</li><li>Owned requirement-to-functionality testing, comparing functional requirements with the product and resolving gaps across frontend and backend.</li></ul></div></motion.section>

      <motion.section {...fade(reduced, .16)} className="case-impact"><p className="eyebrow">Delivery footprint</p><div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">{outcomes.map(([number, label, detail]) => <div key={label} className="bg-white p-6 dark:bg-slate-950"><strong>{number}</strong><h3>{label}</h3><p>{detail}</p></div>)}</div></motion.section>

      <motion.section {...fade(reduced, .2)} className="case-section"><div className="case-section-label">Safe architecture view</div><div><h2>Guardrails around data, workflows, and AI.</h2><p>This is a deliberately high-level representation—enough to explain the engineering approach without exposing proprietary implementation detail.</p><div className="architecture-diagram"><div>React product UI<br /><small>workflows · reporting · AI experiences</small></div><span>→</span><div>Access & domain services<br /><small>permissions · validated business rules</small></div><span>→</span><div>Tenant-scoped data<br /><small>ledger · audit trail · accounting records</small></div><span>↔</span><div>AI assistance<br /><small>domain tools · controlled actions · traceability</small></div></div></div></motion.section>

      <motion.aside {...fade(reduced, .24)} className="case-note"><p className="eyebrow">What’s next</p><p>When NotchBooks is public and the team approves shareable material, this case study will add a product link, screenshots, and deeper walkthroughs of the relevant workflows.</p></motion.aside>
    </div>
  </article>;
}
