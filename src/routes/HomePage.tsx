import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { capabilities, experience, learningNow, profile, projects } from "../content/portfolio";

const fadeUp = (reduced: boolean, delay = 0) => ({
  initial: reduced ? false : { opacity: 0, y: 22 },
  whileInView: reduced ? {} : { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.58, delay, ease: "easeOut" },
});

const Arrow = () => <span aria-hidden="true">↗</span>;

const HomePage = () => {
  const reduced = useReducedMotion() ?? false;

  return (
    <>
      <section id="home" className="relative isolate overflow-hidden">
        <div className="mesh-bg pointer-events-none absolute inset-0 -z-10" />
        <motion.div
          animate={reduced ? {} : { y: [0, 22, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-32 top-14 -z-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-400/10"
        />
        <motion.div
          animate={reduced ? {} : { y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-24 top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/10"
        />
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-14 px-5 py-24 sm:px-6 lg:grid-cols-[1.2fr,.8fr] lg:py-28">
          <div>
            <motion.p {...fadeUp(reduced)} className="eyebrow">
              <span className="pulse-dot" /> {profile.location}
            </motion.p>
            <motion.h1 {...fadeUp(reduced, 0.08)} className="mt-7 max-w-4xl text-5xl font-semibold leading-[.97] tracking-[-.065em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Building useful software today. <span className="text-gradient">Engineering intelligent products next.</span>
            </motion.h1>
            <motion.p {...fadeUp(reduced, 0.16)} className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              I’m {profile.name}, a product-minded software engineer who turns complex workflows into calm, dependable experiences—and is intentionally growing into AI engineering.
            </motion.p>
            <motion.div {...fadeUp(reduced, 0.24)} className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="button-primary">Explore selected work <Arrow /></a>
              <a href="#contact" className="button-secondary">Start a conversation</a>
            </motion.div>
          </div>
          <motion.aside {...fadeUp(reduced, 0.2)} className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">now.building</span>
                <span className="rounded-full bg-cyan-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-cyan-700 dark:text-cyan-200">AI-ready</span>
              </div>
              <div className="space-y-5 py-7">
                <p className="text-2xl font-semibold tracking-[-.04em] text-slate-900 dark:text-white">Product engineering with an AI horizon.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[['01', 'Human-centred UX'], ['02', 'Reliable systems'], ['03', 'AI fluency'], ['04', 'Clear communication']].map(([n, text]) => <div key={n} className="rounded-xl bg-slate-100 p-3 dark:bg-white/[.06]"><span className="font-mono text-[10px] text-cyan-700 dark:text-cyan-300">{n}</span><p className="mt-2 text-xs font-medium text-slate-700 dark:text-slate-300">{text}</p></div>)}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400"><span>Open to meaningful work</span><span className="text-cyan-700 dark:text-cyan-300">● Available</span></div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="work" className="section-shell">
        <div className="section-inner">
          <motion.div {...fadeUp(reduced)} className="section-heading"><p className="eyebrow">Selected work</p><h2>Systems, not just screens.</h2><p>Work shaped around the product problem, the engineering choices, and the people using it.</p></motion.div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => <motion.article key={project.title} {...fadeUp(reduced, index * 0.08)} whileHover={reduced ? {} : { y: -7 }} className={`project-card project-${project.accent}`}>
              <div className="flex items-start justify-between"><span className="font-mono text-xs text-slate-500 dark:text-slate-400">{project.number}</span><span className="project-orb" /></div>
              <p className="mt-10 text-[11px] font-semibold uppercase tracking-[.13em] text-cyan-700 dark:text-cyan-300">{project.label}</p>
              <h3>{project.title}</h3><p className="description">{project.description}</p>
              <p className="outcome"><strong>Focus:</strong> {project.outcome}</p>
              {project.metrics && <div className="metric-strip">{project.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-6">{project.stack.map((item) => <span key={item} className="tag">{item}</span>)}</div>
              {project.caseStudy ? <Link to={project.caseStudy} className="case-study-link">Read case study <Arrow /></Link> : project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="case-study-link">Visit application <Arrow /></a> : <p className="mt-4 text-[11px] font-medium text-slate-500 dark:text-slate-400">{project.availability}</p>}
            </motion.article>)}
          </div>
          <p className="mt-7 text-sm text-slate-500 dark:text-slate-400">Some professional work is confidential. I can discuss scope, approach, and technical decisions in an interview.</p>
        </div>
      </section>

      <section id="about" className="section-shell section-tint">
        <div className="section-inner grid gap-12 lg:grid-cols-[.78fr,1.22fr] lg:items-start">
          <motion.div {...fadeUp(reduced)} className="section-heading mb-0">
            <p className="eyebrow">Approach</p>
            <h2>I make complexity feel considered.</h2>
            <figure className="portrait-frame">
              <img src="/faith-headshot.jpg" alt="Faith Abraham" width="1120" height="1400" />
              <figcaption><span>Faith Abraham</span><span>Software × AI</span></figcaption>
            </figure>
          </motion.div>
          <motion.div {...fadeUp(reduced, .08)} className="space-y-7 text-base leading-8 text-slate-600 dark:text-slate-400">
            <p>I care about the hard, unglamorous parts of software: untangling a vague requirement, creating a clear component boundary, and making the next engineer’s job easier. Good product work is empathy, systems thinking, and follow-through.</p>
            <p>My next chapter is applied AI. I’m building depth in how AI features are designed, evaluated, and made trustworthy—not treating AI as a decorative add-on.</p>
            <a href="#experience" className="inline-flex items-center gap-2 font-semibold text-slate-900 underline decoration-cyan-400 decoration-2 underline-offset-4 dark:text-white">See my experience <Arrow /></a>
          </motion.div>
        </div>
      </section>

      <section id="capabilities" className="section-shell"><div className="section-inner"><motion.div {...fadeUp(reduced)} className="section-heading"><p className="eyebrow">Capabilities</p><h2>Full-stack craft, with an AI-engineering mindset.</h2></motion.div><div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:grid-cols-2">{capabilities.map(([title, text], index) => <motion.div {...fadeUp(reduced, index * .06)} key={title} className="bg-white p-6 dark:bg-slate-950"><span className="font-mono text-xs text-cyan-700 dark:text-cyan-300">0{index + 1}</span><h3 className="mt-6 text-xl font-semibold tracking-[-.03em] text-slate-900 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></motion.div>)}</div></div></section>

      <section id="ai" className="section-shell ai-section"><div className="section-inner grid gap-10 lg:grid-cols-[1.1fr,.9fr] lg:items-center"><motion.div {...fadeUp(reduced)}><p className="eyebrow">AI engineering, in progress</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] text-slate-950 dark:text-white sm:text-5xl">Curious enough to explore. Rigorous enough to test.</h2><p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">I’m transitioning from using AI tools to engineering reliable AI products. The aim: useful systems with grounded outputs, clear evaluation, and human judgment where it matters.</p></motion.div><motion.div {...fadeUp(reduced,.1)} className="rounded-2xl border border-cyan-500/20 bg-cyan-50 p-6 dark:bg-cyan-300/[.05]"><p className="font-mono text-xs text-cyan-800 dark:text-cyan-200">CURRENT LEARNING LOOP</p><ol className="mt-5 space-y-5">{learningNow.map((item, index) => <li key={item} className="flex gap-4 text-sm leading-6 text-slate-700 dark:text-slate-300"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-700 text-[10px] font-bold text-white dark:bg-cyan-300 dark:text-slate-950">{index + 1}</span>{item}</li>)}</ol></motion.div></div></section>

      <section id="experience" className="section-shell"><div className="section-inner"><motion.div {...fadeUp(reduced)} className="section-heading"><p className="eyebrow">Experience</p><h2>Learning by shipping.</h2></motion.div><div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">{experience.map((role, index) => <motion.article {...fadeUp(reduced,index*.07)} key={role.company} className="grid gap-3 py-7 md:grid-cols-[150px,1fr,1.4fr]"><p className="font-mono text-xs text-slate-500 dark:text-slate-400">{role.period}</p><div><h3 className="font-semibold text-slate-950 dark:text-white">{role.company}</h3><p className="mt-1 text-sm text-cyan-700 dark:text-cyan-300">{role.title}</p></div><p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{role.text}</p></motion.article>)}</div></div></section>

      <section id="contact" className="section-shell"><div className="section-inner"><motion.div {...fadeUp(reduced)} className="contact-panel"><p className="eyebrow">Let’s work together</p><h2>Have a difficult product problem worth solving?</h2><p>I’m open to software engineering opportunities where product craft, systems thinking, and an AI future matter.</p><div className="mt-8 flex flex-wrap gap-3"><a className="button-primary" href={`mailto:${profile.email}`}>Email me <Arrow /></a><a className="button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a className="button-secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></motion.div></div></section>
    </>
  );
};

export default HomePage;
