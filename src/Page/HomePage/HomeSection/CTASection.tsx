import { Link } from "react-router";

const CTASection = () => {
  return (
    <div className="mb-8 md:mb-16 px-4 md:px-0">
      <div className="max-full mx-auto md:px-6">
        <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 md:mb-4 leading-snug px-2">
            Join ambitious professionals and
            <br className="hidden md:block" />
            unlock your dream career today
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2">
            Unlock your true potential and discover a world of opportunities
            that align with your skills, interests, and aspirations.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to="/login">
            <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-xl bg-purple-400 text-white font-medium hover:bg-purple-500 transition duration-300">
              Start Learning
            </button>
            </Link>

            <Link to="/signup">
            <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-xl border border-cyan-500 text-cyan-600 font-medium hover:bg-cyan-50 transition duration-300">
              Become a Teacher
            </button>
            </Link>

            <Link to="/contact">
            <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-xl border border-cyan-500 text-cyan-600 font-medium hover:bg-cyan-50 transition duration-300">
              Contact Admin
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
