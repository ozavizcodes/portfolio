import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { profile } from "../../content/portfolio";

const links = [
  ["work", "Work"],
  ["about", "About"],
  ["ai", "AI path"],
  ["experience", "Experience"],
];

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-white/[.08] dark:bg-slate-950/75">
    <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6">
      <button onClick={() => go("home")} className="group flex items-center gap-2.5 text-left"><span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-950 text-[11px] font-bold text-white transition-transform group-hover:rotate-[-8deg] dark:bg-white dark:text-slate-950">FA</span><span><span className="block text-sm font-semibold tracking-[-.03em] text-slate-950 dark:text-white">{profile.name}</span><span className="block text-[10px] uppercase tracking-[.16em] text-slate-500 dark:text-slate-400">software × AI</span></span></button>
      <div className="hidden items-center gap-5 lg:flex">{links.map(([id, label]) => <button key={id} onClick={() => go(id)} className="text-xs font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">{label}</button>)}<button onClick={toggleTheme} className="theme-button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? "☀" : "◐"}</button><button onClick={() => go("contact")} className="nav-cta">Let’s talk <span aria-hidden>↗</span></button></div>
      <div className="flex items-center gap-2 lg:hidden"><button onClick={toggleTheme} className="theme-button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? "☀" : "◐"}</button><button className="theme-button text-lg" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? "×" : "☰"}</button></div>
    </nav>
    {open && <div className="border-t border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-slate-950 lg:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-1">{links.map(([id, label]) => <button key={id} onClick={() => { go(id); setOpen(false); }} className="rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5">{label}</button>)}<button onClick={() => { go("contact"); setOpen(false); }} className="mt-2 rounded-lg bg-slate-950 px-3 py-2.5 text-left text-sm font-semibold text-white dark:bg-white dark:text-slate-950">Let’s talk ↗</button></div></div>}
  </header>;
};

export default Navbar;
