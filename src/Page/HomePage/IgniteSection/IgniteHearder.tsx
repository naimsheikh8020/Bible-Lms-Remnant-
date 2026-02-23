import { assets } from "../../../assets/assets";
import { Flame } from "lucide-react";

const IgniteHeader = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFEBD6] text-[#F59E0B] text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <Flame size={14} />
            Ignite Program
          </div>

          {/* Heading */}
          <h1 className="text-[46px] leading-[56px] font-semibold text-[#1F2937] mb-6">
            Ignite your{" "}
            <span className="text-[#38BDF8]">Faith.</span>
            <br />
            <span className="text-[#38BDF8]">Discover</span> Your Purpose
          </h1>

          {/* Description */}
          <p className="text-[#6B7280] text-[15px] leading-7 max-w-md">
            A starting point for young people to explore spiritual identity,
            personal growth, and guided discipleship through engaging learning
            and mentorship.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end">
          <img
            src={assets.FaithImg}
            alt="Ignite Faith"
            
          />

     
        </div>

      </div>
    </section>
  );
};

export default IgniteHeader;