import SectionShell from "../layout/SectionShell";

const StorySection = () => (
  <SectionShell
    id="about"
    eyebrow="My story"
    title="From figuring it out to shipping real products."
    subtitle="How I went from learning in public to building tools for real people, teams, and patients."
  >
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4 text-sm text-slate-300">
        <p>
          I didn&apos;t start with a big formal program or a huge team around
          me. After countless hours of learning and practicing, my first real project was a job listing app for myXalary,
          where I was handed a Figma file, some requirements, and a senior
          engineer who didn&apos;t want to be pinged every five minutes, but trusted my
          problem-solving and research skills to resolve the tough parts. From there, I learned to read between the lines of designs, ask focused
          questions, and slowly turn ideas into working React and Node.js
          features that real candidates and hiring teams could use.
        </p>
        <p>
          Since then, I&apos;ve worked on multiple projects—including the
          connected HR systems at NotchHR and a full telemedicine platform
          that serves patients, clinicians, and admins. It hasn&apos;t all been
          smooth—there&apos;s been a lot of debugging, iteration, and occasional
          rework, but I genuinely enjoy the process. I love digging into the
          problem, stress-testing the edge cases, and then seeing real people
          use what we built. That sense of ownership, collaboration, and
          real‑world impact is what keeps me excited about software development.
        </p>
      </div>
      <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
        <p className="font-semibold text-slate-50">
          Things that guide my work:
        </p>
        <ul className="space-y-2 list-disc pl-4">
          <li>Start from real users, not just the UI.</li>
          <li>Ask better questions instead of getting stuck.</li>
          <li>Prefer clarity, reliability, and maintainability over cleverness.</li>
          <li>Ship, observe, and keep improving the experience.</li>
        </ul>
      </div>
    </div>
  </SectionShell>
);

export default StorySection;

