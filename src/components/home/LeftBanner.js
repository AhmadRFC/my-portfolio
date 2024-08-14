// import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { FaTwitter, FaGithub } from "react-icons/fa";
// import { BsLinkedin } from "react-icons/bs";
// import {
//   SiTailwindcss,
//   SiJavascript,
//   SiHtml5,
//   SiPostgresql,
//   SiGit,
//   SiVisualstudiocode,
//   SiFigma,
//   SiReact,
// } from "react-icons/si";

// const LeftBanner = () => {
//   const [text] = useTypewriter({
//     words: ["Passionate Learner", "Software Engineer", "Tech Savvy"],
//     loop: true,
//     typeSpeed: 30,
//     deleteSpeed: 10,
//     delaySpeed: 1500,
//   });
//   return (
//     <div className="w-full lgl:w-1/2 flex flex-col gap-20">
//       <div className="mt-5 flex flex-col gap-4">
//         <h1 className="text-4xl font-bold font-titleFont text-[#000000b3]">
//           Hi, I'm
//           <span className="text-designColor capitalize"> Ahmad Alabbasei 👋</span>
//         </h1>
//         <h2 className="text-2xl font-bold text-[#000000b3]">
//           a <span>{text}</span>
//           <Cursor
//             cursorBlinking="false"
//             cursorStyle="_"
//             cursorColor="#b88ae6"
//           />
//         </h2>
//         <p className="text-base font-titleFont w-90">
//           Senior Information Technology Student At King Abdulaziz University
//           with a focus on Software Engineering | First Class-Honours | GPA
//           4.91/5.0
//         </p>
//       </div>
//       <div className="grid grid-cols-1 xl:flex-row justify-between gap-6 lgl:gap-0">
//         <div>
//           <h2 className="text-base text-[#000000b3] uppercase font-titleFont mb-3 ml-3">
//             Find me in
//           </h2>
//           <div className="flex gap-4 ml-3">
//             <a
//               href="https://twitter.com/AhmadRFC"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//                 <FaTwitter size={25} />
//               </span>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/ahmad-alabbasei-13086326b/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//                 <BsLinkedin size={25} />
//               </span>
//             </a>
//             <a
//               href="https://github.com/AhmadRFC"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300">
//                 <FaGithub size={25} />
//               </span>
//             </a>
//           </div>
//         </div>
//         <div>
//           <h2 className="text-base text-[#000000b3] uppercase font-titleFont mt-10 mb-5 ml-3">
//             Technologies I Use
//           </h2>
//           <div className="flex gap-4 ml-3">
//             <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//               <SiJavascript size={40} />
//             </span>
//             <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//               <SiHtml5 size={40} />
//             </span>
//             <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//               <SiReact size={40} />
//             </span>
//             <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//               <SiTailwindcss size={40} />
//             </span>
//           </div>
//           <div className="flex gap-4 ml-3 mt-5">
//             <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//               <SiPostgresql size={40} />
//             </span>
//             <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//               <SiVisualstudiocode size={40} />
//             </span>
//             <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//               <SiFigma size={40} />
//             </span>
//             <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
//               <SiGit size={40} />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftBanner;

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
          <a href="https://www.linkedin.com/in/ahmad-alabbasei-13086326b/" target="_blank" rel="noreferrer">
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