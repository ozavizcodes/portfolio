import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";
import NotchBooksCaseStudyPage from "./routes/NotchBooksCaseStudyPage";
import VirtualHealthcareCaseStudyPage from "./routes/VirtualHealthcareCaseStudyPage";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/notchbooks" element={<NotchBooksCaseStudyPage />} />
        <Route path="/projects/virtual-healthcare" element={<VirtualHealthcareCaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
