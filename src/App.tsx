import { Routes, Route } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";
import BlogPostPage from "./routes/BlogPostPage";
import ProjectDetailPage from "./routes/ProjectDetailPage";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;

