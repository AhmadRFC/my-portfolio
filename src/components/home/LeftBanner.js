import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Passionate Learner", "Software Engineer", "Tech Savvy"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });
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
          Senior Information Technology Student At King Abdulaziz University
          with a focus on Software Engineering | First Class-Honours | GPA
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
              <FaTwitter />
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
          Technologies I Use
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon"><SiJavascript /></span>
          <span className="bannerIcon"><SiHtml5 /></span>
          <span className="bannerIcon"><SiReact /></span>
          <span className="bannerIcon"><SiTailwindcss /></span>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;