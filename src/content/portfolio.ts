export const profile = {
  name: "Faith Abraham",
  role: "Software Engineer · Emerging AI Engineer",
  location: "Lagos, Nigeria · Working remotely",
  email: "faithabraham00@gmail.com",
  github: "https://github.com/ozavizcodes",
  linkedin: "https://www.linkedin.com/in/faith-abraham-a738bb223/",
};

export const projects = [
  {
    number: "01",
    title: "NotchBooks",
    label: "Frontend lead · Fintech + AI",
    description:
      "Leading the frontend and AI user experience for an AI-assisted, multi-tenant accounting platform spanning double-entry books, AR/AP, banking, reconciliation, and reporting.",
    outcome: "Owns frontend delivery and requirement-to-product quality; partners with the backend team to close functional gaps across the system.",
    metrics: ["350 UI commits · 50% of team total", "16 modules · 40+ screens", "24+ AI commits · ~170 test lines"],
    availability: "Private testing · public link coming soon",
    caseStudy: "/projects/notchbooks",
    liveUrl: null,
    stack: ["React", "TypeScript", "NestJS", "Prisma", "MySQL", "Vercel AI SDK"],
    accent: "violet",
  },
  {
    number: "02",
    title: "Virtual healthcare platform",
    label: "Lead full-stack engineer · Healthcare",
    description:
      "A dual-modality virtual care platform that connects verified members with in-house doctors over Zoom video and Sendbird chat, while preserving structured, auditable clinical workflows.",
    outcome: "Led ~90% of the API, solely built the doctor and admin apps, and contributed to the patient experience.",
    metrics: ["~90% NestJS API ownership", "100% doctor + admin UIs", "2 care modalities · video + chat"],
    availability: "Professional work · details available on request",
    caseStudy: "/projects/virtual-healthcare",
    liveUrl: null,
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    accent: "cyan",
  },
  {
    number: "03",
    title: "NotchHR Recruitment",
    label: "Frontend engineering · HR technology",
    description:
      "A recruitment module within NotchHR that lets teams define reusable job roles and competency requirements, then carry those selections into new job opportunities.",
    outcome: "Built Job Roles & Competency and Job Opportunities workflows so selected competency requirements persist and stay consistent across hiring requests.",
    availability: "Professional work · details available on request",
    caseStudy: null,
    liveUrl: "https://notchhr.io/recruitment/",
    stack: ["React", "TypeScript", "AngularJS", "REST APIs"],
    accent: "violet",
  },
  {
    number: "04",
    title: "Jobs NotchHR",
    label: "Full-stack engineering · Recruitment platform",
    description:
      "A multi-tenant recruitment application where company teams publish roles and applicants create profiles, add credentials, apply, and progress through the hiring process.",
    outcome: "Built candidate onboarding, profile, job-discovery, and application flows from design handoff through shipped product functionality.",
    availability: "Professional work · details available on request",
    caseStudy: null,
    liveUrl: "https://jobs.notchhr.io/?page=1",
    stack: ["React", "Node.js", "TypeScript", "Figma"],
    accent: "amber",
  },
];

export const experience = [
  {
    period: "Jan 2026 — now",
    company: "NotchBooks",
    title: "Frontend lead · Fintech + AI",
    text: "Leading frontend delivery and the AI user experience for a multi-tenant accounting platform; partnering with the backend team to turn requirements into reliable end-to-end functionality.",
  },
  {
    period: "2024 — now",
    company: "Leadway Assurance",
    title: "Full-stack engineer",
    text: "Building virtual care experiences across patient, clinician, and administrative journeys; contributing from interface architecture through secure backend integrations.",
  },
  {
    period: "2023 — 2024",
    company: "NotchHR",
    title: "Frontend engineer",
    text: "Shipped recruitment workflows and a reusable Job Roles & Competency module in close partnership with product and design.",
  },
  {
    period: "2021 — 2023",
    company: "Job.myXalary",
    title: "Full-stack engineer",
    text: "Built candidate onboarding and job-discovery experiences, growing from design handoff to independent feature delivery.",
  },
];

export const capabilities = [
  ["Product engineering", "React, TypeScript, accessible interfaces, design systems"],
  ["Backend foundations", "Node.js, NestJS, REST APIs, databases, real-time systems"],
  ["AI engineering path", "LLM applications, retrieval systems, evaluations, AI product design"],
  ["How I work", "Problem framing, practical trade-offs, ownership, collaborative delivery"],
];

export const learningNow = [
  "Building grounded LLM experiences with retrieval and citations",
  "Evaluating AI features for quality, safety, and real-world usefulness",
  "Designing agent workflows that keep humans in control",
];
