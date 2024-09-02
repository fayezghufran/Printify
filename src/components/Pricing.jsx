import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 bg-white">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide font-bold text-gray-800">
        Flexible Pricing Plans
      </h2>
      <div className="flex flex-wrap px-4 lg:px-8">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-8 border border-gray-300 rounded-xl bg-gray-100 shadow-md">
              <p className="text-4xl mb-4 font-semibold text-gray-800">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text text-xl ml-2">
                    (Popular Choice)
                  </span>
                )}
              </p>
              <p className="mb-4">
                <span className="text-5xl font-bold text-gray-800">{option.price}</span>
                <span className="text-gray-500 text-lg">/Month</span>
              </p>
              <ul className="mb-6">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-3">
                    <CheckCircle2 className="text-teal-500" />
                    <span className="ml-2 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-4 mt-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white border border-transparent rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
