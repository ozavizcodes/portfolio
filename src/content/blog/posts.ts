export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO string, e.g. "2026-02-10"
  summary: string;
  tags: string[];
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-components-outside-in",
    title: "Designing components from the outside in",
    date: "2026-03-01",
    summary:
      "How thinking in terms of usage first leads to simpler, more resilient APIs.",
    tags: ["React", "TypeScript", "API Design"],
    blocks: [
      {
        type: "p",
        text: "When building UI components, I like to start from how the component will be *used*, not from how the component will be implemented. That mindset naturally drives clearer props and fewer escape hatches.",
      },
      {
        type: "h3",
        text: "Define success criteria first",
      },
      {
        type: "p",
        text: "Before writing code, I write down what inputs the component needs and what outputs it should produce (including edge cases). This turns the “shape” of the API into something tangible.",
      },
      {
        type: "quote",
        text: "An API that matches real usage reduces mental overhead for every future consumer.",
      },
      {
        type: "h3",
        text: "Make the easy path the correct path",
      },
      {
        type: "ul",
        items: [
          "Prefer a small set of well-named props over many optional flags.",
          "Use sensible defaults so callers can move quickly.",
          "Document expectations for tricky props (like controlled vs uncontrolled patterns).",
        ],
      },
      {
        type: "p",
        text: "Once the API is solid, the implementation tends to become a straightforward translation of requirements into state and effects.",
      },
    ],
  },
  {
    slug: "pragmatic-performance-checklist",
    title: "A pragmatic performance checklist for React apps",
    date: "2026-03-15",
    summary:
      "Small, repeatable steps that catch the biggest performance wins early.",
    tags: ["Performance", "React", "UX"],
    blocks: [
      {
        type: "p",
        text: "Most performance wins come from removing avoidable work. Instead of chasing micro-optimizations, I run a checklist focused on the biggest multipliers.",
      },
      {
        type: "h3",
        text: "The checklist I actually use",
      },
      {
        type: "ul",
        items: [
          "Measure first (Lighthouse + real user reports when available).",
          "Audit re-renders: find expensive components and stabilize props.",
          "Minimize network waterfalls: prefetch or parallelize where appropriate.",
          "Reduce heavy JS on the critical path (code split and lazy load).",
          "Use images efficiently (size, formats, and correct aspect/crop).",
        ],
      },
      {
        type: "p",
        text: "If you do these consistently, you’ll usually feel the improvements quickly and avoid regressions that are hard to diagnose later.",
      },
    ],
  },
  {
    slug: "shipping-with-feedback-loops",
    title: "Shipping with feedback loops",
    date: "2026-03-22",
    summary:
      "How I iterate from “it works” to “people trust it” using fast feedback.",
    tags: ["Product Thinking", "Engineering", "Quality"],
    blocks: [
      {
        type: "p",
        text: "In most projects, the hardest part isn’t building the first version—it’s making the product reliable enough that users keep coming back.",
      },
      {
        type: "h3",
        text: "Turn ambiguity into experiments",
      },
      {
        type: "p",
        text: "When requirements are fuzzy, I turn assumptions into small experiments: ship a narrow slice, observe real behavior, then refine based on what actually happens.",
      },
      {
        type: "quote",
        text: "Feedback loops are how you convert uncertainty into measurable progress.",
      },
      {
        type: "h3",
        text: "Keep the loop short",
      },
      {
        type: "ul",
        items: [
          "Choose the smallest slice that still validates the core behavior.",
          "Instrument the key screens (errors, timing, and drop-off).",
          "Refactor after you learn—don’t wait for perfection to start shipping.",
        ],
      },
    ],
  },
];

