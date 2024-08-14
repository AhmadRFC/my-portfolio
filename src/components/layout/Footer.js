import React from "react";
import logo from '../../assets/images/logo.png';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-auto pt-20 border-b-[1px] border-b-black grid grid-cols-1 place-items-center md:grid-cols-1 lgl:grid-cols-1 gap-20">
      <div className="w-full h-full flex flex-col items-center gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a
            href="https://twitter.com/AhmadRFC"
            target="_blank"
            rel="noreferrer"
          >
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-alabbasei-13086326b/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300">
              <FaLinkedin />
            </span>
          </a>
          <a
            href="https://github.com/AhmadRFC"
            target="_blank"
            rel="noreferrer"
          >
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
      <div className="lgl:flex justify-center gap-52">
        {" "}
        <p className="text-gray-600 flex justify-center select-none">
          &copy; {currentYear}&nbsp;All rights reserved. Made with&nbsp;
          <span className="text-red-500">&hearts;&nbsp;</span>by&nbsp;
          <a className="text-designColor"
            href="https://github.com/AhmadRFC"
            target="_blank"
            rel="noreferrer"
          >AhmadRFC 🇸🇦</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
