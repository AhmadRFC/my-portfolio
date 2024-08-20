import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import DronePhotography from "./components/home/DronePhotography";
import './output.css';

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Resume = React.lazy(() => import("./components/resume/Resume"));

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

const RedirectComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const path = new URLSearchParams(location.search).get('p');
    if (path) {
      navigate(path);
    } else if (location.pathname === '/') {
      navigate('/home');
    }
  }, [navigate, location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col mt-6">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<RedirectComponent />} />
              <Route
                path="/home"
                element={
                  <motion.div
                    className="flex-grow flex flex-col"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div
                    className="flex-grow flex flex-col"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Projects />
                  </motion.div>
                }
              />
              <Route
                path="/resume"
                element={
                  <motion.div
                    className="flex-grow flex flex-col"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Resume />
                  </motion.div>
                }
              />
              <Route
                path="/drone-photography"
                element={
                  <motion.div
                    className="flex-grow flex flex-col"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <DronePhotography />
                  </motion.div>
                }
              />
              <Route path="*" element={ <Navigate to="/home" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;