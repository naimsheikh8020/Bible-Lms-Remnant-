import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "../../../assets/assets";





const ReformReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (direction: "next" | "prev") => {
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return prev === reviews.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? reviews.length - 1 : prev - 1;
        }
      });
      setIsAnimating(false);
    }, 250);
  };

  const review = reviews[currentIndex];

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#F4F6F8] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Lives Being Reformed
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          These are just a few of the thousands of transformation stories
          happening through The Remnant Foundation.
        </p>

        {/* Review Card */}
        <div
          className={`mt-12 bg-white rounded-3xl shadow-xl p-6 md:p-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Profile */}
            <div className="flex flex-col items-center lg:items-start">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-blue-500"
              />

              <h4 className="mt-4 font-semibold text-gray-900">
                {review.name}
              </h4>

              <p className="text-gray-500 text-sm">
                Age {review.age} • {review.location}
              </p>

              <span className="mt-3 px-4 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                ✓ Reformed
              </span>
            </div>

            {/* Content */}
            <div className="text-left mt-8 lg:mt-0">
              <div className="w-10 h-10 bg-[#E0F2FE] rounded-lg flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-[#0284C7]" />
              </div>

              <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
                "{review.quote}"
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-500"></span>
                  <div>
                    <p className="font-semibold text-gray-800">BEFORE</p>
                    <p className="text-gray-500">{review.before}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-green-500"></span>
                  <div>
                    <p className="font-semibold text-gray-800">AFTER</p>
                    <p className="text-gray-500">{review.after}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-600">
                <span className="font-semibold">Transformation:</span>{" "}
                {review.transformation}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => changeSlide("prev")}
            className="w-10 h-10 rounded-full bg-white shadow hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-6 bg-blue-500"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => changeSlide("next")}
            className="w-10 h-10 rounded-full bg-white shadow hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReformReview;