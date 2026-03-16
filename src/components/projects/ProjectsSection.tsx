import SectionShell from "../layout/SectionShell";

const sampleProjects = [
  {
    name: "Performance dashboard",
    role: "Lead frontend",
    description:
      "Real-time product health dashboard with deep linking and fast drill-down flows.",
    tech: ["React", "TypeScript", "Vite"],
  },
  {
    name: "Design system",
    role: "Core contributor",
    description:
      "Reusable component library that unified typography, spacing, and interaction patterns.",
    tech: ["React", "Storybook", "Tailwind CSS"],
  },
];

const ProjectsSection = () => (
  <SectionShell
    id="projects"
    eyebrow="Selected work"
    title="Projects that reflect how I think."
    subtitle="A sample of the kinds of problems I enjoy solving—more details available as full case studies."
  >
    <div className="grid gap-4 md:grid-cols-2">
      {sampleProjects.map((project) => (
        <article
          key={project.name}
          className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300"
        >
          <h3 className="text-base font-semibold text-slate-50">
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-cyan-300">{project.role}</p>
          <p className="mt-3 text-xs">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-1 text-[11px]">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </SectionShell>
);

export default ProjectsSection;

