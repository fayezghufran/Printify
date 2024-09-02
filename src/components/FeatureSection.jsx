import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 bg-white border-b border-gray-200 min-h-[800px]">
      <div className="text-center py-8">
        <span className="bg-teal-100 text-teal-700 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase">
          Key Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 lg:mt-12 tracking-wide font-bold text-gray-800">
          Discover the{" "}
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            benefits
          </span>{" "}
          of SoftEdge
        </h2>
      </div>
      <div className="flex flex-wrap mt-12 lg:mt-24 px-4 lg:px-8">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="flex items-start">
              <div className="flex h-12 w-12 p-3 bg-teal-100 text-teal-700 justify-center items-center rounded-full shadow-md">
                {feature.icon}
              </div>
              <div className="ml-6">
                <h5 className="text-2xl font-semibold text-gray-800">
                  {feature.text}
                </h5>
                <p className="text-md mt-4 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
