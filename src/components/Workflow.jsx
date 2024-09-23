import { CheckCircle2 } from "lucide-react";
import fashionImg from "../assets/fashion.svg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 bg-white py-12">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-bold text-gray-800" data-aos="fade-down">
        Elevate Your{" "}
        <span className="bg-emerald-400 text-transparent bg-clip-text">
          Fashion Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center mt-12 lg:mt-20">
        <div className="p-4 w-full lg:w-1/2 flex justify-center">
          <img
            src={fashionImg}
            alt="Fashion"
          />
          
        </div>
        <div className="pt-12 w-full lg:w-1/2 px-6" data-aos="fade-right">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex mb-8 items-start transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center items-center bg-gradient-to-b from-emerald-200 to-emerald-300 h-12 w-12 p-3 rounded-full shadow-md text-teal-600">
                <CheckCircle2 />
              </div>
              <div className="ml-6">
                <h5 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h5>
                <p className="text-md mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
