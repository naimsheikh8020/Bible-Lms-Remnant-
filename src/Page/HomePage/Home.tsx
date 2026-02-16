import { assets } from "../../assets/assets";
import { MoveRight } from "lucide-react";
import Button from "../../Components/Button";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 mt-6 lg:mt-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight lg:leading-snug">
            A Modern Learning & Spiritual Growth
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Learn, grow, and stay spiritually connected—anytime, anywhere.
          </p>

          <div className="flex  gap-4 mt-6 justify-center lg:justify-start">
            <Button
              onClick={() => console.log("hello")}
              variant="primary"
              icon={<MoveRight size={18} />}
            >
              Get Started
            </Button>
            <Button variant="outline">Explore Programs</Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.HeroImg}
            alt="Hero Image"
            className="w-full h-auto max-w-md mx-auto lg:max-w-none"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
