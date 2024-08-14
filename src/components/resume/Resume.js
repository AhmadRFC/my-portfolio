import React, { useState } from "react";
import Title from "../common/Title";
import Education from "./Education";
import Skills from "./Skills";
import AnimatedSection from "../common/AnimatedSection";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  return (
    <section id="resume" className="w-full px-4 sm:px-5 py-10 sm:py-20 border-b-[1px] border-b-black">
      <AnimatedSection>
        <div className="flex justify-center font-titleFont items-center text-center">
          <Title title="Resume 📝" /> 
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
      <div>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
            }}
            className={`${
              educationData
                ? "border-designColor text-[#000000b3]"
                : "border-transparent text-[#000000b3]"
            } resumeLi cursor-pointer py-2 text-center`}
          >
            Education & Experience
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
            }}
            className={`${
              skillData ? "border-designColor text-[#000000b3]" : "border-transparent text-[#000000b3]"
            } resumeLi cursor-pointer py-2 text-center`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      </AnimatedSection>
      {educationData && <AnimatedSection delay={0.4}><Education /></AnimatedSection>}
      {skillData && <AnimatedSection delay={0.4}><Skills /></AnimatedSection>}
    </section>
  );
};

export default Resume;