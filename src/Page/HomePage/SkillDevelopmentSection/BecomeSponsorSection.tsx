import { Link } from "react-router";

const BecomeSponsorSection = () => {
  return (
    <section className="w-full py-12 sm:py-14 md:py-16">
      <div className="md:max-w-full  mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div
          className="
            w-full
            rounded-xl
            bg-[linear-gradient(to_right,#26A9D3,#E9F6FB)]
            text-center
            px-5 sm:px-10 md:px-16 lg:px-20
            py-12 sm:py-14 md:py-16
          "
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-medium text-gray-900 leading-tight">
            Together, We Can Change Lives
          </h2>

          {/* Description */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-700 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            Whether you're a student in need or someone who wants to give back,
            join our mission to make quality education accessible to everyone.
          </p>

          {/* Button */}
          <div className="mt-8 sm:mt-10">
            <Link to="/donation">
              <button
                className="
                  w-full sm:w-auto
                  cursor-pointer
                  px-8 sm:px-10 py-3
                  border border-white/60
                  text-gray-800
                  bg-white/10
                  backdrop-blur-sm
                  rounded-full
                  text-sm sm:text-base
                  font-medium
                  hover:bg-white
                  hover:text-[#1B1B1B]
                  transition-all duration-300
                "
              >
                Become a Sponsor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeSponsorSection;
