// components/ProjectHighlights.jsx
import React, { useState } from "react";
import { caseStudies } from "../data";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectHighlights = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            Selected Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
            Project Highlights
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A curated list of web and mobile products I’ve designed and shipped
            for different clients and industries.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${study.id}/600/400`}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {study.category && (
                  <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full bg-black/70 text-white">
                    {study.category}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {study.title}
                </h3>
                <p className="text-[12px] text-slate-300 line-clamp-3">
                  {study.overview}
                </p>

                {/* solution/stack tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {study.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/5 text-slate-100 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedStudy(study)}
                  className="mt-3 inline-flex items-center justify-between text-[12px] font-semibold text-blue-300 hover:text-white bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/40 rounded-full px-4 py-2 transition-colors"
                >
                  <span>View project details</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-3xl w-full max-h-[80vh] bg-[#050509] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {selectedStudy.subtitle}
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {selectedStudy.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-slate-300"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal body (scrollable) */}
              <div className="px-5 py-4 space-y-4 overflow-y-auto text-sm text-slate-200">
                <p>{selectedStudy.overview}</p>

                {selectedStudy.problems && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400 mb-1">
                      Problem
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-200/90">
                      {selectedStudy.problems.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedStudy.solutions && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400 mb-1">
                      UX Solutions
                    </h4>
                    <ul className="space-y-1">
                      {selectedStudy.solutions.map((s, i) => (
                        <li key={i}>
                          <span className="font-semibold">{s.title}: </span>
                          <span className="text-slate-300/90">
                            {s.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedStudy.seoStrategy && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400 mb-1">
                      SEO Integration
                    </h4>
                    <ul className="space-y-1">
                      {selectedStudy.seoStrategy.map((s, i) => (
                        <li key={i}>
                          <span className="font-semibold">{s.title}: </span>
                          <span className="text-slate-300/90">
                            {s.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedStudy.impact && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-green-400 mb-1">
                      Business Impact
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-200/90">
                      {selectedStudy.impact.map((imp, i) => (
                        <li key={i}>{imp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedStudy.learnings && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-1">
                      Learnings
                    </h4>
                    <p className="italic text-slate-300">
                      “{selectedStudy.learnings}”
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectHighlights;
