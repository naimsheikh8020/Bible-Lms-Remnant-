import type { HowItWorksCardProps } from "../types/HowItworksCardPropps";

const HowItWorksCard = ({
  stepNumber,
  title,
  description,
  img,
  alignment = "left",
}: HowItWorksCardProps) => {
  const isLeft = alignment === "left";

  return (
    <div
      className={`flex items-center gap-2 md:gap-4 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Step Number */}
      <span
        className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-300 select-none min-w-[50px] md:min-w-[80px] ${isLeft ? "text-left" : "text-right"}`}
      >
        {stepNumber}
      </span>

      {/* Card */}
      <div
        className={`flex-1 bg-white border border-gray-300 rounded-xl md:rounded-2xl shadow-md px-4 md:px-6 py-3 md:py-5 flex items-center gap-3 md:gap-4 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      >
        {/* Icon */}
        <div className="flex items-center justify-center flex-shrink-0">
          <img
            src={img}
            alt={title}
            className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
          />
        </div>

        {/* Text */}
        <div className={isLeft ? "text-left" : "text-right"}>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
