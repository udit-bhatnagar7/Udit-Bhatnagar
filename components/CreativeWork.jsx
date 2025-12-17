"use client";

import React, { useRef } from "react";
import { creativeWorkData } from "../data";
import { ArrowUpRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";


const CreativeWork = () => {
  const swiperRef = useRef(null);

  return (
    <section id="gallery" className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden">
      {/* side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050509] via-[#050509]/70 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050509] via-[#050509]/70 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h3 className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            Visuals
          </h3>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Creative Showcase
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 max-w-2xl mx-auto">
            UI concepts, branding explorations, and visuals that support my
            product work and experiments.
          </p>
        </div>

        {/* Smooth slider */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={24}
          loop={true}
          freeMode={true}
          freeModeMomentum={true}
          freeModeMomentumRatio={0.4}
          speed={1400}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="overflow-visible cursor-grab active:cursor-grabbing"
        >
          {creativeWorkData.map((item, index) => (
            <SwiperSlide
              key={item.title + index}
              style={{ width: "420px" }}
            >
              <article className="shrink-0">
                <div className="relative h-full rounded-[28px] bg-[#050509] border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.85)] overflow-hidden group">
                  
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${item.title + index}/800/600`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  </div>

                  {/* overlay card */}
                  <div className="relative -mt-10 mx-4 mb-4 rounded-2xl bg-black/85 border border-white/12 px-5 py-4 flex flex-col gap-3 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-blue-500/18 text-blue-300 border border-blue-400/50">
                        Highlight
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                      {item.title}
                      <ArrowUpRight size={16} className="text-slate-300" />
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/6 text-slate-100 border border-white/12"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CreativeWork;
