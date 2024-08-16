import React, { useState } from "react";
import Title from "../common/Title";
import Education from "./Education";
import Skills from "./Skills";
import AnimatedSection from "../common/AnimatedSection";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="resume" className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Title title="Resume 📝" />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm mb-4" role="group">
              <button
                onClick={() => setActiveTab("education")}
                className={`px-4 py-2 mr-4 text-sm font-medium rounded-full rounded-l-lg transition-colors duration-200 ${
                  activeTab === "education"
                      ? "text-white bg-gray-900"
                      : "text-gray-400 hover:text-gray-900"
                }`}
              >
                Education & Experience
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-4 py-2 text-sm font-medium rounded-full rounded-r-lg transition-colors duration-200 ${
                  activeTab === "skills"
                      ? "text-white bg-gray-900"
                      : "text-gray-400 hover:text-gray-900"
                }`}
              >
                Professional Skills
              </button>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          {activeTab === "education" && <Education />}
          {activeTab === "skills" && <Skills />}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Resume;