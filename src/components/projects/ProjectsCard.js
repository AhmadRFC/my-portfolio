import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, github, technologies }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        className="w-full h-48 object-cover"
        src={src}
        alt={title}
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">{des}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            <FaGithub className="mr-2" />
            View Code
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;