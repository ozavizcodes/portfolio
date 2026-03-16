import SectionShell from "../layout/SectionShell";

const testimonials = [
  {
    name: "Teammate",
    role: "Engineer",
    quote:
      "Faith consistently balances clean architecture with thoughtful UX decisions. Shipping with them feels calm and focused.",
  },
];

const TestimonialsSection = () => (
  <SectionShell
    id="testimonials"
    eyebrow="Testimonials"
    title="What collaborators say."
  >
    <div className="grid gap-4 md:grid-cols-2">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300"
        >
          <p className="text-xs italic">&ldquo;{t.quote}&rdquo;</p>
          <figcaption className="mt-3 text-xs text-slate-400">
            {t.name} · {t.role}
          </figcaption>
        </figure>
      ))}
    </div>
  </SectionShell>
);

export default TestimonialsSection;

