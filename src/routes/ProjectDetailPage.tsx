import { useParams, useNavigate } from "react-router-dom";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-xs text-cyan-300 underline underline-offset-2"
      >
        ← Back
      </button>
      <h1 className="mt-6 text-2xl font-semibold text-slate-50">
        Project: {slug}
      </h1>
      <p className="mt-3 text-sm text-slate-300">
        This is a placeholder detail page. You can expand it into a full case
        study with problem, approach, and impact sections.
      </p>
    </div>
  );
};

export default ProjectDetailPage;

