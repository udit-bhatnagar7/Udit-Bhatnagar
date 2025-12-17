import React from "react";
import { experienceData } from "../data";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            My Journey
          </h3>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Professional Experience
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            A snapshot of the roles where I&apos;ve designed, shipped and
            iterated on real products with real constraints.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-10 space-y-12">
          {/* Vertical gradient line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 -z-10">
            <div className="w-px h-full bg-gradient-to-b from-blue-500 via-slate-600 to-purple-500 opacity-60" />
          </div>

          {experienceData.map((job, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative md:flex md:items-stretch md:gap-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6">
                  <div className="w-4 h-4 rounded-full bg-[#050509] border-2 border-blue-400 shadow-[0_0_0_4px_rgba(37,99,235,0.25)]" />
                </div>

                {/* Spacer side (for alternating layout) */}
                <div
                  className={`hidden md:block md:w-1/2 ${
                    isLeft ? "" : "order-2"
                  }`}
                />

                {/* Card side */}
                <div
                  className={`md:w-1/2 ${
                    isLeft ? "md:pl-10 md:order-2" : "md:pr-10"
                  }`}
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-6 sm:px-7 sm:py-7 shadow-[0_18px_45px_rgba(0,0,0,0.6)] hover:border-blue-400/60 hover:bg-white/8 transition-colors duration-300">
                    {/* Top row: company & duration */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                        <Briefcase size={14} />
                        <span>{job.company}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-[11px] text-slate-300">
                        <Calendar size={12} />
                        <span className="uppercase tracking-[0.16em]">
                          {job.duration}
                        </span>
                      </div>
                    </div>

                    {/* Role */}
                    <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                      {job.role}
                    </h4>

                    {/* Description list */}
                    <ul className="space-y-2.5 mb-5">
                      {job.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/80 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tools */}
                    {job.tools && job.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {job.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 text-slate-100 border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
