import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Code2,
  Palette,
  Globe,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const floatingSkillVariants = {
  float: (delay = 0) => ({
    y: [0, -8, 0],
    opacity: [0.85, 1, 0.85],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  }),
};

const roles = [
  "UI/UX Designer",
  "Web Designer",
  "SEO Strategist",
  "AI-Assisted Creative",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % roles.length),
      2600
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-[#050509] text-white flex items-center"
      aria-label="Hero section introducing Udit Bhatnagar"
    >
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* small label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-[11px] tracking-[0.25em] uppercase text-slate-400"
        >
          UI/UX • Web Design • SEO • AI
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black tracking-tight leading-none mb-3"
        >
          {personalInfo.name.toUpperCase()}
        </motion.h1>

        {/* Animated role line */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center mb-6"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mr-3">
            ROLE
          </span>
          <div className="h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="block text-xs sm:text-sm font-semibold text-slate-100"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Image + floating skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8 flex justify-center"
        >
          <div className="relative w-[220px] h-[220px] sm:w-[310px] sm:h-[310px] md:w-[350px] md:h-[350px] mx-auto">
            {/* glow */}
            <div className="absolute -inset-8 bg-gradient-to-b from-red-500/40 via-transparent to-purple-500/30 blur-3xl -z-10" />

            <img
              src={personalInfo.photoUrl || "/images/udit-profile.jpg"}
              alt={`${personalInfo.name} – UI/UX & Web Designer`}
              className="w-full h-full object-cover rounded-full shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* floating skill pills */}
          <motion.div
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-[11px] rounded-full bg-white/5 border border-white/10 absolute -top-3 -left-4"
            variants={floatingSkillVariants}
            animate="float"
            custom={0.2}
          >
            <Code2 size={12} />
            <span>HTML · CSS · Tailwind</span>
          </motion.div>

          <motion.div
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-[11px] rounded-full bg-white/5 border border-white/10 absolute top-5 -right-10"
            variants={floatingSkillVariants}
            animate="float"
            custom={0.5}
          >
            <Palette size={12} />
            <span>Figma · UI Kits</span>
          </motion.div>

          <motion.div
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-[11px] rounded-full bg-white/5 border border-white/10 absolute bottom-2 -left-8"
            variants={floatingSkillVariants}
            animate="float"
            custom={0.8}
          >
            <Globe size={12} />
            <span>SEO · Landing Pages</span>
          </motion.div>

          <motion.div
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-[11px] rounded-full bg-blue-600/90 border border-blue-400/60 absolute bottom-4 -right-6"
            variants={floatingSkillVariants}
            animate="float"
            custom={1.1}
          >
            <Sparkles size={12} />
            <span>AI Tools · ChatGPT</span>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 mb-8 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold tracking-wide hover:bg-slate-200 transition-colors"
          >
            View Selected Work
            <ArrowRight size={16} className="ml-2" />
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline"
          >
            Let&apos;s discuss your project
          </a>
        </motion.div>

        {/* Contact row */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-wrap justify-center gap-5 text-xs sm:text-sm font-medium text-slate-400"
        >
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone size={14} />
            <span>{personalInfo.phone}</span>
          </a>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;