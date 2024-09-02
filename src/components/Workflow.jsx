import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 bg-white">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-bold text-gray-800">
        Elevate Your{" "}
        <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
          Development Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center mt-12 lg:mt-20">
        <div className="p-4 w-full lg:w-1/2 flex justify-center">
          <img
            src={codeImg}
            alt="Coding"
            className="rounded-lg shadow-md border border-gray-300"
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2 px-6">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="flex justify-center items-center bg-teal-100 h-12 w-12 p-3 rounded-full shadow-md text-teal-600">
                <CheckCircle2 />
              </div>
              <div className="ml-6">
                <h5 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h5>
                <p className="text-md mt-2 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
