import React from 'react';
import { Code, Database, Globe, Server, Check, Settings } from 'lucide-react';

const skillsData = [
  { 
    category: "Languages", 
    items: ["Java", "Python", "JavaScript"], 
    icon: <Code className="w-6 h-6 mr-2" />
  },
  { 
    category: "Databases", 
    items: ["PostgreSQL", "MongoDB"], 
    icon: <Database className="w-6 h-6 mr-2" />
  },
  { 
    category: "Frameworks & Libraries", 
    items: ["Node.js", "ReactJS", "Flutter"], 
    icon: <Globe className="w-6 h-6 mr-2" />
  },
  { 
    category: "Tools & Platforms", 
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", "Trello"], 
    icon: <Server className="w-6 h-6 mr-2" />
  },
  { 
    category: "Methodologies", 
    items: ["Agile Methodologies"], 
    icon: <Settings className="w-6 h-6 mr-2" />
  }
];

const SkillCard = ({ category, items, icon }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <span className="text-blue-500 mr-3">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;