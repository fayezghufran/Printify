import React from "react";
import MockupImage1 from "../assets/mockuptshirt.png";
import MockupImage2 from "../assets/mockuptshirt.png";
import MockupImage3 from "../assets/mockuptshirt.png";
import MockupImage4 from "../assets/mockuptshirt.png";
import MockupImage5 from "../assets/mockupt.png";

const ProductDesignSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-gray-100 rounded-md shadow-lg">
      {/* Left Section: Product Images */}
      <div className="w-full lg:w-1/2 relative bg-emerald-500 rounded-md p-6 lg:p-12 shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <img
            src={MockupImage1}
            alt="Product 1"
            className="rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
          />
          <img
            src={MockupImage2}
            alt="Product 2"
            className="rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
          />
          <img
            src={MockupImage3}
            alt="Product 3"
            className="rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
          />
          <img
            src={MockupImage4}
            alt="Product 4"
            className="rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Design Tool UI Mockup */}
        <div className="absolute bottom-2 right-2 bg-white p-4 shadow-lg rounded-lg">
          <div className="text-center mb-2">
            <span className="text-gray-700 font-semibold">Edit</span> |{" "}
            <span className="text-gray-400">Preview</span>
          </div>
          <div className="border p-4 rounded-md shadow-sm">
            <img
              src={MockupImage5}
              alt="T-shirt Design"
              className="w-full h-auto"
            />
          </div>
          <button className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md shadow transition-all duration-300">
            Save
          </button>
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-16" data-aos="fade-right">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Easily add your design to a wide range of products
        </h2>
        <p className="text-gray-600 mb-8">
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a href="#" className="text-emerald-500 font-semibold hover:underline">
          All products &rarr;
        </a>
      </div>
    </section>
  );
};

export default ProductDesignSection;
