import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRobot, FaMobileAlt, FaHome } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import Card from "./Card";

const Interest = () => {
  const interests = [
    {
      title: "Software Development",
      description: "I enjoy developing efficient software solutions across multiple programming languages and frameworks. My background includes web and mobile app development, with a focus on practical design and functionality.",
      icon: <FaCode />,
    },
    {
      title: "AI and Machine Learning",
      description: "I like using AI and ML technologies to help with complex challenges and improve decision-making. I've worked on developing generative AI tools and have been involved in some forward-thinking projects in this area.",
      icon: <FaRobot />,
    },
    {
      title: "Mobile App Development",
      description: "I'm into developing cross-platform mobile apps. I use Flutter and integrate various APIs and SDKs to create apps that have many features.",
      icon: <FaMobileAlt />,
    },
    {
      title: "IoT and Home Automation",
      description: "I'm interested in the Internet of Things (IoT) and home automation. I work on Arduino projects and develop smart home solutions.",
      icon: <FaHome />,
    },
    {
      title: "Drone Flying",
      description: "I've recently started flying drones and have been really enjoying the experience. It's fun to explore different perspectives from above and experiment with aerial photography.",
      icon: <GiDeliveryDrone />,
    }
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