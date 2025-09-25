'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    'Software Developer',
    'Frontend Engineer',
    'React Specialist',
    'Problem Solver',
    'Tech Enthusiast',
    'Full Stack Developer',
    'Web Developer',
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === texts[textIndex]) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(
          isDeleting
            ? texts[textIndex].substring(0, currentText.length - 1)
            : texts[textIndex].substring(0, currentText.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 snap-y snap-proximity px-6 sm:px-10 lg:px-16 xl:px-24">
      {/* Decorative background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-indigo-200/40 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
          <div className="flex justify-between items-center py-4">
            <a href="#top" className="text-2xl font-extrabold tracking-tight text-slate-700">Portfolio</a>
            <div className="hidden md:flex items-center gap-10">
              <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Skills</a>
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Contact</a>
            </div>
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 transition"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
            <div className="px-6 py-4 space-y-4">
              <a onClick={() => setMobileOpen(false)} href="#projects" className="block text-slate-600 hover:text-indigo-600 font-medium">Projects</a>
              <a onClick={() => setMobileOpen(false)} href="#skills" className="block text-slate-600 hover:text-indigo-600 font-medium">Skills</a>
              <a onClick={() => setMobileOpen(false)} href="#about" className="block text-slate-600 hover:text-indigo-600 font-medium">About</a>
              <a onClick={() => setMobileOpen(false)} href="#contact" className="block text-slate-600 hover:text-indigo-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Social vertical icons */}
      <div className="hidden">
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/faith-abraham-a738bb223/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-white/90 text-slate-700 shadow hover:shadow-md hover:text-indigo-600 flex items-center justify-center">in</a>
        <a aria-label="GitHub" href="https://github.com/ozavizcodes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-white/90 text-slate-700 shadow hover:shadow-md hover:text-indigo-600 flex items-center justify-center">gh</a>
        <a aria-label="Email" href="mailto:faithabraham00@gmail.com" className="w-8 h-8 rounded-md bg-white/90 text-slate-700 shadow hover:shadow-md hover:text-indigo-600 flex items-center justify-center">@</a>
        <a aria-label="Phone" href="tel:+2349069060974" className="w-8 h-8 rounded-md bg-white/90 text-slate-700 shadow hover:shadow-md hover:text-indigo-600 flex items-center justify-center">☎</a>
      </div>

      {/* Hero Section */}
      <section id="top" className="pt-32 md:pt-40 pb-20 md:pb-24 px-8 sm:px-12 lg:px-16 xl:px-24 min-h-screen flex items-center snap-center snap-always">
        <div className="max-w-5xl mx-auto w-full">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left: text */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-violet-700 to-blue-700 drop-shadow-lg">
                 Abraham Faith
                </span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl text-slate-800 mb-6 h-12 flex items-center md:justify-start justify-center font-bold">
                <span className="border-r-2 border-indigo-500 pr-2">{currentText}</span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 leading-relaxed max-w-xl md:max-w-none mx-auto md:mx-0">
                I build interactive, accessible web apps with React, Next.js and TypeScript. Focused on clean code, UX and delivering business value.
              </p>
              <div className="flex flex-wrap gap-4 md:justify-start justify-center mt-4 md:mt-5">
                <a href="#projects" className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white !px-7 !py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white !px-8 !py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                  Contact Me
                </a>
              </div>
            </div>
            {/* Right: photo placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-blue-400 shadow-2xl overflow-hidden">
                <Image src="/profile.jpg" alt="Profile photo" fill className="object-cover" priority sizes="(max-width: 768px) 16rem, 18rem" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-24 md:pt-28 pb-32 md:pb-36 px-8 sm:px-12 lg:px-16 xl:px-24 scroll-mt-32 min-h-screen flex items-center snap-center snap-always">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16 px-4 py-2">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-800 mb-3">Skills & Tools</h2>
            <p className="text-slate-600 md:text-base mb-4">Core technologies I use to build reliable, accessible products.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              { name:'React', level:90 },
              { name:'Next.js', level:85 },
              { name:'TypeScript', level:88 },
              { name:'Tailwind', level:92 },
              { name:'Node.js', level:80 },
              { name:'Testing', level:70 },
              { name:'Git', level:85 },
              { name:'CI/CD', level:75 },
            ].map((s) => (
              <div key={s.name} className="bg-white rounded-xl p-7 shadow-sm hover:shadow border border-slate-200 transition-shadow">
                <p className="font-semibold text-slate-800 mb-4 text-center">{s.name}</p>
                <div className="h-2.5 rounded-full bg-slate-200">
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{width:`${s.level}%`}} />
                </div>
                <p className="text-xs text-slate-600 mt-2 text-right">{s.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects teaser */}
      <section id="projects" className="py-32 md:py-36 px-8 sm:px-12 lg:px-16 xl:px-24 bg-gradient-to-r from-violet-50 to-indigo-50 scroll-mt-32 min-h-screen flex items-center snap-center snap-always">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-800 mb-3">Featured Projects</h2>
              <p className="text-slate-600">A glimpse of work. See more on request.</p>
            </div>
            <a href="#contact" className="md:inline-flex inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold">Work with me →</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1,2,3].map((n) => (
              <div key={n} className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-slate-200 overflow-hidden transition-shadow">
                <div className="h-48 bg-gradient-to-br from-indigo-400 via-violet-400 to-blue-400" />
                <div className="p-7">
                  <h3 className="font-bold text-slate-800 mb-2">Project {n}</h3>
                  <p className="text-slate-600 text-sm mb-4">Brief description of the problem, solution and tech stack.</p>
                  <div className="flex gap-4 text-sm">
                    <a className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-md bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 transition-colors" href="#">Live →</a>
                    <a className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-md bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-200 transition-colors" href="#">Code →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Writing */}
      <section id="articles" className="py-36 md:py-44 px-8 sm:px-14 lg:px-24 xl:px-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-4">Writing</h2>
            <p className="text-slate-600 md:text-lg max-w-3xl md:mx-auto">
              I care about building fast, accessible interfaces with thoughtful engineering. Below is a short
              note about me and a couple of recent write‑ups. This is placeholder content you can replace with
              your own story and posts.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-3xl border border-slate-200 p-8 md:p-10 mb-14 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">About me</h3>
            <p className="text-slate-700 leading-7 md:text-lg">
              I’m a frontend engineer focused on crafting reliable, inclusive web apps. I enjoy designing
              clear component APIs, optimizing performance, and collaborating closely with designers to deliver
              polished interactions. Recently, I’ve been working with React, Next.js, TypeScript and Tailwind,
              building accessible UIs, improving DX, and shaping design systems. Outside work, I write notes
              about developer experience, testing, and UX.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {[1,2].map((n) => (
              <article key={n} className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 p-7 transition-shadow">
                <h3 className="font-bold text-slate-800 mb-2">Article title {n}</h3>
                <p className="text-slate-600 text-sm mb-4">Short preview of the writeup. Replace with your actual posts later.</p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">Read more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-32 md:py-36 px-8 sm:px-12 lg:px-16 xl:px-24 scroll-mt-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-slate-800 mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-10"></div>
          <p className="text-sm md:text-base text-slate-600 mb-12">Have a project in mind? I'd love to hear about it.</p>
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7">
            <a href="mailto:faithabraham00@gmail.com" className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white !px-8 !py-3.5 rounded-xl font-semibold text-sm md:text-base shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white">Email Me</a>
            <a href="https://github.com/ozavizcodes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white !px-7 !py-3.5 rounded-xl font-semibold text-sm md:text-base shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white">GitHub</a>
            <a href="https://www.linkedin.com/in/faith-abraham-a738bb223/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white !px-7 !py-3.5 rounded-xl font-semibold text-sm md:text-base shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white">LinkedIn</a>
            <a href="tel:+2349069060974" className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-900 !px-7 !py-3.5 rounded-xl font-semibold text-sm md:text-base shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white">Call</a>
          </div>
        </div>
      </section>

      {/* Footer (dark) */}
      <footer className="bg-[#2b1a55] text-[#e5e0ff] py-24 px-8 sm:px-14 lg:px-24 xl:px-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start mb-12 md:mb-16">
            <div className="md:col-span-5">
              <div className="text-2xl md:text-3xl font-extrabold mb-4">Portfolio</div>
              <p className="text-sm/6 md:text-base/7 opacity-90">
                Frontend developer focused on scalable, accessible products.
              </p>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-semibold mb-3">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#skills" className="hover:underline">Skills</a></li>
                <li><a href="#articles" className="hover:underline">Writing</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-semibold mb-3">Say hello</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:faithabraham00@gmail.com" className="hover:underline">faithabraham00@gmail.com</a></li>
                <li><a href="https://github.com/ozavizcodes" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/ozavizcodes</a></li>
                <li><a href="https://www.linkedin.com/in/faith-abraham-a738bb223/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-xs opacity-80 text-center">© 2024 Abraham Faith. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
