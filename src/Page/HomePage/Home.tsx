import AIPromoSection from "../../Components/AIPromoSection";
import AgeBasedLearningExprience from "./HomeSection/AgeBasedLearningExprience";
import AudienceSection from "./HomeSection/AudienceSection";
import CoreFeaturesSection from "./HomeSection/CoreFeaturesSection";
import CTASection from "./HomeSection/CTASection";
import HeroSection from "./HomeSection/HeroSection";
import HowItWorksSection from "./HomeSection/HowItWorksSection";
import TrustSection from "./HomeSection/TrustSection";


const Home = () => {
  return (
    <>
      <HeroSection/>
      <AudienceSection/>
      <AIPromoSection/>
      <HowItWorksSection/>
      <CoreFeaturesSection/>
      <AgeBasedLearningExprience/>
      <TrustSection/>
      <CTASection/>
    </>
  );
};

export default Home;
