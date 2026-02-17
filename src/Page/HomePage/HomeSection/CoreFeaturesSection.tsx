import { assets, coreFeatures } from "../../../assets/assets";
import CoreFeaturesSectionCard from "../../../Components/CoreFeaturesSectionCard";

const CoreFeaturesSection = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold ">Core Features Section</h1>
        <p className="text-gray-600 mt-2 text-[20px]">
          Everything you need for comprehensive learning
        </p>
      </div>
      <div>
        {/* card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {coreFeatures.map((feature) => (
            <CoreFeaturesSectionCard
              key={feature.id}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeaturesSection;
