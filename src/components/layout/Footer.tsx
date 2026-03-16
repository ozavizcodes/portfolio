const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} Faith Abraham.{" "}
          <span className="text-slate-500">
            Crafting thoughtful interfaces and systems.
          </span>
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/ozavizcodes"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/faith-abraham-a738bb223/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:faithabraham00@gmail.com"
            className="hover:text-cyan-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

