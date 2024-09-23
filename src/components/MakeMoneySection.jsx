import React from "react";
import Plant from "../assets/money-image.svg";

const MakeMoneySection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-gray-800 text-white rounded-md shadow-lg">
      {/* Left Section: Text, Pricing Table, Button */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4" data-aos="fade-down">
          Make Money, Risk-Free
        </h2>
        <p className="mb-8" data-aos="fade-left">
          You pay for fulfillment only when you make a sale.
        </p>

        <div className="bg-gray-900 p-6 rounded-md mb-6 shadow-md" data-aos="zoom-in">
          <div className="flex justify-between mb-4">
            <span>You sell a t-shirt</span>
            <span>$30</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>You pay for its production</span>
            <span>$12</span>
          </div>
          <hr className="border-gray-600 my-4" />
          <div className="flex justify-between font-semibold text-emerald-400">
            <span>Your profit</span>
            <span>$18</span>
          </div>
        </div>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow transition-all duration-300">
          Start Selling
        </button>

        <p className="text-gray-400 mt-4">
          100% Free to use · 900+ Products · Largest print network
        </p>
      </div>

      {/* Right Section: Illustration */}
      <div className="w-full lg:w-1/2">
        <img
          src={Plant}
          alt="Illustration of a person watering profit plants"
          className="w-full h-auto"
        />
       
      </div>
    </section>
  );
};

export default MakeMoneySection;
