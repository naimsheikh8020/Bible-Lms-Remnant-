import { useNavigate } from "react-router";
import {  programs } from "../../../assets/assets";
import ProgramCard from "../../../Components/ProgramCard";



const AgeGroupedProgramsSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-base px-5 bg-[#E9F6FB] inline py-3 my-2 text-gray-500 rounded-full">
          Find Your Perfect Program
        </p>
        <h2 className="text-4xl mt-8 font-semibold">Programs By Age Group</h2>
        <p className="text-[#4A5565] mt-4 text-lg">
          Tailored learning paths designed specifically for each developmental
          stage
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-3">
        {programs.map((program) => (
          <ProgramCard
            key={program.title}
            {...program}
            onClick={() => navigate("/course")}
          />
        ))}
      </div>
    </div>
  );
};

export default AgeGroupedProgramsSection;
