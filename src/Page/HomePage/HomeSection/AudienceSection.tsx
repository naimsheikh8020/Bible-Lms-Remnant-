import { assets } from "../../../assets/assets";
import AudienceCard from "../../../Components/AudienceCard";

const AudienceSection = () => {
  return (
    <div className="text-center py-8">
      <h2 className="text-4xl font-bold mb-4 mt-4">
        Who Is This Platform For?
      </h2>
      <p className="text-gray-600 mb-6 text-xl">
        Tailored experiences for every role in the learning journey
      </p>
      <div>
        <div className="grid gap-6 md:grid-cols-3">
          
          <AudienceCard title="Students (5–25 years)" description="Interactive courses, live classes, and personalized AI guidance for spiritual and academic growth" img={assets.Student}/>
          <AudienceCard title="Teachers & Mentors" description="Create courses, manage live classes, and track student progress with powerful tools" img={assets.Teacher}/>
          <AudienceCard title="Admin & Foundation Team" description="Comprehensive ERP system for managing users, courses, and analytics" img={assets.Admin}/>
        </div>
          
      </div>
    </div>
  );
};

export default AudienceSection;
