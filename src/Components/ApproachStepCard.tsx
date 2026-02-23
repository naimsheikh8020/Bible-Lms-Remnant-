import React from "react";

interface ApproachStepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ApproachStepCard: React.FC<ApproachStepCardProps> = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
      
      {/* Number Circle - Hidden on mobile */}
      <div className="hidden md:flex flex-shrink-0">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md"
          style={{ backgroundColor: "#26A9D3" }}
        >
          {number}
        </div>
      </div>

      {/* Card */}
      <div className="w-full bg-[#F4F6F8] rounded-xl px-5 py-5 md:px-6 flex flex-col md:flex-row items-start gap-4 md:gap-5 shadow-sm">
        
        {/* Icon */}
        <div className="w-12 h-12 bg-[#D7EEF5] rounded-lg flex items-center justify-center shrink-0">
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ApproachStepCard;