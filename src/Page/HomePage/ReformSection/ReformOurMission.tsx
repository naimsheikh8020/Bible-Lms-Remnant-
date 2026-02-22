import { assets } from "../../../assets/assets";

const ReformOurMission = () => {
  return (
    <section className="w-full  py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl font-bold text-gray-800">
            Our mission
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Why Reform Means
          </p>

          <p className="mt-8 text-gray-600 leading-relaxed">
            Reform is about transformation—a spiritual renewal that reshapes identity,
            purpose, and destiny. We're committed to guiding the next generation back to
            biblical truth through education, mentorship, and authentic community. Every
            young person deserves the opportunity to discover who they are in Christ,
            develop godly character, and pursue their calling with confidence and conviction.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative">
          
          {/* Image */}
          <img src={assets.ourMission} alt="Our Mission" className="w-full max-w-md mx-auto rounded-3xl object-cover" />
          

         
        </div>
      </div>
    </section>
  );
};

export default ReformOurMission;