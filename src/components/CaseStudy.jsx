import React from "react";
import { caseStudies as allCaseStudies } from "../data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudy = () => {
  const ids = [
    "mls-sofo-ai",
    "ria-listing-manager",
    "sofo-ai-virtual-staging",
    "sofo-ai-marketing",
    "darbaan",
    "safe-climate-trips",
    "goldtips-hair"
  ];
  const caseStudies = ids
    .map(id => allCaseStudies.find(study => study.id === id))
    .filter(Boolean);

  if (!caseStudies?.length) return null;

  return (
    <section
      id="work-details"
      className="py-24 bg-[#050509] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white mb-2">
            Selected Works – In Depth
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            Scroll down to explore each project stack. Cards overlay naturally, mimicking high-end Framer interactions.
          </p>
        </div>

        {/* Sticky Stacked Container */}
        <div className="relative flex flex-col gap-12 w-full mx-auto">
          {caseStudies.map((study, index) => {
            // Sticky top offset increases slightly per card to show stack depth
            const topOffset = 80 + index * 16; 

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ top: `${topOffset}px` }}
                className="sticky rounded-[30px] bg-gradient-to-r from-[#07101e] via-[#050c18] to-[#020712] border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.85)] overflow-hidden mb-12 h-auto md:h-[420px]"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Side */}
                  <div className="md:w-5/12 bg-slate-900/40 relative min-h-[320px] md:h-full">
                    <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/20 via-transparent to-sky-500/10 blur-3xl opacity-60 pointer-events-none" />
                    <div className="p-4 sm:p-6 h-full relative">
                      <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-800/70 border border-white/10 aspect-[4/3] md:aspect-auto md:h-full">
                        <img
                          src={study.thumbnail || `https://picsum.photos/seed/${study.id}/800/600`}
                          alt={study.imageAlt || study.title}
                          width="800"
                          height="600"
                          className="w-full h-full object-cover object-bottom"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[320px] md:h-full">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {study.subtitle && (
                          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400">
                            {study.subtitle}
                          </p>
                        )}
                        {study.category && (
                          <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] bg-white/5 text-slate-100 border border-white/15">
                            {study.category}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-sans font-black text-white mb-3">
                        {study.title}
                      </h3>

                      {study.overview && (
                        <p className="text-sm sm:text-base text-slate-300 mb-4 max-w-xl">
                          {study.overview}
                        </p>
                      )}

                      {study.tags && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] bg-white/5 text-slate-100 border border-white/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {study.role && (
                        <div className="inline-flex items-center px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.18em] text-slate-200 mb-1">
                          {study.role}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-semibold tracking-wide hover:bg-slate-100 transition-colors"
                      >
                        View Case Study
                        <ArrowUpRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
