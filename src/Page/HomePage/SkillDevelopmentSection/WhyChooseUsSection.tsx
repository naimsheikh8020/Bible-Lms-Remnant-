import { assets } from "../../../assets/assets";
import { BookOpen } from "lucide-react";

const bulletPoints = [
  "Build job-ready skills that employers are actively seeking in today’s market.",
  "Develop critical thinking, problem-solving abilities, and confidence.",
  "Gain the self-assurance to tackle challenges and pursue your dreams with clarity.",
  "Learn practical, applicable skills through hands-on projects and real-world experience.",
];

const WhyChooseUsSection = () => {
  return (
    <section className="w-full  py-8 md:py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[55%]">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-cyan-600 text-white text-base font-medium px-5 py-2 rounded-full">
              <BookOpen size={18}  className="text-white"/>
              Course Creation
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold text-gray-800 leading-tight">
              Why Skills Development Matters
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-base max-w-2xl leading-[1.7]">
              Investing in skills development is investing in your future.
              Here’s why it’s essential for success in the modern world.
            </p>

            {/* Bullet List */}
            <ul className="mt-8 space-y-5 max-w-2xl">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-gray-700 leading-[1.7]">
                  <img src={assets.Icon_Exprience}  />
                  <span className="text-base">{point}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[45%]  flex justify-center lg:justify-end mt-16 lg:mt-0">
            <img
              src={assets.handShackImg}
              alt="Skills Development Illustration"
              className=" max-w-full  object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
