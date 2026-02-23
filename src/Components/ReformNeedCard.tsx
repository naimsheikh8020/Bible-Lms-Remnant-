import React from "react";

interface ReformNeedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlightText?: string;
  className?: string;
}

const ReformNeedCard: React.FC<ReformNeedCardProps> = ({
  icon,
  title,
  description,
  highlightText,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#E9F6FB] rounded-2xl p-6 w-full  transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <div className="flex flex-col gap-6">
        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center bg-[#BFDCE8] rounded-xl">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-3 mt-5">
          <h3 className="text-lg font-semibold text-gray-900 leading-snug">
            {title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mt-5">
            {description}
          </p>

          {highlightText && (
            <p className="text-sm text-purple-600 font-medium mt-5">
              {highlightText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReformNeedCard;