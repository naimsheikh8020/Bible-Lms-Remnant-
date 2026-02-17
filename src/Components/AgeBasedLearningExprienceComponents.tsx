import { assets } from "../assets/assets";

interface AgeBasedLearningExperienceProps {
  title: string;
  ageRange: string;
  features: string[];
  accentColor: string;
  borderColor?: string;
  bgColor?: string;
}

const AgeBasedLearningExperience = ({
  title,
  ageRange,
  features,
  accentColor,
  borderColor = "border-gray-200",
  bgColor = "bg-white",
}: AgeBasedLearningExperienceProps) => {
  return (
    <div
      className={`relative rounded-2xl border p-8 ${borderColor} ${bgColor} shadow-sm hover:shadow-lg transition duration-300`}
    >
      {/* Accent Bar */}
      <div
        className={`absolute top-4 left-8 right-8 h-2 rounded-full ${accentColor} my-4`}
      />

      {/* Title */}
      <h3 className="text-2xl font-bold mt-8 mb-6 text-gray-900">
        {title} ({ageRange})
      </h3>

      {/* Feature Rows */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={assets.Icon_Exprience}
              alt="feature icon"
              className="w-5 h-5 object-contain"
            />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeBasedLearningExperience;
