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
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
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
            <span>Figma · UI Kits</span>
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
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold tracking-wide hover:bg-slate-200 transition-colors"
          >
            View Selected Work
            <ArrowRight size={16} className="ml-2" />
          </a>

          <a
            href={personalInfo.resume}
            download
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/20 bg-white/5 text-white text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Download Resume
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 w-full"
        >
          {/* Experience */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="text-indigo-600 dark:text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award w-8 h-8"
                  aria-hidden="true"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {experienceYears}+
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Years Experience
            </div>
          </div>

          {/* Projects */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="text-indigo-600 dark:text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-folder-git-2 w-8 h-8"
                  aria-hidden="true"
                >
                  <path d="M2 14.5A2.5 2.5 0 0 0 4.5 17h12a2.5 2.5 0 0 0 2.5-2.5v-10a2.5 2.5 0 0 0-2.5-2.5h-5.5L8.5 4H4.5A2.5 2.5 0 0 0 2 6.5z"></path>
                  <line x1="12" x2="12" y1="13" y2="17"></line>
                  <circle cx="12" cy="19" r="2"></circle>
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {creativeWorkData.length}+
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Projects Completed
            </div>
          </div>

          {/* Clients */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="text-indigo-600 dark:text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users w-8 h-8"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {testimonialsData.length}+
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Happy Clients
            </div>
          </div>

          {/* Skills */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <div className="text-indigo-600 dark:text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap w-8 h-8"
                  aria-hidden="true"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {totalSkills}+
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Skills Mastered
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;