export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 sm:px-8 lg:px-12 pt-28 pb-20">
      <div className="max-w-5xl mx-auto text-center">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-3">Contact</h1>
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </header>
        <p className="text-slate-700 text-base md:text-lg mb-10">
          I’m open to freelance, full-time opportunities, and collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="mailto:faithabraham00@gmail.com" className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-6 py-3 rounded-lg font-semibold">Email Me</a>
          <a href="https://github.com/ozavizcodes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-semibold">GitHub</a>
          <a href="https://www.linkedin.com/in/faith-abraham-a738bb223/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white px-6 py-3 rounded-lg font-semibold">LinkedIn</a>
          <a href="tel:+2349069060974" className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold">Call</a>
        </div>
      </div>
    </main>
  );
}
