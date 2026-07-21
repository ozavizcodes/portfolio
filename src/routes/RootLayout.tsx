import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";
import ThemeProvider, { useTheme } from "../context/ThemeContext";

const Shell = () => {
  const location = useLocation();
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return <div className={theme === "dark" ? "min-h-screen bg-slate-950 text-white" : "min-h-screen bg-white text-slate-950"}><Navbar /><main className="pt-20"><AnimatePresence mode="wait"><PageTransition key={location.pathname}><Outlet /></PageTransition></AnimatePresence></main><Footer /></div>;
};

export default function RootLayout() { return <ThemeProvider><Shell /></ThemeProvider>; }
