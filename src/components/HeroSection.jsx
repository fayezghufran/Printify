import heroImage from "../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        {/* Left side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight" data-aos="fade-left">
            Craft Your Own{" "}
            <span className="bg-emerald-400 text-transparent bg-clip-text">
              Fashion Statement
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl" data-aos="zoom-in">
            Unleash your creativity with our custom clothing platform. Design
            unique pieces that express your style and make a lasting impression.
          </p>
          <div className="flex flex-col lg:flex-row justify-start my-8 space-y-4 lg:space-y-0 lg:space-x-6">
            <a
              href="#"
              className="bg-emerald-400 text-white py-3 px-6 rounded-md shadow-lg hover:bg-emerald-500 transition-all duration-300"
            >
              Start Designing
            </a>
            <a
              href="#"
              className="py-3 px-6 border border-emerald-400 rounded-md text-gray-800 hover:bg-emerald-400 hover:text-white transition-all duration-300"
            >
              Explore Styles
            </a>
          </div>
          <p className="text-base font-semibold text-emerald-600 max-w-2xl">
          Trusted by over 8M sellers around the world
          </p>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full h-auto max-w-lg"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
