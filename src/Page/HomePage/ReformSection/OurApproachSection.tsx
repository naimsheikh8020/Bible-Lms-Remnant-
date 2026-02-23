import { BookOpen, GraduationCap, Sparkles, Users } from "lucide-react";
import ApproachStepCard from "../../../Components/ApproachStepCard";

const OurApproachSection = () => {
const steps = [
  {
    title: "Spiritual Foundation",
    description:
      "Building biblical literacy and personal faith through engaging curriculum and devotional practices.",
    icon: <BookOpen className="w-6 h-6 text-[#26A9D3]" />,
  },
  {
    title: "Educational Development",
    description:
      "Structured learning paths with AI-powered personalization to meet each student where they are.",
    icon: <GraduationCap className="w-6 h-6 text-[#26A9D3]" />,
  },
  {
    title: "Mentorship & Community",
    description:
      "Connecting with godly mentors and peers who provide guidance, accountability, and encouragement.",
    icon: <Users className="w-6 h-6 text-[#26A9D3]" />,
  },
  {
    title: "Transformation & Purpose",
    description:
      "Discovering God-given calling and stepping into a life of impact, service, and spiritual maturity.",
    icon: <Sparkles className="w-6 h-6 text-[#26A9D3]" />,
  },
];

  return (
    <section className="py-16 ">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        {/* Tag */}
        <div className="mb-6">
          <span className="inline-block bg-[#E9F6FB] text-[#176781] px-5 py-2 rounded-full font-semibold text-sm">
            Our Approach
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          The Reform Journey
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          A proven pathway for spiritual transformation, one step at a time.
        </p>

      </div>
       <div className="max-w-6xl mx-auto px-4 space-y-12 mt-6">
      {steps.map((step, index) => (
        <ApproachStepCard
          key={index}
          number={index + 1}
          title={step.title}
          description={step.description}
          icon={step.icon}
        />
      ))}
    </div>
    </section>
  );
};

export default OurApproachSection;