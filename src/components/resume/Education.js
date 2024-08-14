import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-full">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="King Abdulaziz University 2019 - 2024 (Expected)"
            result="GPA: 4.91/5"
            des="Currently pursuing a Bachelor's degree in Information Technology at King Abdulaziz University, (Software Engineering track). Focused on gaining comprehensive knowledge and skills in software development, web technologies, database management, and IT project management. Emphasizing practical application and problem-solving in real-world scenarios."
          />
        </div>
      </div>

      <div className="w-full">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Relevant Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="KAU Innovators"
            subTitle="Tech Lead - (May 2021 – March 2022)"
            result="Jeddah, SA"
            des="Designed & implemented technology solutions, including automating the certification process for +200 program participants & managed Zoom webinars. Managed on-campus events & engaged with students face-to-face. Created and maintained the program documentation, including schedules, budgets, and reports."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;