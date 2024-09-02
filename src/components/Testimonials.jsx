import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 bg-white py-12">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 lg:my-12 font-bold text-gray-800">
        What Our Users Say
      </h2>
      <div className="flex flex-wrap justify-center px-4 lg:px-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-gray-100 rounded-md p-6 text-md border border-gray-300 font-thin shadow-md">
              <p className="font-normal text-neutral-900">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-gray-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="text-lg font-semibold text-gray-800">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-gray-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
