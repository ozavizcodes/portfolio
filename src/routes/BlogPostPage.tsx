import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionShell from "../components/layout/SectionShell";
import { blogPosts, type BlogBlock, type BlogPost } from "../content/blog/posts";

const BlogBlockRenderer = ({ block }: { block: BlogBlock }) => {
  switch (block.type) {
    case "p":
      return <p className="text-sm leading-7 text-slate-300">{block.text}</p>;
    case "h3":
      return (
        <h3 className="mt-6 text-base font-semibold text-slate-100">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="mt-6 border-l-2 border-cyan-400/60 pl-4 text-sm italic text-slate-200">
          {block.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
          {block.items.map((item) => (
            <li key={item} className="break-words">
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post: BlogPost | undefined = useMemo(() => {
    if (!slug) return undefined;
    return blogPosts.find((p) => p.slug === slug);
  }, [slug]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-xs text-cyan-300 underline underline-offset-2"
      >
        ← Back
      </button>

      {post ? (
        <SectionShell
          id="blog"
          eyebrow="Insights"
          title={post.title}
          subtitle={post.tags.join(" · ")}
        >
          <div className="space-y-4">
            <p className="text-xs font-medium text-cyan-300">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            <p className="text-sm text-slate-300">{post.summary}</p>

            <div className="space-y-2">
              {post.blocks.map((block, idx) => (
                <BlogBlockRenderer key={`${block.type}-${idx}`} block={block} />
              ))}
            </div>
          </div>
        </SectionShell>
      ) : (
        <SectionShell
          id="blog"
          eyebrow="Insights"
          title="Post not found"
          subtitle="Check the slug and try again."
        >
          <p className="text-sm text-slate-300">
            This blog write-up doesn&apos;t exist (or was removed). Go back and
            pick another post.
          </p>
        </SectionShell>
      )}
    </div>
  );
};

export default BlogPostPage;

