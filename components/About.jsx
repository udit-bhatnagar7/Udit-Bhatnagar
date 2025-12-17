import React from "react";
import {
  aboutContent,
  educationData,
  languages,
  hobbies,
} from "../data";
import {
  Layout,
  Search,
  Zap,
  GraduationCap,
  Globe,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      {/* optional background blobs (purely decorative) */}
      {/* 
      <div className="absolute w-80 h-80 bg-blue-500/15 rounded-full blur-[120px] top-0 -left-24" />
      <div className="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-[140px] bottom-0 right-[-4rem]" />
      */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase mb-2">
              About Me
            </h3>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight mb-5 max-w-xl">
              Designing thoughtful, conversion-focused experiences with{" "}
              <span className="text-blue-400">strategy</span> &{" "}
              <span className="text-blue-400">AI</span>.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 whitespace-pre-line max-w-xl">
              {aboutContent.description}
            </p>

            {/* Human side card */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 mb-8">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Camera size={20} className="text-blue-400" />
                The human side
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {aboutContent.personal}
              </p>
            </div>

            {/* Hobbies */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-3">
                Outside the screen
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg">
                {hobbies.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-[11px] font-medium text-slate-200 bg-white/5 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {/* Values */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-3">
                How I like to work
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                <Value
                  icon={<Layout size={18} />}
                  title="Pixel-perfect UI"
                  subtitle="Clean, accessible layouts that feel modern and intentional."
                />
                <Value
                  icon={<Search size={18} />}
                  title="SEO-focused"
                  subtitle="Designs built to rank, convert, and support marketing goals."
                />
                <Value
                  icon={<Zap size={18} />}
                  title="AI-accelerated"
                  subtitle="Using tools like ChatGPT & UX Pilot to move faster and smarter."
                />
              </div>
            </div>

            <Divider />

            {/* Languages — moved ABOVE education */}
            {/* <Section title="Languages" icon={<Globe size={18} />}>
              <div className="flex gap-3 flex-wrap">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-100 border border-white/10"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Section>

            <Divider /> */}

            {/* Education */}
            <Section title="Education" icon={<GraduationCap size={20} />}>
              <div className="space-y-4">
                {educationData.map((edu, i) => (
                  <Edu key={i} edu={edu} />
                ))}
              </div>
            </Section>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Value = ({ icon, title, subtitle }) => (
  <motion.div
    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/60 hover:bg-white/7 transition-all"
    whileHover={{ y: -2 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
  >
    <div className="w-9 h-9 rounded-lg bg-blue-500/15 text-blue-300 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1 text-sm">{title}</h4>
      <p className="text-[11px] text-slate-300 leading-relaxed">
        {subtitle}
      </p>
    </div>
  </motion.div>
);

const Section = ({ title, icon, children }) => (
  <div className="space-y-4">
    <h4 className="text-lg font-semibold flex items-center gap-2 text-white">
      <span className="text-blue-300">{icon}</span>
      <span>{title}</span>
    </h4>
    {children}
  </div>
);

const Divider = () => <div className="w-full h-px bg-white/10" />;

const Edu = ({ edu }) => (
  <motion.div
    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.35 }}
  >
    <div>
      <h5 className="font-semibold text-slate-50 text-sm">{edu.degree}</h5>
      <p className="text-xs text-slate-300">{edu.institution}</p>
    </div>
    <span className="text-[11px] text-slate-400 bg-white/5 px-2 py-1 rounded-full border border-white/10">
      {edu.year}
    </span>
  </motion.div>
);

export default About;
