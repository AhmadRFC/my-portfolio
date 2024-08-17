import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
        <ResumeCard
          title="BSc in Information Technology"
          subTitle="King Abdulaziz University 09/2019 - 08/2024"
          result="GPA: 4.91/5"
          des="Key modules: Software Engineering II; Advanced Programming; Data Structures and Algorithms; Web
Development; Operating Systems."
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Relevant Experience
        </h2>
        <ResumeCard
          title="AI and Machine Learning Intern"
          subTitle="Aramco 08/2023 - 12/2023"
          result="Dharan - Saudi Arabia"
          des="Designed & implemented technology solutions, including automating the certification process for +200 program participants & managed Zoom webinars. Managed on-campus events & engaged with students face-to-face. Created and maintained the program documentation, including schedules, budgets, and reports."
        />
        <ResumeCard
          title="KAU Innovators Coordinator"
          subTitle="King Abdulaziz University 05/2021 – 04/2022"
          result="Jeddah - Saudi Arabia"
          des="Designed & implemented technology solutions, including automating the certification process for +200 program participants & managed Zoom webinars. Managed on-campus events & engaged with students face-to-face. Created and maintained the program documentation, including schedules, budgets, and reports."
        />

      </div>
    </motion.div>
  );
};

export default Education;