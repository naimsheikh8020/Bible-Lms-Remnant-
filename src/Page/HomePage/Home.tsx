import AIPromoSection from "../../Components/AIPromoSection";
import AgeBasedLearningExprience from "./HomeSection/AgeBasedLearningExprience";
import AudienceSection from "./HomeSection/AudienceSection";
import CoreFeaturesSection from "./HomeSection/CoreFeaturesSection";
import HeroSection from "./HomeSection/HeroSection";
import HowItWorksSection from "./HomeSection/HowItWorksSection";


const Home = () => {
  return (
    <>
      <HeroSection/>
      <AudienceSection/>
      <AIPromoSection/>
      <HowItWorksSection/>
      <CoreFeaturesSection/>
      <AgeBasedLearningExprience/>
    </>
  );
};

export default Home;
