export default function SkillsPage() {
  const skills = ['React','Next.js','TypeScript','Tailwind CSS','Node.js','Git','Docker','Testing'];
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 sm:px-8 lg:px-12 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-3">Skills</h1>
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s} className="bg-white rounded-xl p-6 shadow border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-3 bg-gradient-to-br from-indigo-100 to-violet-100" />
              <p className="font-semibold text-slate-800">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
