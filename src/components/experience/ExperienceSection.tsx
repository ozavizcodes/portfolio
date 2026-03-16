import SectionShell from "../layout/SectionShell";

const roles = [
  {
    company: "Example Co.",
    title: "Frontend Engineer",
    period: "2022 — Present",
    bullets: [
      "Led the implementation of a new design system.",
      "Improved key flows with measurable performance and UX gains.",
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

