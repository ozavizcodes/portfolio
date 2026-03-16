import { Link } from "react-router-dom";
import SectionShell from "../layout/SectionShell";

const sampleProjects = [
  {
    slug: "telemedicine-platform",
    name: "Telemedicine platform",
    role: "Full‑stack engineer",
    description:
      "End‑to‑end virtual care platform with React frontends for patients, doctors, and admins backed by a NestJS API.",
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Redis"],
  },
  {
    slug: "job-myxalary",
    name: "Job.myXalary job listings",
    role: "Frontend engineer",
    description:
      "Job listing and application experience where candidates create profiles, browse matching roles, and apply.",
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    slug: "notchhr",
    name: "NotchHR recruitment tools",
    role: "Frontend engineer",
    description:
      "Connected job request, recruitment, and job roles/competency modules used by managers and HR teams.",
    tech: ["React", "AngularJS", "TypeScript"],
  },
  {
    slug: "personal-projects",
    name: "Personal apps (budget, todo, Valentine)",
    role: "Personal projects",
    description:
      "A set of small apps—including a Valentine countdown/quotes app—used to practice product thinking and polish.",
    tech: ["React", "TypeScript", "Netlify"],
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
        <Link key={project.name} to={`/projects/${project.slug}`}>
          <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300 transition hover:border-cyan-400 hover:bg-slate-900">
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
        </Link>
      ))}
    </div>
  </SectionShell>
);

export default ProjectsSection;

