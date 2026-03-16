import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Insights" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-50"
        >
          <span className="h-7 w-7 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
          <span>Faith Abraham</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-xs font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {section.label}
            </button>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-white/15 bg-slate-900/60 px-3 py-1 text-xs text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-900/70 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-4 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setOpen(false);
                }}
                className="rounded-lg px-2 py-1.5 text-left text-sm text-slate-200 hover:bg-slate-800"
              >
                {section.label}
              </button>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="mt-2 rounded-lg border border-white/15 px-2 py-1.5 text-left text-sm text-slate-200 hover:border-cyan-400"
            >
              Toggle theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

