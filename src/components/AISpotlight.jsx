import React from 'react';
import { caseStudies } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AISpotlight = () => {
    // Filter only projects that have aiDetails
    const aiProjects = caseStudies.filter(p => p.aiDetails);

    if (!aiProjects.length) return null;

    return (
        <section className="max-w-7xl mx-auto py-24 md:py-32 relative overflow-hidden">
            {/* Custom Styles for Swiper Pagination */}
            <style>
                {`
                    .swiper-pagination-bullet {
                        background-color: rgba(255, 255, 255, 0.3) !important;
                        opacity: 1 !important;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: #6366f1 !important; /* indigo-500 */
                        opacity: 1 !important;
                    }
                `}
            </style>

            {/* Dynamic Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[180px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    speed={1000}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    className="w-full"
                >
                    {aiProjects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="flex flex-col lg:flex-row items-center gap-20">

                                {/* Left: Content and Story */}
                                <div className="lg:w-1/2">
                                    <span className="inline-flex items-center px-4 py-1.5 mb-8 text-[11px] font-semibold tracking-[0.25em] text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full">
                                        Case Study Spotlight
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                                        {project.title.split("–")[0].trim()} <br />
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${project.aiDetails.subheadlineGradient || 'from-indigo-400 to-indigo-200'}`}>
                                            {project.aiDetails.subheadline}
                                        </span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10 text-balance">
                                        {project.overview}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                        {project.aiDetails.features.map((feature, i) => (
                                            <div key={i} className="space-y-3">
                                                <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest">
                                                    0{i + 1} / {feature.title}
                                                </div>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg">
                                        Explore Solution
                                    </button>
                                </div>

                                {/* Right: Real Product Screenshot */}
                                <div className="lg:w-1/2 w-full">
                                    <div className="relative aspect-[4/3] max-w-xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.8)] bg-slate-950/40">
                                        <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/20 to-transparent blur-3xl opacity-60 pointer-events-none" />
                                        <div className="w-full h-full p-4 flex items-center justify-center">
                                            <img
                                                src={
                                                    project.id === "mls-sofo-ai"
                                                        ? "/images/projects/mls-sofo.png"
                                                        : project.id === "darbaan"
                                                            ? "/images/projects/darbaan.png"
                                                            : "/images/projects/safe-climate-trips.png"
                                                }
                                                alt={`${project.title} Interface`}
                                                width="800"
                                                height="600"
                                                className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl"
                                                loading="lazy"
                                            />
                                        </div>
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

export default AISpotlight;
