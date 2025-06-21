import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import model2 from "./Photos/model-2.jpg";
import model3 from "./Photos/model-3.jpg";
import model4 from "./Photos/model-4.jpg";
import model5 from "./Photos/model-5.jpg";

function Banner() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 h-auto flex flex-col lg:flex-row justify-between items-center py-12 px-4 sm:px-8 lg:px-16 gap-8 lg:gap-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-sky-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Left Section: Text and Button */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center items-start text-left z-10">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-4 leading-tight">
          Bienvenue à <span className="text-sky-700">EMC-BOOST</span>,<br /> votre partenaire de confiance
        </h1>
        
        <p className="text-lg text-gray-700 mb-4 font-medium">
          Découvrez la force et l'élégance des solutions aluminium sur mesure pour vos projets.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-sky-500 flex-shrink-0"></div>
            <p className="text-gray-600">
              Fenêtres, portes et structures en aluminium haut de gamme
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-sky-500 flex-shrink-0"></div>
            <p className="text-gray-600">
              Design moderne et performance optimale
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-sky-500 flex-shrink-0"></div>
            <p className="text-gray-600">
              Accompagnement expert pour une installation durable
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
       
          <button 
            onClick={scrollToContact}
       className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-sky-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium"
          >
            Contactez-nous
          </button>
        </div>
      </div>

      {/* Right Section: Enhanced Swiper Image Slider */}
      <div className="w-full lg:w-1/2 h-80 sm:h-96 lg:h-[28rem] flex justify-center relative rounded-xl overflow-hidden shadow-xl">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          effect={'fade'}
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="w-full h-full"
        >
          {[model2, model3, model4, model5].map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination !bottom-4"></div>
      </div>
    </section>
  );
}

export default Banner;