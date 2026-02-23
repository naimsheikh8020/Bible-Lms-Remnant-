import {
  Bot,
  TrendingUp,
  BarChart3,
  Video,
  MessageCircle,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: <Bot className="w-5 h-5 text-[#1C8CAD]" />,
    title: "AI Spiritual Companion",
    description:
      "24/7 access to biblical guidance, prayer support, and personalized devotionals powered by AI trained on Scripture.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#1C8CAD]" />,
    title: "Personalized Learning Paths",
    description:
      "Adaptive curriculum that adjusts to each student's pace, interests, and spiritual maturity level.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-[#1C8CAD]" />,
    title: "Progress Tracking Dashboard",
    description:
      "Visual insights into spiritual growth, learning milestones, and areas for continued development.",
  },
  {
    icon: <Video className="w-5 h-5 text-[#1C8CAD]" />,
    title: "Live Mentorship Classes",
    description:
      "Interactive video sessions with trained mentors and peer discussion groups for real-time spiritual guidance.",
  },
];

const InnovationSection = () => {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">
            Powered by Innovation
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight text-gray-900">
            Technology & AI Support for Spiritual Growth
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed max-w-xl">
            We blend timeless biblical truth with cutting-edge technology to
            create personalized, engaging learning experiences that adapt to
            each student's unique journey.
          </p>

          <div className="mt-10 space-y-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D7EEF5] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE DASHBOARD MOCK */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-400">Your Progress</p>
                <h3 className="font-semibold text-gray-900">
                  Spiritual Growth Dashboard
                </h3>
              </div>
              <div className="w-10 h-10 bg-[#0E7490] text-white rounded-xl flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-5">
              <ProgressBar label="Bible Reading" percent={85} color="bg-[#38BDF8]" />
              <ProgressBar label="Prayer Practice" percent={72} color="bg-[#8B5CF6]" />
              <ProgressBar label="Community Engagement" percent={90} color="bg-[#F59E0B]" />
            </div>

            {/* Stats cards */}
            <div className="grid md:grid-cols-3 gap-4  mt-8">
              <StatCard number="42" label="Lessons" />
              <StatCard number="15" label="Days Streak" highlight />
              <StatCard number="8" label="Mentorships" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InnovationSection;



const ProgressBar = ({
  label,
  percent,
  color,
}: {
  label: string;
  percent: number;
  color: string;
}) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-900">{percent}%</span>
    </div>
    <div className="w-full bg-gray-200 h-2 rounded-full">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

const StatCard = ({
  number,
  label,
  highlight,
}: {
  number: string;
  label: string;
  highlight?: boolean;
}) => (
  <div
    className={`rounded-2xl p-4 text-center ${
      highlight ? "bg-[#E9F6FB]" : "bg-[#F1F5F9]"
    }`}
  >
    <p className="text-xl font-bold text-[#1C8CAD]">{number}</p>
    <p className="text-xs text-gray-500 mt-1">{label}</p>
  </div>
);