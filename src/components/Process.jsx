// components/HowIWork.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScopeWidget from "./process/ScopeWidget";
import FigmaWidget from "./process/FigmaWidget";
import CodeWidget from "./process/CodeWidget";
import DeployWidget from "./process/DeployWidget";

const steps = [
  {
    step: "STEP 1.",
    title: "Discovery Phase",
    description:
      "Understanding your goals, audience, pain points, and what sets you apart in the market.",
  },
  {
    step: "STEP 2.",
    title: "Project Kickoff",
    description:
      "Defining scope, milestones, and deliverables while setting up tools, files and timelines.",
  },
  {
    step: "STEP 3.",
    title: "Design, Receive & Refine",
    description:
      "Sharing design directions, gathering feedback in rounds, and refining until it feels just right.",
  },
  {
    step: "STEP 4.",
    title: "Launch & Grow",
    description:
      "Handing over assets, supporting implementation, and iterating based on real-world performance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

const HowIWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="process"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 flex flex-col gap-4 text-left"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              Process
            </span>
            <h2 className="text-[38px] sm:text-[54px] lg:text-[60px] leading-none font-black tracking-tight text-slate-100">
              HOW I WORK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            An integrated design and development process focused on shipping high-fidelity product MVPs without handoff loss.
          </p>
        </motion.div>

        {/* 4 Cards in a Row Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.div
                  key={step.step}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => {
                    setActiveStep(index);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`
                    flex flex-col justify-between
                    p-4
                    rounded-2xl
                    transition-all duration-300
                    space-y-3
                    relative
                    border cursor-default
                    bg-[#0a0a0f]
                    h-full
                    ${
                      isActive
                        ? "border-indigo-500/50 bg-[#0d0d14]/20"
                        : "border-white/5 hover:border-white/10"
                    }
                  `}
                >
                   {/* Step label & Title */}
                  <div className="flex flex-col gap-1 z-10 text-left">
                    <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-indigo-400 flex items-center gap-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className={`relative inline-flex rounded-full h-1.5 w-1.5 transition-colors duration-300 ${
                            isActive ? "bg-indigo-400" : "bg-white/10"
                          }`}
                        ></span>
                      </span>
                      {step.step}
                    </p>
                    <h3
                      className={`text-base sm:text-lg font-extrabold leading-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-slate-100 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-[12px] leading-relaxed z-10 text-left transition-colors duration-300 ${
                      isActive ? "text-slate-300" : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Interactive Dribbble-style Widget at the bottom */}
                  <div className="z-10 w-full mt-2">
                    {index === 0 && <ScopeWidget isActive={isActive} />}
                    {index === 1 && <FigmaWidget isActive={isActive} />}
                    {index === 2 && <CodeWidget isActive={isActive} />}
                    {index === 3 && <DeployWidget isActive={isActive} />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;