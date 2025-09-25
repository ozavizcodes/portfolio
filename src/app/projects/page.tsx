export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 sm:px-8 lg:px-12 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-3">Projects</h1>
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </header>
        <p className="text-slate-700 text-base md:text-lg text-center mb-12">
          Replace this content with your real project cards and case studies.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map((n) => (
            <div key={n} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-400 via-violet-400 to-blue-400 mb-4" />
              <h2 className="font-bold text-slate-800 mb-2">Project {n}</h2>
              <p className="text-slate-600 text-sm">Short description of what this project does and the tech used.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
