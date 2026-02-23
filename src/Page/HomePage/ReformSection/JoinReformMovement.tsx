import { GraduationCap, Users, Handshake } from "lucide-react";
import { useNavigate } from "react-router";

interface JoinCard {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactNode;
  route: string;
}

const cards: JoinCard[] = [
  {
    title: "Enroll as Student",
    description:
      "Begin your transformation journey with comprehensive courses, mentorship, and community support.",
    buttonText: "Start Learning",
    icon: <GraduationCap className="w-6 h-6 text-[#2C7DA0]" />,
    route: "/login",
  },
  {
    title: "Join as Mentor",
    description:
      "Share your wisdom and faith by guiding the next generation through their spiritual growth journey.",
    buttonText: "Become a Mentor",
    icon: <Users className="w-6 h-6 text-[#2C7DA0]" />,
    route: "/login",
  },
  {
    title: "Become a Partner",
    description:
      "Support our mission financially and help us reach more young people with the Gospel and education.",
    buttonText: "Partner With Us",
    icon: <Handshake className="w-6 h-6 text-[#2C7DA0]" />,
    route: "/donation",
  },
];

const JoinReformMovement = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="px-6">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join the Reform Movement
        </h2>

        <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
          There's a place for everyone in this mission. Choose how you want
          to be part of God's transformative work.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#E9F6FB] rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Icon */}
                <div className="w-14 h-14 bg-[#BFDCE8] rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => navigate(card.route)}
                className="w-full h-12 mt-8 cursor-pointer bg-[#26A9D3] hover:bg-[#1f5f78] text-white rounded-lg text-sm font-medium transition-colors duration-300">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinReformMovement;