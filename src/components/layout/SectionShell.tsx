import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionShell = ({ id, eyebrow, title, subtitle, children }: Props) => (
  <section
    id={id}
    className="scroll-mt-28 border-t border-slate-800/60 bg-slate-950/40"
  >
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-3xl space-y-3"
      >
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-300 md:text-base">{subtitle}</p>
        )}
      </motion.header>
      {children}
    </div>
  </section>
);

export default SectionShell;

