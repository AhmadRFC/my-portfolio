import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Projects from "./pages/Projects";
import Resume from "./components/resume/Resume"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
        <Routes>
            {["", "home", "projects", "resume"].map((path, index) => (
              <Route
                key={path}
                path={path === "" ? "/" : `/${path}`}
                element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    {path === "" || path === "home" ? (
                      <Home />
                    ) : path === "projects" ? (
                      <Projects />
                    ) : (
                      <Resume />
                    )}
                  </motion.div>
                }
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;