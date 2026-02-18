import { assets } from "../../../assets/assets";
import HowItWorksCard from "../../../Components/HowItWorksCard";
const steps = [
  {
    stepNumber: "01",
    title: "Choose Program",
    description: "Select a program that matches your goals and skill level.",
    img: assets.SignUpandCreateAccount,
    alignment: "left" as const,
  },
  {
    stepNumber: "02",
    title: "Join Classes / Courses",
    description: "Attend structured classes led by expert instructors.",
    img: assets.LearnAttendLiveClasses,
    alignment: "right" as const,
  },
  {
    stepNumber: "03",
    title: "Practice & Tests",
    description: "Strengthen your knowledge through practice and assessments.",
    img: assets.Track_Progress,
    alignment: "left" as const,
  },
  {
    stepNumber: "04",
    title: "Get Certificate",
    description: "Earn a recognized certificate upon successful completion.",
    img: assets.trackProgress_Netwrok,
    alignment: "right" as const,
  },
  {
    stepNumber: "05",
    title: "Career Guidance",
    description: "Receive expert advice to plan and advance your career.",
    img: assets.Grow_Spriritually_academially,
    alignment: "left" as const,
  },
  {
    stepNumber: "06",
    title: "Mentorship",
    description: "Get ongoing support and guidance from experienced mentors.",
    img: assets.trackProgress_Netwrok,
    alignment: "right" as const,
  },
];

const LearningWorksSection = () => {
  return (
    <div>
      <div className="pt-12 px-4 sm:pl-12 sm:px-0">
        <h1 className="text-3xl text-center md:text-start md:text-4xl font-bold ">How Learning Works</h1>
        <p className="text-xl text-center md:text-start text-gray-600 mt-2">Your journey from beginner to expert in five simple steps</p>
      </div>
      <div className="w-full  py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-full mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Steps */}
          <div className="w-full">
            <div className="flex flex-col gap-4 md:gap-6">
              {steps.map((step) => (
                <HowItWorksCard
                  key={step.stepNumber}
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                  img={step.img}
                  alignment={step.alignment}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              src={assets.Img01}
              alt="Learning illustration"
              className="w-full max-w-lg h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LearningWorksSection;
