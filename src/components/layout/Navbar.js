import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
import { navLinksdata } from "../../utils/constants";
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const isActive = (path) => {
    const currentPath = location.pathname;
    if (path === "/") {
      return currentPath === "/" || currentPath === "/home";
    }
    return currentPath === path;
  };

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${navbar ? "bg-white shadow-md" : "bg-transparent"}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-8 w-auto" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="ml-3 md:hidden text-xs text-gray-500 bg-yellow-100 py-1 px-2 rounded-md">
              🚧 Under development 🚧
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinksdata.map(({ _id, title, link }) => (
                  <Link
                    key={_id}
                    to={link}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(link)
                        ? "text-white bg-gray-900"
                        : "text-gray-700 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <a href="https://twitter.com/AhmadRFC" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                  <FaSquareXTwitter />
                </a>
                <a href="https://www.linkedin.com/in/alabbasei/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/AhmadRFC" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
          <div className="hidden md:block text-center text-sm text-gray-500 bg-yellow-100 py-1 px-2 rounded-b-md">
          🚧 This portfolio is under development. Updates coming soon! 🚧
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img className="h-8 w-auto" src={logo} alt="Logo" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinksdata.map(({ _id, title, link }) => (
                  <Link
                    key={_id}
                    to={link}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(link)
                        ? "text-white bg-gray-900"
                        : "text-gray-700 hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300 pb-3">
                <div className="flex justify-center gap-10">
                  <a href="https://twitter.com/AhmadRFC" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                    <FaSquareXTwitter className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/alabbasei/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/AhmadRFC" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                    <FaGithub className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50" onClick={() => setIsOpen(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;