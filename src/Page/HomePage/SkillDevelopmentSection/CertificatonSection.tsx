import { assets } from "../../../assets/assets";

const benefits = [
  {
    id: 1,
    icon: assets.Progress,
    title: "Course Completion Benefits",
    description:
      "Gain verified credentials, portfolio projects, and exclusive access to job opportunities",
  },
  {
    id: 2,
    icon: assets.Career,
    title: "Career Value",
    description:
      "Stand out to employers with certificates recognized by leading companies worldwide",
  },
  {
    id: 3,
    icon: assets.getCertificate,
    title: "Lifetime Access",
    description:
      "Keep your certificates forever and showcase them on LinkedIn and your resume",
  },
];

const CertificatonSection = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Certificate Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <img
                src={assets.Certificate}
                alt="Certificate"
                className="w-full h-auto mt-3 object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Certification & Achievements
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Earn certificates that matter. Our industry-recognized
                credentials validate your skills and open doors to exciting
                career opportunities.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="flex flex-col gap-4 ">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="border border-gray-200 shadow-sm rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatonSection;
