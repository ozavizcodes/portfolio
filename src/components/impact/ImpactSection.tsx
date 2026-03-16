import SectionShell from "../layout/SectionShell";

const metrics = [
  { label: "Users impacted", value: "100K+" },
  { label: "Products shipped", value: "10+" },
  { label: "Perf improvements", value: "up to 35% faster" },
  { label: "Teams partnered with", value: "5+" },
];

const ImpactSection = () => (
  <SectionShell
    id="impact"
    eyebrow="Impact"
    title="Where the work moved the needle."
  >
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300"
        >
          <p className="text-lg font-semibold text-cyan-300">
            {metric.value}
          </p>
          <p className="mt-1">{metric.label}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default ImpactSection;

