import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg mb-4">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{subTitle}</p>
          </div>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full mt-2 md:mt-0">
            {result}
          </span>
        </div>
        <p className="text-gray-700 text-base">{des}</p>
      </div>
    </div>
  );
};

export default ResumeCard;