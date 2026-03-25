import SectionShell from "../layout/SectionShell";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["NestJS", "Node.js", "REST APIs"],
  },
  {
    title: "DevOps & tooling",
    items: ["GitHub Actions", "CI/CD", "Testing"],
  },
  {
    title: "Design",
    items: ["Design systems", "UX thinking"],
  },
];

const SkillsSection = () => (
  <SectionShell
    id="skills"
    eyebrow="Skills & expertise"
    title="What I bring to a team."
    subtitle="A mix of frontend depth, product sense, and just enough backend and DevOps to move independently."
  >
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
        >
          <h3 className="text-sm font-semibold text-slate-50">
            {group.title}
          </h3>
          <ul className="mt-3 space-y-1 text-xs text-slate-300">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default SkillsSection;

