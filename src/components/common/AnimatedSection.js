import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;