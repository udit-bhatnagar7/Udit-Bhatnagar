import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { personalInfo } from "../data";
// eslint-disable-next-line no-unused-vars
import { m, AnimatePresence } from "framer-motion";
import HeroAvatar from "./HeroAvatar";
import StatsStrip from "./StatsStrip";

const roles = [
  "Product Designer",
  "Frontend Engineer",
  "React · Tailwind · TypeScript",
  "Design Systems",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % roles.length),
      2600
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    
    const el = heroRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full bg-[#050509] text-white flex items-center relative overflow-hidden py-24"
      aria-label="Hero section introducing Udit Bhatnagar"
    >
      {/* Ambient Aurora Glows & Grid Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Spotlight Radial Glow following cursor */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.06), transparent 80%)`
          }}
        />
        
        {/* Secondary ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[110px] rounded-full animate-pulse" style={{ animationDuration: "10s" }} />
        
        {/* Dynamic spotlight grid dots */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]"
          style={{
            WebkitMaskImage: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)`,
            maskImage: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)`
          }}
        />
        {/* Stationary base dim grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full">

            {/* Name & Title */}
            <m.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white mb-2"
            >
              {personalInfo.name}
            </m.h1>
            
            <m.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight pb-2 mb-3 text-slate-300"
            >
              Designer & Developer
            </m.h2>

            {/* Specialization slideshow */}
            <m.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center mb-6"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 mr-3 font-bold">
                Specialization
              </span>
              <div className="h-5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <m.span
                    key={roles[roleIndex]}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -18, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="block text-xs sm:text-sm font-semibold text-slate-300"
                  >
                    {roles[roleIndex]}
                  </m.span>
                </AnimatePresence>
              </div>
            </m.div>

            {/* Tagline Description */}
            <m.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.tagline}
            </m.p>

            {/* Action Buttons */}
            <m.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-row items-center gap-4 mb-6"
            >
              <a
                href="#contact-section"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold tracking-wide hover:bg-slate-200 transition-colors shadow-lg hover:shadow-white/5"
              >
                Get in Touch
                <ArrowRight size={15} className="ml-2" />
              </a>

              <Link
                to="/resume"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold tracking-wide hover:bg-white/10 transition-all"
              >
                View Resume
              </Link>
            </m.div>

            {/* Contact details */}
            <m.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-5 text-xs sm:text-sm font-medium text-slate-400"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </m.div>

            {/* Stats section inline */}
            <StatsStrip />
          </div>

          {/* Right Column: HeroAvatar Portrait */}
          <div className="lg:col-span-5 flex justify-center w-full relative">
            <HeroAvatar />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;