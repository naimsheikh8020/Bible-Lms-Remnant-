import type { ProgramCardProps } from "../types/ProgramCardComponentProps";

const ProgramCard: React.FC<ProgramCardProps> = ({
  img,
  title,
  ageRange,
  description,
  skills,
  onClick,
  buttonText = "View Courses",
  className = "",
}) => {
  return (
    <div
      className={`bg-[#E9F6FB]  p-6 rounded-2xl shadow-sm flex flex-col justify-between ${className}`}
    >
      {/* Icon */}
      <div className="w-12 h-12  flex items-center justify-center  rounded-xl mb-4">
        <img src={img} alt={title} className="h-12 object-contain" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{ageRange}</p>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Skills */}
        <div className="mb-5">
          <p className="text-sm font-medium mb-2">Skills you'll learn:</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-white rounded-full text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onClick}
        className="mt-auto cursor-pointer bg-[#26A9D3] hover:bg-cyan-700 transition text-white py-2.5 rounded-lg text-sm font-medium"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProgramCard;
