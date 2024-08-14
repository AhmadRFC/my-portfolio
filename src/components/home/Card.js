import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, des, icon }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <span className="text-4xl text-blue-500 mr-4">{icon}</span>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{des}</p>
      </div>
    </motion.div>
  );
};

export default Card;