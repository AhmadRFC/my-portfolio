import React from "react";
import { motion } from "framer-motion";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { PiInfinityBold } from "react-icons/pi";
import Card from "./Card";

const Interest = () => {
  const interests = [
    {
      title: "Web Development",
      description: "I am passionate about full-stack web development. I enjoy building modern and dynamic web applications, leveraging robust databases, flexible server-side frameworks, and rich front-end libraries to craft efficient and scalable solutions.",
      icon: <FaGlobe />,
    },
    {
      title: "DevOps",
      description: "I am fascinated by the role of DevOps in bridging the gap between development and operations. With a strong focus on automation, collaboration, and continuous improvement, I am driven to optimize workflows and enhance the overall software development lifecycle.",
      icon: <PiInfinityBold />,
    },
    {
      title: "IT Project Management",
      description: "IT Project Management holds a special place in my journey, shaped by my experiences in diverse technology projects. The opportunity to lead teams and deliver impactful results drives my passion for IT Project Management.",
      icon: <AiFillAppstore />,
    },
  ];

  return (
    <div className="w-full">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Interests 🚀
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              title={interest.title}
              des={interest.description}
              icon={interest.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Interest;