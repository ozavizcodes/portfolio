import SectionShell from "../layout/SectionShell";

const roles = [
  {
    company: "Telemedicine Platform",
    title: "Full‑Stack Engineer",
    period: "2023 — Present",
    bullets: [
      "Built React + TypeScript frontends for patients, doctors, and admins on a telemedicine platform.",
      "Contributed to a NestJS/Node backend with secure, schema‑validated APIs and real‑time consultations.",
      "Improved reliability and performance with better state management, caching, and observability.",
    ],
  },
  {
    company: "NotchHR / myXalary",
    title: "Frontend Engineer",
    period: "2021 — 2023",
    bullets: [
      "Worked on recruitment tools that connect manager job requests, HR workflows, and public job listings.",
      "Extended a Job Roles & Competency module so each role carries reusable skill templates into new openings.",
      "Collaborated with product and design to refine complex HR flows into clear, usable web interfaces.",
    ],
  },
  {
    company: "Job.myXalary",
    title: "Junior Frontend Engineer",
    period: "2020 — 2021",
    bullets: [
      "Implemented candidate signup, profile, and job browsing flows in React from Figma designs and specs.",
      "Collaborated with a small team and contributed to Node.js APIs powering job listings and applications.",
      "Learned to work independently, ask focused questions, and ship features with minimal supervision.",
    ],
  },
];

const ExperienceSection = () => (
  <SectionShell
    id="experience"
    eyebrow="Experience"
    title="Places I’ve learned by shipping."
  >
    <div className="space-y-4">
      {roles.map((role) => (
        <article
          key={role.company}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-slate-50">
              {role.title}
            </h3>
            <p className="text-xs text-slate-400">{role.period}</p>
          </div>
          <p className="mt-1 text-xs text-cyan-300">{role.company}</p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs">
            {role.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </SectionShell>
);

export default ExperienceSection;

