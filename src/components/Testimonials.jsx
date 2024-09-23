import { testimonials } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules"; // Correct path for Swiper 7+
import { Star } from "lucide-react"; // Make sure to install lucide-react if not already

const Testimonials = () => {
  return (
    <div className="mt-20 bg-white py-12 px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800 mb-8" data-aos="fade-up">
        Loved by Fashion Enthusiasts Worldwide
      </h2>
      {/* Description */}
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12" data-aos="fade-right">
        Discover why our customers adore our collections. From everyday wear to
        stunning outfits, we prioritize style and quality to elevate your
        fashion game.
      </p>
      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]} // Use the corrected modules
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg p-6 text-md border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300" data-aos="fade-down">
              <p className="font-light text-gray-800 italic mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mb-4">
                {/* Star Rating */}
                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 mr-4 rounded-full border border-gray-300 shadow-sm"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="text-lg font-semibold text-gray-900">
                    {testimonial.user}
                  </h6>
                  <span className="text-sm text-gray-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
