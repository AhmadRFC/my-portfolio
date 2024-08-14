import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-gradient-to-b from-bodyColor to-[#F3F4F6] hover:from-[#F3F4F6] hover:to-bodyColor transition-colors duration-100 rounded-lg p-4 lg:px-8 flex flex-col justify-center gap-6 lg:gap-10 shadow-shadowOne">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="text-sm md:text-base mt-2 text-gray-600">{subTitle}</p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-600">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;