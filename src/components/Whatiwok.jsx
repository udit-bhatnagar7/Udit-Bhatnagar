import React from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, Blocks, Sparkles } from "lucide-react";

const groups = [
  {
    label: "Frontend & UI Implementation",
    icon: <Code2 size={18} />,
    description:
      "Designs translated into fast, responsive and accessible interfaces.",
    tools: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Basic JavaScript"],
    usedFor: "Marketing sites, dashboards, landing pages.",
  },
  {
    label: "Product & Visual Design",
    icon: <PenTool size={18} />,
    description:
      "From low-fi wireframes to polished visuals and marketing assets.",
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
    usedFor: "UI design systems, prototypes, brand visuals.",
  },
  {
    label: "No-Code, CMS & Platforms",
    icon: <Blocks size={18} />,
    description:
      "Landing pages, marketing sites and dashboards built with modern tools.",
    tools: ["WordPress", "Wix", "Framer", "Zoho", "Lovable"],
    usedFor: "Fast launches without heavy engineering.",
  },
  {
    label: "AI, Workflow & Collaboration",
    icon: <Sparkles size={18} />,
    description:
      "Using AI and modern workflows to ship faster and keep teams aligned.",
    tools: ["ChatGPT", "Notion", "UX Pilot", "Builder.io"],
    usedFor: "Ideation, content, handoff & team collaboration.",
  },
];

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
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Stack = () => {
  return (
    <section
      id="stack"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      {/* subtle grid + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#1f2937_1px,_transparent_0)] bg-[length:18px_18px]" />
      </div>
      <div className="pointer-events-none absolute -top-24 left-0 w-72 h-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
            Tools I use to design, build &amp; ship.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-4">
            A practical stack across UX, UI, frontend and AI—so you don&apos;t
            need separate people for design, implementation and handoff.
          </p>

          {/* small tags row */}
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Product &amp; UI Design
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Frontend &amp; Implementation
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              No-Code &amp; CMS
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              AI-Assisted Workflows
            </span>
          </div>
        </motion.div>

        {/* Groups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-7"
        >
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col gap-4"
            >
              {/* top accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-purple-500 opacity-80" />

              {/* soft inner glow */}
              <div className="pointer-events-none absolute -bottom-10 right-0 w-40 h-40 rounded-full bg-blue-500/15 blur-[70px]" />

              <div className="flex items-center justify-between mb-1 relative z-10">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="inline-flex w-8 h-8 rounded-xl bg-blue-500/15 text-blue-300 items-center justify-center">
                    {group.icon}
                  </span>
                  {group.label}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  {group.tools.length} tools
                </span>
              </div>

              <p className="text-[12px] text-slate-300 relative z-10">
                {group.description}
              </p>

              <p className="text-[11px] text-slate-400 italic relative z-10">
                Used for: {group.usedFor}
              </p>

              <div className="flex flex-wrap gap-2 mt-1 relative z-10">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-[11px] font-medium text-slate-100 bg-white/5 border border-white/10 hover:border-blue-400/70 hover:bg-blue-500/10 transition-colors"
                  >
                    {tool}
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

export default Stack;
