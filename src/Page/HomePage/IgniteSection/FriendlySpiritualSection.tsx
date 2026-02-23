import { assets } from "../../../assets/assets";
import { Heart, BookOpen, Compass, Users } from "lucide-react";

const FriendlySpiritualSection = () => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2  items-center">
        
        {/* LEFT IMAGE */}
        <div className="hidden md:block">
          <img
            src={assets.Spritualimg}
            alt="Spiritual Growth"
            className=""
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-block bg-[#FFEBD6] text-[#F59E0B] text-xs tracking-wide font-medium px-4 py-1.5 rounded-full mb-6">
            WHAT IS IGNITE
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937] leading-snug mb-6">
            A Beginner-Friendly Spiritual Awakening Program
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-10 ">
            Ignite is your first step into a transformative faith journey.
            Designed specifically for young people seeking purpose, our program
            introduces you to foundational spiritual concepts through modern,
            engaging methods and personalized mentorship.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-[#fff7ed] p-6 rounded-2xl">
              <Heart className="mb-4 text-gray-600" size={20} />
              <h4 className="font-semibold text-[#1F2937] mb-2">
                Spiritual Curiosity Awakening
              </h4>
              <p className="text-sm text-gray-600">
                Discover the joy of exploring faith in a safe, welcoming
                environment designed for questions and wonder.
              </p>
            </div>

            <div className="bg-[#fff7ed] p-6 rounded-2xl">
              <BookOpen className="mb-4 text-gray-600" size={20} />
              <h4 className="font-semibold text-[#1F2937] mb-2">
                Faith Introduction & Guidance
              </h4>
              <p className="text-sm text-gray-600">
                Begin your spiritual journey with carefully crafted lessons that
                make faith accessible and relevant.
              </p>
            </div>

            <div className="bg-[#fff7ed] p-6 rounded-2xl">
              <Compass className="mb-4 text-gray-600" size={20} />
              <h4 className="font-semibold text-[#1F2937] mb-2">
                Personal Identity Discovery
              </h4>
              <p className="text-sm text-gray-600">
                Understand who you are and who you’re meant to be through the
                lens of faith and purpose.
              </p>
            </div>

            <div className="bg-[#fff7ed] p-6 rounded-2xl">
              <Users className="mb-4 text-gray-600" size={20} />
              <h4 className="font-semibold text-[#1F2937] mb-2">
                Community Connection
              </h4>
              <p className="text-sm text-gray-600">
                Build meaningful relationships with mentors and peers who share
                your journey of faith discovery.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FriendlySpiritualSection;