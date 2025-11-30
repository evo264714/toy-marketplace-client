import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
} from "swiper/core";
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import slide4 from "../../../assets/slide4.jpg";
import slide5 from "../../../assets/slide5.jpg";
import slide6 from "../../../assets/slide6.jpg";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { useState, useRef } from "react";

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

const GallerySection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);

  const slides = [
    { image: slide1, title: "Educational Toys" },
    { image: slide2, title: "Outdoor Fun" },
    { image: slide3, title: "Creative Playsets" },
    { image: slide4, title: "Building Blocks" },
    { image: slide5, title: "Interactive Games" },
    { image: slide6, title: "Learning Tools" },
  ];

  const handleThumbnailClick = (index) => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Toy Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the amazing collection of toys that bring joy and
              creativity to children
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Content - Text */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 p-3 rounded-xl mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Featured Collection
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore our handpicked selection of premium toys that combine
                  fun, education, and safety. Each item is carefully chosen to
                  inspire creativity and learning.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-gray-700">
                      Premium quality materials
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-gray-700">
                      Safe for all age groups
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-gray-700">
                      Educational and engaging
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-gray-700">
                      Durable and long-lasting
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-500">Toys</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-500">Brands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-500">Safe</div>
                  </div>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View All Products</span>
                  <FaAngleRight className="text-sm" />
                </button>
              </div>
            </div>

            {/* Right Content - Compact Slider */}
            <div className="flex-1 w-full max-w-md">
              <div className="relative">
                {/* Main Slider */}
                <Swiper
                  ref={mainSwiperRef}
                  spaceBetween={16}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="w-full h-64 rounded-2xl shadow-lg mb-4"
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <span className="text-white font-semibold text-sm">
                            {slide.title}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation */}
                <div className="flex justify-center space-x-4 mb-4">
                  <button className="custom-prev bg-white border border-gray-300 hover:bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div className="custom-pagination flex items-center space-x-2"></div>

                  <button className="custom-next bg-white border border-gray-300 hover:bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex space-x-2 overflow-x-auto py-2 px-1">
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300 focus:outline-none focus:border-blue-500"
                    >
                      <img
                        src={slide.image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="text-center mt-8">
            <div className="bg-white rounded-xl shadow-md p-4 max-w-2xl mx-auto">
              <p className="text-gray-600 text-sm">
                Click on thumbnails to navigate the gallery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 0.7;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default GallerySection;
