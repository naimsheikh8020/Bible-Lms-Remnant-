import { Link } from "react-router";

const SkillDevelopmentHeader = () => {
  return (
    <section className="w-full bg-gray-50 border border-gray-200 rounded-xl">
      <div className="max-w-4xl mx-auto text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Skills Development School
        </h1>
        <h2 className="mt-6 text-xl md:text-2xl font-medium text-gray-700">
          Empowering Youth With Real-Life Skills & Career Readiness
        </h2>
        <p className="mt-6 text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transform your potential into expertise. Our comprehensive programs
          combine cutting-edge technology, hands-on training, and expert
        </p>

        <div className="mt-10">
          <Link to="/login"><button className="px-8 py-3 cursor-pointer bg-[#2DA8C6] hover:bg-[#2493AF] text-white text-sm font-medium rounded-lg transition duration-300">
            Enroll Now
          </button></Link>
        </div>

      </div>
    </section>
  );
};

export default SkillDevelopmentHeader;
