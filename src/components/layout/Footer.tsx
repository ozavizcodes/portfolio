import { profile } from "../../content/portfolio";

const Footer = () => <footer className="border-t border-slate-200 dark:border-white/10"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:text-slate-400"><p>© {new Date().getFullYear()} {profile.name}. Built with care and curiosity.</p><p>React · TypeScript · AI in progress</p></div></footer>;

export default Footer;
