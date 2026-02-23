import { Search, UserRoundX, CircleAlert, Smartphone } from "lucide-react";

const GuidanceSection = () => {
  return (
    <section className="w-full  py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block bg-[#D8EEF7] text-[#5E9DB3] text-xs font-medium px-5 py-2 rounded-full mb-6 tracking-wide">
          WHY IGNITE MATTERS
        </div>

        {/* Heading */}
        <h2 className="text-[42px] leading-[52px] font-semibold text-[#1E293B] mb-6">
          Every Young Person Deserves
          <br />
          Guidance on Their Faith Journey
        </h2>

        {/* Description */}
        <p className="text-[#64748B] text-[15px] leading-7 max-w-2xl mx-auto mb-16">
          We understand the unique challenges young people face today.
          Ignite was created to bridge the gap between searching and finding.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">

          {/* Card 1 */}
          <div className="flex gap-5 bg-[#DCEAF1] p-7 rounded-[20px] shadow-sm">
            <div >
              <Search size={30} strokeWidth={1.5} className="text-[#426C7A]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1E293B] mb-2">
                Searching for Identity & Purpose
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Many young people feel lost in today's world, unsure of who
                they are or what their life's purpose might be.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-5 bg-[#DCEAF1] p-7 rounded-[20px] shadow-sm">
            <div className="">
              <UserRoundX size={30} strokeWidth={1.5} className="text-[#426C7A]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1E293B] mb-2">
                Feeling Spiritually Disconnected
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                It's easy to feel isolated or disconnected from deeper meaning
                when navigating life's challenges alone.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-5 bg-[#DCEAF1] p-7 rounded-[20px] shadow-sm">
            <div className="">
              <CircleAlert size={30} strokeWidth={1.5} className="text-[#426C7A]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1E293B] mb-2">
                Lack of Guided Mentorship
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Without proper guidance, spiritual growth can feel overwhelming
                and difficult to navigate independently.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex gap-5 bg-[#DCEAF1] p-7 rounded-[20px] shadow-sm">
            <div className="">
              <Smartphone size={30} strokeWidth={1.5} className="text-[#426C7A]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1E293B] mb-2">
                Overwhelming Digital Distractions
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Constant digital noise makes it hard to find quiet moments for
                reflection and spiritual connection.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Box */}
        <div className="bg-[#F1DFD7] rounded-[22px] p-8 mt-16 shadow-sm">
          <p className="text-[#1E293B] font-medium mb-2">
            Ignite provides the solution: structured guidance, supportive community, and meaningful growth.
          </p>
          <p className="text-sm text-[#64748B]">
            You don’t have to navigate this journey alone.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GuidanceSection;