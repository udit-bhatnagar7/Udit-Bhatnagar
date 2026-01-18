"use client";

import React from "react";
import { testimonialsData } from "../data";
import { Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            Testimonials
          </h3>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            What clients say
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            People I’ve collaborated with across products, UI/UX, and strategy.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          loop={true}
          slidesPerView={"auto"}
          freeMode={true}
          speed={12000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          className="overflow-visible"
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "430px" }} className="py-4"> 
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-7 py-8 h-full flex flex-col hover:bg-white/[0.09] transition relative">
                <Quote size={60} className="absolute -top-6 -right-0 text-white/5" />
                

                <p className="text-slate-200 italic leading-relaxed mb-6 flex-grow">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold text-slate-100">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-xs text-slate-400">
                      {item.role}
                      {item.company && ` • ${item.company}`}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;



