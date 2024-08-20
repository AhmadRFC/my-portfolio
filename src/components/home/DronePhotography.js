import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const DronePhotography = () => {
  return (
    <motion.div
      className="w-full min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <Camera className="mx-auto mb-4 text-blue-500" size={64} />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Drone Photography</h1>
        <p className="text-xl text-gray-600">
          Will post some photos taken by my drone soon...
        </p>
      </div>
    </motion.div>
  );
};

export default DronePhotography;