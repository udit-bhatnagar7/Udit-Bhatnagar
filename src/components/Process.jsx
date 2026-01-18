// components/HowIWork.jsx
import React from "react";

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

const HowIWork = () => {
  return (
    <section
      id="process"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-stretch">
          {/* LEFT – BIG TITLE */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.24em] uppercase text-slate-400 mb-4">
                Process
              </p>
              <h2 className="text-[38px] sm:text-[54px] lg:text-[72px] leading-none font-black tracking-tight text-slate-100">
                HOW
                <br />
                WE WORK
              </h2>
            </div>

            <p className="mt-10 text-sm sm:text-base text-slate-400 max-w-md">
              A clear, collaborative process so you always know what&apos;s
              happening next—from first call to final delivery.
            </p>
          </div>

          {/* RIGHT – 2×2 grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className="
          flex flex-col justify-between
          p-8
          rounded-2xl
          bg-[#0a0a0e]
          border border-white/10
          hover:bg-white/5
          transition-colors duration-300
          space-y-6
        "
                >
                  {/* Step label */}
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400 flex items-center gap-1">
                      {step.step}
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold leading-tight text-slate-100">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;