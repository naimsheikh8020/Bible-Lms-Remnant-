import { trustStats } from "../../../assets/assets";

const TrustSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Trusted by Learners Worldwide
        </h2>

        {/* Quote */}
        <p className="text-gray-500 italic max-w-3xl mx-auto mb-12">
          "For I know the plans I have for you," declares the Lord,
          "plans to prosper you and not to harm you, plans to give
          you hope and a future." – Jeremiah 29:11
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trustStats.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-4xl font-bold text-cyan-700">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
