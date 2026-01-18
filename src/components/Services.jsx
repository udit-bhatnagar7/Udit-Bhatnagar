import React from "react";
import { servicesData } from "../data";
import {
  Layout,
  Monitor,
  ShoppingBag,
  Search,
  TrendingUp,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

// icon mapping for dynamic icons
const iconMap = {
  Layout: <Layout size={24} />,
  Monitor: <Monitor size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  Search: <Search size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Palette: <Palette size={24} />,
};

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

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      {/* optional glow accents */}
      {/* <div className="pointer-events-none absolute -top-24 right-10 w-64 h-64 rounded-full bg-blue-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-500/15 blur-[120px]" /> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Services &amp; Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            From UX flows to live, SEO-friendly websites—end-to-end support for
            digital products, marketing sites, and conversion-focused experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col gap-4"
            >
              {/* top gradient bar */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-purple-500 opacity-80" />

              {/* icon */}
              <div className="inline-flex items-center justify-center mb-5">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-300 border border-blue-400/40 group-hover:bg-blue-500/30 group-hover:text-white transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <div className="absolute inset-0 rounded-2xl blur-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-[12px] text-slate-400 mb-2">
                {service.shortDescription ||
                  "Practical, results-driven deliverables aligned with your product and business goals."}
              </p>

              <ul className="space-y-2 mt-1">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-slate-200 text-xs sm:text-sm"
                  >
                    <span className="mt-1 mr-2 inline-block w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;