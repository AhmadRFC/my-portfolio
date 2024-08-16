import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

  return (

    <motion.nav 
    className={`fixed w-full z-50 transition-all duration-300 ${navbar ? "bg-white shadow-md" : "bg-transparent"}`}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinksdata.map(({ _id, title, link }) => (
                <Link
                  key={_id}
                  to={link}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinksdata.map(({ _id, title, link }) => (
            <Link
              key={_id}
              to={link}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link
                  ? "text-white bg-gray-900"
                  : "text-gray-700 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={logo} alt="Profile" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-gray-700">Ahmad Alabbasei</div>
              <div className="text-sm font-medium leading-none text-gray-500">@AhmadRFC</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="https://twitter.com/AhmadRFC"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/alabbasei/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AhmadRFC"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;