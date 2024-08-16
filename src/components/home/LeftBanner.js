import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"

import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Passionate Learner", "Software Engineer", "Tech Savvy"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });

  const technologies = [
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "Framer Motion", icon: SiFramer, color: "text-purple-500" },
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Hi, I'm
          <span className="text-blue-600"> Ahmad Alabbasei 👋</span>
        </h1>
        <h2 className="text-2xl font-bold text-gray-700">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#b88ae6" />
        </h2>
        <p className="text-base text-gray-600 max-w-[450px]">
          Fresh Gruaduate in Information Technology from King Abdulaziz University
          with a focus on Software Engineering | First Class-Honors | GPA
          4.91/5.0
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://twitter.com/AhmadRFC" target="_blank" rel="noreferrer">
            <span className="bannerIcon">
              <FaSquareXTwitter />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/alabbasei/" target="_blank" rel="noreferrer">
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
          </a>
          <a href="https://github.com/AhmadRFC" target="_blank" rel="noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          This website is built With
        </h2>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center bg-white rounded-full shadow-md px-4 py-2 transition-all duration-300 hover:shadow-lg">
              <tech.icon className={`w-6 h-6 ${tech.color} mr-2`} />
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;