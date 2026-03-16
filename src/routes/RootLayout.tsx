import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";
import ThemeProvider, { useTheme } from "../context/ThemeContext";

const Shell = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const base = "min-h-screen transition-colors duration-300";
  const scheme =
    theme === "dark"
      ? "bg-slate-950 text-slate-50"
      : "bg-slate-50 text-slate-900";

  return (
    <div className={`${base} ${scheme}`}>
      <Navbar />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const RootLayout = () => (
  <ThemeProvider>
    <Shell />
  </ThemeProvider>
);

export default RootLayout;

