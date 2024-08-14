import React from 'react';
import { motion } from 'framer-motion';
import Banner from "../components/home/Banner";
import Interest from "../components/home/interest";

const Home = () => {
  return (
    <div className="flex flex-col">
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Banner />
      </motion.section>
      <motion.section
        id="interests"
        className="py-20 bg-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Interest />
        </div>
      </motion.section>
    </div>
  );
};

export default Home;