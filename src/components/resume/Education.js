import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import aramcoLogo from "../../assets/images/Aramco_logo.png";
import gdscLogo from "../../assets/images/gdsc_logo.png";
import kauLogo from "../../assets/images/King Abdulaziz University logo.png";

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
          des="Key modules: Software Engineering II; Advanced Programming; Data Structures and Algorithms; Web Development; Operating Systems."
          iconUrl={kauLogo}
          logoSize={100}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Relevant Experience
        </h2>
        <ResumeCard
          title="Leader of Tech Team"
          subTitle="Google Developer Students Club 02/2024 - 07/2024"
          result="Jeddah - Saudi Arabia"
          des="• Lead technical workshops and events, improving skills of 150+ students and encouraging industry connections.
• Worked on project management and documentation, boosting team efficiency and project completion rates."
          iconUrl={gdscLogo}
          logoSize={100}
        />
        <ResumeCard
          title="AI and Machine Learning Intern"
          subTitle="Aramco 08/2023 - 12/2023"
          result="Dharan - Saudi Arabia"
          des="Designed & implemented technology solutions, including automating the certification process for +200 program participants & managed Zoom webinars. Managed on-campus events & engaged with students face-to-face. Created and maintained the program documentation, including schedules, budgets, and reports."
          iconUrl={aramcoLogo}
          logoSize={160}
        />
        <ResumeCard
          title="KAU Innovators Coordinator"
          subTitle="King Abdulaziz University 05/2021 – 04/2022"
          result="Jeddah - Saudi Arabia"
          des="Designed & implemented technology solutions, including automating the certification process for +200 program participants & managed Zoom webinars. Managed on-campus events & engaged with students face-to-face. Created and maintained the program documentation, including schedules, budgets, and reports."
          iconUrl={kauLogo}
          logoSize={100}
        />
      </div>
    </motion.div>
  );
};

export default Education;