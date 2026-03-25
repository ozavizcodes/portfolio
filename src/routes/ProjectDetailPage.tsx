import { useParams, useNavigate } from "react-router-dom";

type Section = {
  heading: string;
  body?: string;
  bullets?: string[];
};

type ProjectDetail = {
  title: string;
  role: string;
  intro: string;
  sections: Section[];
};

const projects: Record<string, ProjectDetail> = {
  "telemedicine-platform": {
    title: "Telemedicine Platform — Patient, Doctor & Admin Apps",
    role: "Full‑Stack Engineer (React/TypeScript + NestJS)",
    intro:
      "A full‑stack telemedicine platform used by patients, clinicians, and admins to deliver secure virtual care across multiple environments.",
    sections: [
      {
        heading: "Problem & Context",
        body:
          "Patients needed an easy way to book and attend virtual consultations, while clinicians and admins needed reliable tools for managing queues, documentation, and operations in a regulated environment.",
      },
      {
        heading: "What I Worked On",
        body:
          "I helped build three React + TypeScript frontends (patient, doctor, admin) and contributed to a NestJS backend. My work covered real-time consultation flows, structured clinical documentation (SOAP notes, ICD-10), scheduling, secure authentication/authorization, and the integration points for third-party video sessions.",
      },
      {
        heading: "How It Works",
        body:
          "Patients onboard, answer triage questions, book appointments, and join secure chat/video sessions. Doctors work in a consultation workspace with patient history, vitals, and rich notes. Admins manage users, configurations, and analytics, with strong logging and audit trails.",
      },
      {
        heading: "Zoom SDK (Third-Party Video Chat)",
        body:
          "Integrated Zoom SDK to deliver reliable in-app video consultations, with careful handling of the meeting lifecycle and device permissions.",
        bullets: [
          "Embedded/configured Zoom SDK in the React UI and wired up meeting controls (join/leave, mute/unmute).",
          "Handled the meeting lifecycle with real-time state (connecting, in-meeting, ended) and user-friendly fallbacks.",
          "Managed permission flows (camera/mic) and device selection so users could start sessions with minimal friction.",
          "Built robust error handling for SDK failures (network drops, token/session issues) including retries and graceful recovery.",
          "Designed integration boundaries where the frontend requests secure session tokens and the backend (NestJS) issues/validates them.",
          "Implemented event handling for SDK callbacks (presence changes, session end, media status) to keep UI and backend in sync.",
          "Focused on responsive layout for video tiles and controls so consultations work across screen sizes.",
        ],
      },
    ],
  },
  "job-myxalary": {
    title: "Job.myXalary — Job Listing Platform",
    role: "Frontend Engineer (React) with Node.js contributions",
    intro:
      "A job posting and application platform where candidates create profiles, browse roles, and apply, while hiring teams review and advance applications.",
    sections: [
      {
        heading: "Problem & Context",
        body:
          "The goal was to create a single place where job seekers and companies could meet, with structured profiles and applications instead of scattered CVs and emails.",
      },
      {
        heading: "What I Worked On",
        body:
          "Given a Figma design and requirements, I implemented candidate signup, profile, and job browsing flows in React, and contributed to Node.js endpoints powering listings and applications — often working independently with minimal supervision.",
      },
      {
        heading: "What I Learned",
        body:
          "This was my first major production project. I learned how to move from designs to code, ask targeted questions when stuck, and keep iterating through bugs and feedback until features were ready for real users.",
      },
    ],
  },
  notchhr: {
    title: "NotchHR Recruitment & Job Roles",
    role: "Frontend Engineer (React + AngularJS)",
    intro:
      "A set of internal tools that connect manager job requests, HR recruitment workflows, and public job listings.",
    sections: [
      {
        heading: "Problem & Context",
        body:
          "Managers needed a simple way to request new hires, while HR needed a clear pipeline from those requests to candidates and published job opportunities.",
      },
      {
        heading: "What I Worked On",
        body:
          "I worked on the React‑based job request portal used by managers, the recruitment app’s Job Opportunity module used by HR, and an AngularJS Job Roles & Competency module that attaches skills to each role.",
      },
      {
        heading: "How It Fits Together",
        body:
          "Manager requests flow into HR’s recruitment views, where they can be matched to candidates or turned into public job listings. Defined roles and competencies are reused across openings, keeping skills consistent and reducing manual work.",
      },
    ],
  },
  "personal-projects": {
    title: "Personal Projects — Budget, Todo & Valentine Apps",
    role: "Personal Projects",
    intro:
      "A set of small applications I built to practice fundamentals, experiment with ideas, and create fun experiences for friends and family.",
    sections: [
      {
        heading: "Budget App",
        body:
          "Helps users track income and expenses by category and understand where their money goes. I focused on state management, form handling, and clear, minimal UI.",
      },
      {
        heading: "Todo App",
        body:
          "A fast, keyboard‑friendly todo list with filtering and simple state patterns. It served as a playground for exploring different ways of structuring React state.",
      },
      {
        heading: "Valentine App",
        body:
          "A playful single‑page app hosted on Netlify with a random love quote generator, a countdown to Valentine’s Day, and a special event showcase. It was a chance to practice deployment and polish small interactive details.",
      },
    ],
  },
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = slug ? projects[slug] : undefined;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-xs text-cyan-300 underline underline-offset-2"
      >
        ← Back
      </button>

      {project ? (
        <>
          <h1 className="mt-6 text-2xl font-semibold text-slate-50">
            {project.title}
          </h1>
          <p className="mt-1 text-xs font-medium text-cyan-300">
            {project.role}
          </p>
          <p className="mt-4 break-words text-sm text-slate-300">
            {project.intro}
          </p>

          <div className="mt-8 space-y-6">
            {project.sections.map((section) => (
              <section key={section.heading} className="space-y-2">
                <h2 className="text-sm font-semibold text-slate-100">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="break-words text-sm text-slate-300">
                    {section.body}
                  </p>
                )}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {section.bullets.map((b) => (
                      <li key={b} className="break-words">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="mt-6 text-2xl font-semibold text-slate-50">
            Project details coming soon
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            I&apos;m still writing this case study. Check back later or explore
            other projects on the homepage.
          </p>
        </>
      )}
    </div>
  );
};

export default ProjectDetailPage;

