import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 sm:px-8 lg:px-12 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-3">About</h1>
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </header>

        <section className="grid md:grid-cols-3 gap-10 items-start">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-blue-400 shadow-2xl overflow-hidden">
              <Image src="/profile.jpg" alt="Profile photo" fill className="object-cover" priority sizes="(max-width: 768px) 16rem, 20rem" />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">Hi, I'm Abraham Faith</h2>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
              A frontend-focused developer crafting interactive, accessible web apps with React, Next.js, and TypeScript. 
              I care deeply about clean code, delightful UX, and solving real business problems.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li>• Strong focus on component design, performance, and accessibility</li>
              <li>• Comfortable across the stack: API integration, state management, testing, CI</li>
              <li>• Tools I use often: React, Next.js, TypeScript, Tailwind CSS, Git</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/projects" className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-3 rounded-lg font-semibold">View Projects</a>
              <a href="/contact" className="inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg font-semibold">Get In Touch</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
