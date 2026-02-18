import Button from "../../../Components/Button";
import { useNavigate } from 'react-router';

const SkillDevelopmentSchoolSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-8">
      <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12">
        <div
          className="
            bg-cyan-50/2
            rounded-3xl
            border border-gray-300
            text-center
            px-6 md:px-20
            py-20
            shadow-xl
          "
        >
          {/* Heading */}
          <h2 className="text-[32px] md:text-[38px] font-semibold text-gray-800 leading-tight">
            Skills Development School
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-[17px] text-gray-600 max-w-xl mx-auto leading-[1.7]">
            Join thousands of students on their spiritual and academic journey
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Button onClick={()=> navigate("/signup")}>Sign up now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopmentSchoolSection;
