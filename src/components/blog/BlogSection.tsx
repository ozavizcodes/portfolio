import { Link } from "react-router-dom";
import SectionShell from "../layout/SectionShell";

import { blogPosts } from "../../content/blog/posts";

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogSection = () => (
  <SectionShell
    id="blog"
    eyebrow="Insights"
    title="Occasional notes on building products."
  >
    <div className="grid gap-4 md:grid-cols-2">
      {blogPosts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`}>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300 transition hover:border-cyan-400 hover:bg-slate-900/70">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-50">
                {post.title}
              </h3>
              <span className="shrink-0 text-[11px] text-cyan-300">
                {formatDate(post.date)}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-300">{post.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1 text-[11px]">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 text-xs font-medium text-cyan-300">
              Read →
            </div>
          </article>
        </Link>
      ))}
    </div>
  </SectionShell>
);

export default BlogSection;

