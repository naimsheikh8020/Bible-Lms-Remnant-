import { useNavigate } from "react-router";

const FinalCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-20">
      <div className="w-full  mx-auto px-6">
        
        <div className="bg-[#fafafa] rounded-3xl py-16 md:py-20 px-6 md:px-12 text-center shadow-lg">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Be Part of a Generation <br className="hidden md:block" />
            Being Spiritually Renewed
          </h2>

          {/* Button */}
          <button
            onClick={() => navigate("/login")}
            className="mt-8 h-12 px-8 bg-[#26A9D3] hover:bg-[#1f5f78] cursor-pointer text-white text-sm md:text-base font-medium rounded-lg transition-all duration-300 hover:shadow-md"
          >
            Sign up now
          </button>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;