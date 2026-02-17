import { ageBasedLearningData } from "../../../assets/assets";
import AgeBasedLearningExperience from "../../../Components/AgeBasedLearningExprienceComponents";
const AgeBasedLearningExprience = () => {
  return (
    <div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center ">
          Age-Based Learning Experience
        </h2>
        <p className="text-center mt-2 text-gray-600">
          Content tailored to your developmental stage
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {ageBasedLearningData.map((group) => (
          <AgeBasedLearningExperience
            key={group.id}
            title={group.title}
            ageRange={group.ageRange}
            features={group.features}
            accentColor={group.accentColor}
            borderColor={group.borderColor}
            bgColor={group.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AgeBasedLearningExprience;
