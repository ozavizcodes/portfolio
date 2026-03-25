import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const profileAlt = "Faith Abraham";

  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300"
          >
            Software Engineer / Full Stack Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
          >
            I build thoughtful, performant{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              product experiences
            </span>
            .
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-sm text-slate-300 md:text-base"
          >
            My name is Faith Abraham. I’m a React + TypeScript and Node.js
            developer who loves turning messy real‑world requirements into
            reliable tools—from job boards and HR systems to full telemedicine
            platforms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2 text-sm font-medium text-slate-100 hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-1 justify-center md:justify-end"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-cyan-500/40 bg-slate-900/80 shadow-2xl md:h-64 md:w-64">
            {!imageError ? (
              <img
                src="/profile.jpg"
                alt={profileAlt}
                loading="lazy"
                className="h-full w-full object-cover object-[50%_15%]"
                onError={() => setImageError(true)}
              />
            ) : (
              <div
                role="img"
                aria-label={profileAlt}
                className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-900 text-center"
              >
                <span className="text-3xl font-semibold tracking-wide text-cyan-300">
                  FA
                </span>
                <span className="px-4 text-sm text-slate-300">{profileAlt}</span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-cyan-400/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

