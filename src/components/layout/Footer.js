import React from "react";
import logo from '../../assets/images/logo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.div 
      className="w-full pt-10 border-t border-gray-200 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 pb-10">
          <img className="w-32" src={logo} alt="logo" />
          <div className="flex gap-4">
            <a href="https://twitter.com/AhmadRFC" target="_blank" rel="noreferrer">
              <span className="w-12 h-12 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                <FaSquareXTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ahmad-alabbasei-13086326b/" target="_blank" rel="noreferrer">
              <span className="w-12 h-12 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                <FaLinkedin />
              </span>
            </a>
            <a href="https://github.com/AhmadRFC" target="_blank" rel="noreferrer">
              <span className="w-12 h-12 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6">
          <p className="text-gray-600 text-sm text-center">
            &copy; {currentYear} All rights reserved. Made with <span className="text-red-500">&hearts;</span> by <a className="text-designColor" href="https://github.com/AhmadRFC" target="_blank" rel="noreferrer">AhmadRFC 🇸🇦</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;