import React from "react";
import { skillsData } from "../data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      {/* subtle gradient accents (optional) */}
      {/* <div className="pointer-events-none absolute -top-32 left-10 w-72 h-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-500/20 blur-[130px]" /> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            My Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Expertise &amp; Tools
          </h2>
          <p className="text-sm text-slate-400 mt-3 max-w-xl">
            From wireframing to shipping responsive, SEO-friendly websites—these
            are the tools and skills I rely on every day.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col gap-4"
            >
              {/* subtle top accent bar */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-blue-500 via-sky-400 to-purple-500 opacity-80" />

              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="inline-block w-1 h-6 rounded-full bg-blue-500" />
                  {category.title}
                </h4>
                <span className="text-[11px] text-slate-400 uppercase tracking-[0.18em]">
                  {category.skills.length} items
                </span>
              </div>

              <p className="text-[11px] text-slate-400">
                Core tools & strengths I use to design and build better digital
                experiences.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-[11px] font-medium text-slate-100 bg-white/5 border border-white/10 hover:border-blue-400/70 hover:bg-blue-500/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
