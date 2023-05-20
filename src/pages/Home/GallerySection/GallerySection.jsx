import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import slide4 from '../../../assets/slide4.jpg';
import slide5 from '../../../assets/slide5.jpg';
import slide6 from '../../../assets/slide6.jpg';

SwiperCore.use([Navigation, Pagination]);


const GallerySection = () => {
    return (
        <div className="flex items-center justify-center py-8 w-10/12 mx-auto">
      <div className="container mx-auto flex">
        <div className="flex-1 my-auto">
          <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
            <p className="text-gray-700 mb-8">
              Welcome to our gallery. Take a look at some of our products.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-96 h-96 bg-gray-400 rounded-lg"
          >
            <SwiperSlide>
              <img
                src={slide1}
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide2}
                alt="Image 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide3}
                alt="Image 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide4}
                alt="Image 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide5}
                alt="Image 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide6}
                alt="Image 6"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
    );
};

export default GallerySection;