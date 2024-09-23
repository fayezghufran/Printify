import React from "react";

const KeyBenefits = () => {
  const benefits = [
    {
      title: "Higher Profits",
      description:
        "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
      icon: "💰",
    },
    {
      title: "Robust Scaling",
      description:
        "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
      icon: "📈",
    },
    {
      title: "Best Selection",
      description:
        "With 900+ products and top quality brands, you can choose the best products for your business.",
      icon: "🛍️",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        {/* Title and Subtext */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Key Benefits
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Unlock the power of seamless integration with our service.
        </p>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-down">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-emerald-50 to-emerald-100 rounded-md shadow-md p-5 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="text-4xl mb-3 text-emerald-500">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
