import React from "react";

const ResumeCard = ({ title, subTitle, result, des, icon: Icon, iconUrl, logoSize = 64 }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl mb-4">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-grow pr-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{subTitle}</p>
              </div>
              <div 
                className="flex-shrink-0 flex items-center justify-center ml-4"
                style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
              >
                {Icon && <Icon className="w-full h-full text-gray-600" />}
                {iconUrl && (
                  <img
                    src={iconUrl}
                    alt={title}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                )}
              </div>
            </div>
            <div className="block w-full py-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded mt-3 mb-3 text-center">
              {result}
            </div>
            <p className="text-gray-700 text-base mt-2">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;