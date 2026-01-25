import React from "react";
import { experienceData } from "../data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/10" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        {/* Section Header */}
        <div className="text-start mb-16">
          <h3 className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            My Journey
          </h3>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Professional Experience
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl">
            A snapshot of the roles where I&apos;ve designed, shipped and
            iterated on real products with real constraints.
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">
          {/* ONE vertical line */}
          {/* Vertical Line Grid Overlay */}
          <div className="absolute inset-0 hidden sm:grid grid-cols-[1fr_24px_4fr] gap-6 pointer-events-none">
            {/* Left column spacer */}
            <div />
            {/* Center column with line */}
            <div className="flex justify-center h-full">
              <div className="w-px h-full bg-gradient-to-b from-blue-500/60 via-slate-500/40 to-purple-500/60" />
            </div>
            {/* Right column spacer */}
            <div />
          </div>


          <div className="space-y-16">
            {experienceData.map((job, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_24px_4fr] gap-6 items-start"
              >
                {/* LEFT COLUMN */}
                <div className="text-left sm:text-right pt-1">
                  <div className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-1">
                    {job.duration || "Present"}
                  </div>

                  <div className="text-xl font-semibold text-white">
                    {job.company}
                  </div>

                  <div className="mt-1 text-sm italic text-slate-400">
                    {job.role}
                  </div>
                </div>

                {/* DOT */}
                <div className="relative flex justify-center">
                  <div className="relative z-10 mt-1 w-4 h-4 rounded-full bg-[#050509] border-2 border-blue-400 shadow-[0_0_0_6px_rgba(59,130,246,0.25)]" />
                </div>

                {/* RIGHT CARD */}
                <div className="rounded-2xl bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
                  {/* Description */}
                  <ul className="space-y-4 mb-6">
                    {job.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-sm text-slate-200 leading-relaxed"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Projects */}
                  {/* {job.projects?.length > 0 && (
                    <div className="border-t border-white/10 pt-5 mb-5">
                      <h4 className="text-[11px] uppercase tracking-[0.18em] text-purple-300 mb-3">
                        Key Projects
                      </h4>

                      <div className="space-y-3">
                        {job.projects.map((project, i) => (
                          <div
                            key={i}
                            className="rounded-lg bg-white/5 border border-white/10 p-4"
                          >
                            <div className="text-sm font-semibold text-white">
                              {project.name}
                            </div>
                            <p className="text-sm text-slate-400 mt-1">
                              {project.summary}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}

                  {/* Tools */}
                  {job.tools && (
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wide bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
