import { MoveRight } from "lucide-react";
import { Link } from "react-router";

const AIPromoSection = () => {
  return (
    <section className="bg-[#7EC3D9] rounded-2xl py-12 px-6 md:px-12 text-center mt-8 -mx-4 md:-mx-8 lg:-mx-12">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        Empowering Your Journey with AI
      </h2>
      {/* Description */}
      <p className="max-w-2xl mx-auto text-white text-sm md:text-base leading-relaxed mb-8">
        Explore cutting-edge AI technology that transforms your experience with
        seamless automation, personalized solutions, and smarter decision-making.
      </p>

      {/* CTA Button */}
      <Link
        to="/login"
        className="inline-flex items-center gap-2 px-6 py-3 
                   bg-white text-[#2B6D80] font-medium 
                   rounded-lg shadow-md 
                   hover:shadow-lg hover:-translate-y-0.5 
                   transition-all duration-300"
      >
        Discover How AI Works
        <MoveRight size={18} />
      </Link>
    </section>
  );
};

export default AIPromoSection;
