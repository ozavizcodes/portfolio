import SectionShell from "../layout/SectionShell";

const StorySection = () => (
  <SectionShell
    id="about"
    eyebrow="My story"
    title="From tinkering with UIs to shipping products."
    subtitle="A quick snapshot of how I grew from curious builder to product-focused engineer."
  >
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4 text-sm text-slate-300">
        <p>
          I found my way into software by trying to make interfaces feel a
          little less clunky and a little more intuitive. What started as
          experiments in the browser quickly turned into a love for frontend
          architecture and UX.
        </p>
        <p>
          Since then, I&apos;ve worked across stacks, but my sweet spot is where
          product, design, and engineering meet—translating ideas into
          experiences that are fast, accessible, and maintainable.
        </p>
      </div>
      <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
        <p className="font-semibold text-slate-50">
          Things that guide my work:
        </p>
        <ul className="space-y-2 list-disc pl-4">
          <li>Design APIs for components as carefully as backend APIs.</li>
          <li>Ship iteratively, measure impact, and refine.</li>
          <li>Prefer clarity over cleverness in code and UI.</li>
        </ul>
      </div>
    </div>
  </SectionShell>
);

export default StorySection;

