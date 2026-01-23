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
  Download,
  Award,
  Briefcase,
  Zap,
} from "lucide-react";
// Update imports to include data arrays
import {
  personalInfo,
  creativeWorkData,
  testimonialsData,
  skillsData,
  experienceData
} from "../data";
import { m, AnimatePresence } from "framer-motion";

// Helper to calculate experience
const startYear = 2019; // Based on experienceData
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startYear;

// Helper to count skills
const totalSkills = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

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
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center text-center">
        {/* Available for Work Badge */}
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400 text-xs font-medium tracking-wide shadow-lg shadow-emerald-500/10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Work
        </m.div>

        {/* small label */}
        {/* <m.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-[11px] tracking-[0.25em] uppercase text-slate-400"
        >
          UI/UX • Web Design • SEO • AI
        </m.div> */}

        {/* Name */}
        <m.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black tracking-tight leading-none mb-3"
        >
          {personalInfo.name.toUpperCase()}
        </m.h1>

        {/* Animated role line */}
        <m.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center mb-6"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mr-3">
            ROLE
          </span>
          <div className="h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <m.span
                key={roles[roleIndex]}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="block text-xs sm:text-sm font-semibold text-slate-100"
              >
                {roles[roleIndex]}
              </m.span>
            </AnimatePresence>
          </div>
        </m.div>

        {/* Image + floating skills */}
        <m.div
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
            // Removed loading="lazy" for LCP optimization
            />
          </div>

          {/* floating skill pills */}
          <m.div
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-[11px] rounded-full bg-white/5 border border-white/10 absolute -top-3 -left-4"
            variants={floatingSkillVariants}
            animate="float"
            custom={0.2}
          >
            <Code2 size={12} />
            <span>HTML · CSS · Tailwind</span>
          </m.div>

          <m.div
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-[11px] rounded-full bg-white/5 border border-white/10 absolute top-5 -right-10"
            variants={floatingSkillVariants}
            animate="float"
            custom={0.5}
          >
            <Palette size={12} />
            <span>Figma · UI/UX</span>
          </m.div>

          <m.div
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-[11px] rounded-full bg-white/5 border border-white/10 absolute bottom-2 -left-8"
            variants={floatingSkillVariants}
            animate="float"
            custom={0.8}
          >
            <Globe size={12} />
            <span>SEO · Landing Pages</span>
          </m.div>

          <m.div
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-[11px] rounded-full bg-blue-600/90 border border-blue-400/60 absolute bottom-4 -right-6"
            variants={floatingSkillVariants}
            animate="float"
            custom={1.1}
          >
            <Sparkles size={12} />
            <span>AI Tools · ChatGPT</span>
          </m.div>
        </m.div>

        {/* Tagline */}
        {/* <m.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 mb-8 leading-relaxed"
        >
          {personalInfo.tagline}
        </m.p> */}

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          {/* <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold tracking-wide hover:bg-slate-200 transition-colors"
          >
            View Selected Work
            <ArrowRight size={16} className="ml-2" />
          </a> */}

          <a
            href="/resume"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/20 bg-white/5 text-white text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            View Resume
            <Download size={16} className="ml-2" />
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline"
          >
            Let&apos;s discuss your project
          </a>
        </m.div>

        {/* Contact row */}
        <m.div
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
        </m.div>

        {/* Stats Section */}
        <m.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 w-full px-4"
        >
          {/* Experience */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-row items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Award size={24} />
            </div>
            <div className="text-start">
              <div className="text-3xl font-bold text-white mb-1">
                3+
              </div>
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                Years Experience
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-row items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Briefcase size={24} />
            </div>
            <div className="text-start">
              <div className="text-3xl font-bold text-white mb-1">
                15+
              </div>
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                Projects Done
              </div>
            </div>
          </div>

          {/* Clients */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-row items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Globe size={24} />
            </div>
            <div className="text-start">
              <div className="text-3xl font-bold text-white mb-1">
                2+
              </div>
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                Happy Clients
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;