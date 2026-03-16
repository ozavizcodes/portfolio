import SectionShell from "../layout/SectionShell";

const posts = [
  {
    title: "Designing components from the outside in",
    summary:
      "How thinking in terms of usage first leads to simpler, more resilient APIs.",
  },
];

const BlogSection = () => (
  <SectionShell
    id="blog"
    eyebrow="Insights"
    title="Occasional notes on building products."
  >
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.title}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300"
        >
          <h3 className="text-base font-semibold text-slate-50">
            {post.title}
          </h3>
          <p className="mt-2 text-xs">{post.summary}</p>
        </article>
      ))}
    </div>
  </SectionShell>
);

export default BlogSection;

