import React from 'react';
import { motion } from 'framer-motion';
import ProjectsCard from '../components/projects/ProjectsCard';
import prjOne from '../assets/images/prjOne.png';
import prjTwo from '../assets/images/prjTwo.png';

const Projects = () => {
  const projects = [
    {
      title: "Pricegrab",
      description: "An online shopping tool that helps you find products by searching various websites. It aggregates prices and details from multiple sources to help users make informed decisions.",
      image: prjOne,
      github: "https://github.com/AhmadRFC/process_scheduling_solver",
      technologies: ["Java", "PostgreSQL", "REST API"]
    },
    {
      title: "Processor Scheduler",
      description: "A scheduling processing solver that takes process details from a text file and calculates optimal scheduling based on various algorithms.",
      image: prjTwo,
      github: "https://github.com/PriceGrab/pricegrab",
      technologies: ["Python", "Algorithms", "Data Structures"]
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12 mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects 🚀
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectsCard
                title={project.title}
                des={project.description}
                src={project.image}
                github={project.github}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;