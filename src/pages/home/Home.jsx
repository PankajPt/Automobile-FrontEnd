import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { car1, car2, car3, car4, car5, car6 } from '../../assets/index.assets.js';
import './home.css'

const Home = () => {
  const cars = [car1, car2, car3, car4, car5, car6];

  return (
    <div className="relative h-screen w-full bg-gray-900 flex items-center justify-center">
      {/* Slider Container */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
          }}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          className="h-[600px] w-full"
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full bg-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="h-full w-full flex items-center justify-center bg-gray-900 rounded-lg">
                  <img 
                    src={car} 
                    alt={`Auto Repair Example ${index + 1}`}
                    className="h-full w-full object-contain p-8"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows */}
      <button className="custom-next absolute top-1/2 right-4 z-20 -translate-y-1/2 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
        <ChevronRightIcon className="w-8 h-8 text-gray-300" />
      </button>
      <button className="custom-prev absolute top-1/2 left-4 z-20 -translate-y-1/2 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
        <ChevronLeftIcon className="w-8 h-8 text-gray-300" />
      </button>

      {/* Pagination Dots */}
      <div className="custom-pagination absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex gap-2" />

      {/* Service Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 text-white text-outline">
          Restore Your Ride to Perfection
          </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-light text-outline">
            Premium dent removal, precision paint correction, and expert auto restoration.
            </p>
            <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg ">
            Book Your Consultation
            </button>
          </div>
        </div>
      </div>
  );
};

export default Home;