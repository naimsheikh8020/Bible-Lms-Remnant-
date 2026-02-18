import { Link } from "react-router";

const BecomeSponsorSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12">
        
        <div
          className="
            w-full
            rounded-xl
            bg-[linear-gradient(to_right,#26A9D3,#E9F6FB)]
            text-center
            px-6 md:px-20
            py-16
          "
        >
          {/* Heading */}
          <h2 className="text-[28px] md:text-[34px] font-medium text-gray-900 leading-tight">
            Together, We Can Change Lives
          </h2>

          {/* Description */}
          <p className="mt-6 text-base text-gray-700 max-w-2xl mx-auto leading-[1.7]">
            Whether you're a student in need or someone who wants to give back,
            join our mission to make quality education accessible to everyone.
          </p>

          {/* Button */}
          <div className="mt-10">
            <Link to="/donation"><button
              className="
                cursor-pointer
                px-10 py-3.5
                border border-white/60
                text-gray-800
                bg-white/10
                backdrop-blur-sm
                rounded-full
                text-base
                font-medium
                hover:bg-white
                hover:text-[#1B1B1B]
                transition-all duration-300
              "
            >
              Become a Sponsor
            </button></Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BecomeSponsorSection;
