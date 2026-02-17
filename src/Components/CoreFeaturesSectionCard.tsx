import type { CoreFeaturesCardComponentProps } from "../types/CoreFeaturessCardComponentProps";

const CoreFeaturesSectionCard = ({
  title,
  description,
  img,
}: CoreFeaturesCardComponentProps) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      
      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src={img}
          alt={title}
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

export default CoreFeaturesSectionCard;
