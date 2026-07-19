import React from "react";
import { aboutContent, hobbies } from "../data";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Bio & Personality */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              About Me
            </span>

            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white leading-tight max-w-xl">
              Designing thoughtful, conversion-focused experiences for SaaS products.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {aboutContent.description}
            </p>
          </motion.div>

          {/* Personality / Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="space-y-6 lg:pt-8"
          >
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/20 hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden group shadow-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="font-semibold text-white mb-2.5 flex items-center gap-2 text-sm sm:text-base">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <Camera size={16} />
                </div>
                The human side
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {aboutContent.personal}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-3">
                Outside the screen
              </p>
              <div className="flex flex-wrap gap-2.5">
                {hobbies.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-blue-400/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
