interface AudienceCardProps {
  title: string;
  description: string;
  img: string;
}

const AudienceCard = ({ title, description, img }: AudienceCardProps) => {
  return (
    <div className="bg-[#E9F6FB] p-10 rounded-2xl text-center">
      {/* Icon container */}
      <div className="flex justify-center mb-4 ">
        <img src={img} alt={title} className="w-16 h-16" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 leading-relaxed text-base">{description}</p>
    </div>
  );
};

export default AudienceCard;
