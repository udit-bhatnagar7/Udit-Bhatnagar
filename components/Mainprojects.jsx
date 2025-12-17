// components/CaseStudy.jsx
import React, { useEffect, useRef, useState } from "react";
import { caseStudies } from "../data";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudy = () => {
  if (!caseStudies?.length) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef([]);

  // Scroll logic: which section is active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            if (!Number.isNaN(idx)) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    sentinelRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const active = caseStudies[activeIndex];
  const previous = caseStudies.slice(0, activeIndex);
  const hasPrevious = previous.length > 0;

  return (
    <section
      id="work-details"
      className="py-24 bg-[#050509] border-t border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
            Selected Works – In Depth
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            Scroll through the stack — each project smoothly takes over the main
            card while previous ones glide into the header.
          </p>
        </motion.div>

        {/* Sticky stack + main card */}
        <div className="sticky top-20 z-30 mb-24">
          {/* STACKED PREVIOUS (thin bar cards) */}
          <motion.div
            className="relative mb-6"
            initial={false}
            animate={{
              height: hasPrevious ? 220 : 0,          // 👈 only takes space after scroll
              opacity: hasPrevious ? 1 : 0,
              marginBottom: hasPrevious ? 24 : 0,
            }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {previous.slice(-3).map((study, idxFromEnd) => {
              const totalPrev = Math.min(previous.length, 3);
              const indexInStack = totalPrev - 1 - idxFromEnd; // 0..2 bottom->top
              const offset = indexInStack * 34;

              return (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 18,
                  }}
                  className="absolute inset-x-0"
                  style={{ top: `${offset}px`, zIndex: 10 + indexInStack }}
                >
                  <div className="flex items-stretch rounded-t-3xl rounded-b-2xl overflow-hidden bg-[#07101e] border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.6)] h-[150px]">
                    {/* mini image strip */}
                    <div className="overflow-hidden">
                      <img
                        src={
                          study.thumbnail ||
                          `https://picsum.photos/seed/${study.id}/400/260`
                        }
                        alt={study.imageAlt || study.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* text */}
                    <div className="flex-1 flex items-center justify-between px-4 sm:px-6">
                      <div className="min-w-0">
                        {study.subtitle && (
                          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-0.5 truncate">
                            {study.subtitle}
                          </p>
                        )}
                        <p className="text-xs sm:text-sm font-medium text-slate-100 truncate">
                          {study.title}
                        </p>
                      </div>
                      {study.tags?.[0] && (
                        <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.18em] bg-white/5 text-slate-100 border border-white/15">
                          {study.tags[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* MAIN BIG CARD (current) */}
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className="relative rounded-[32px] overflow-hidden"
          >
            {/* glowing backdrop */}
            <motion.div
              layout
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/25 to-slate-900/40 blur-xl opacity-60"
            />

            <div className="relative rounded-[30px] bg-gradient-to-r from-[#07101e] via-[#050c18] to-[#020712] border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.85)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{
                    type: "spring",
                    stiffness: 130,
                    damping: 22,
                  }}
                  className="flex flex-col md:flex-row"
                >
                  {/* image side */}
                  <motion.div
                    key={`img-${active.id}`}
                    initial={{ scale: 1.03 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 1.02, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 130,
                      damping: 22,
                    }}
                    className="md:w-5/12 bg-slate-900/40 relative"
                  >
                    {/* soft glow */}
                    <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/30 blur-3xl opacity-60 pointer-events-none" />
                    <div className="p-4 sm:p-6 h-full relative">
                      <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-800/70 border border-white/10">
                        <img
                          src={
                            active.thumbnail ||
                            `https://picsum.photos/seed/${active.id}/800/600`
                          }
                          alt={active.imageAlt || active.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* content side */}
                  <div className="md:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* top meta */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {active.subtitle && (
                          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400">
                            {active.subtitle}
                          </p>
                        )}
                        {active.category && (
                          <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] bg-white/5 text-slate-100 border border-white/15">
                            {active.category}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                        {active.title}
                      </h3>

                      {active.overview && (
                        <p className="text-sm sm:text-base text-slate-300 mb-4 max-w-xl">
                          {active.overview}
                        </p>
                      )}

                      {/* tags */}
                      {active.tags && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {active.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] bg-white/5 text-slate-100 border border-white/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* role */}
                      {active.role && (
                        <div className="inline-flex items-center px-3 py-2 rounded-full bg.white/10 border border.white/15 text-[10px] uppercase tracking-[0.18em] text-slate-200 mb-1">
                          {active.role}
                        </div>
                      )}
                    </div>

                    {/* CTA row */}
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-semibold tracking-wide hover:bg-slate-100 transition-colors"
                      >
                        View Case Study
                        <ArrowUpRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* SCROLL SENTINELS (controls which card is active) */}
        <div className="mt-10">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              ref={(el) => (sentinelRefs.current[index] = el)}
              data-index={index}
              className="h-[70vh]" // scroll distance per case study
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;