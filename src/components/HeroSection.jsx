import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-8 lg:mt-24 text-center bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
        Elevate Your Projects with{" "}
        <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
          SoftEdge
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-4xl">
        Discover tools and features designed to take your development skills to the next level. Our platform simplifies your workflow, boosts productivity, and supports your creative vision.
      </p>
      <div className="flex flex-col lg:flex-row justify-center my-8 space-y-4 lg:space-y-0 lg:space-x-6">
        <a
          href="#"
          className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-gradient-to-l transition-all duration-300"
        >
          Start Now
        </a>
        <a href="#" className="py-3 px-6 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-200 transition-all duration-300">
          Discover More
        </a>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg shadow-md border border-gray-300 w-full lg:w-1/2"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg shadow-md border border-gray-300 w-full lg:w-1/2"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
