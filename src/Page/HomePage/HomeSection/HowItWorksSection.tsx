import HowItWorksCard from "../../../Components/HowItWorksCard";
import { assets } from "../../../assets/assets";

const steps = [
  {
    stepNumber: "01",
    title: "Sign Up and create Account",
    description: "Lorem ipsum dolor sit amet",
    img: assets.SignUpandCreateAccount,
    alignment: "left" as const,
  },
  {
    stepNumber: "02",
    title: "Learn & Attend Live Classes",
    description: "Lorem ipsum dolor sit amet",
    img: assets.LearnAttendLiveClasses,
    alignment: "right" as const,
  },
  {
    stepNumber: "03",
    title: "Track Progress",
    description: "Lorem ipsum dolor sit amet",
    img: assets.Track_Progress,
    alignment: "left" as const,
  },
  {
    stepNumber: "04",
    title: "Track Progress",
    description: "Lorem ipsum dolor sit amet",
    img: assets.trackProgress_Netwrok,
    alignment: "right" as const,
  },
  {
    stepNumber: "05",
    title: "Grow Spiritually & Academically",
    description: "Lorem ipsum dolor sit amet",
    img: assets.Grow_Spriritually_academially,
    alignment: "left" as const,
  },
];

const HowItWorksSection = () => {
  return (
    <div className="overflow-hidden py-8 md:py-12 md:px-10">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 px-4 md:px-0">
        How It Works
      </h2>

      <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4 md:gap-6 px-2 md:px-0 ">
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

        {/* Right Side - Hidden on mobile/tablet */}
        <div className="hidden lg:flex w-1/2 relative py-12 items-center justify-center">
          <div className="relative w-[500px] h-[480px]">
            {/* Boy Image - Top Left */}
            <div className="absolute top-0 left-0 w-52 h-64 z-10">
              <img
                src={assets.Boy}
                alt="Boy"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Women Image - Bottom Right */}
            <div className="absolute top-16 right-0 w-72 h-96">
              <img
                src={assets.Women}
                alt="Women"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Stats Card */}
            <div className="absolute border border-gray-300 bottom-38 left-0 bg-white rounded-xl shadow-lg px-4 py-3 z-20">
              <div className="flex items-center gap-2">
                {/* Avatars */}
                <div className="flex -space-x-2">
                  <img
                    src={assets.Avatar1}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={assets.Avatar2}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={assets.Avatar3}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                {/* Text */}
                <div>
                  <p className="text-sm font-bold text-gray-900">10K +</p>
                  <p className="text-xs text-gray-500">Job Seekers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
