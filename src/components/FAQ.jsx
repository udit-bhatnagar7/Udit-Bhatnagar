import React, { useState } from "react";
import { faqData } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-start mb-16">
                    <p className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
                        Common Queries
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 max-w-xl">
                        Answers to common questions about my design process, collaboration style, and project types.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`rounded-2xl border transition-colors duration-300 ${isOpen
                                        ? "bg-white/10 border-blue-500/30"
                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-base sm:text-lg font-medium transition-colors ${isOpen ? "text-white" : "text-slate-200"}`}>
                                        {item.question}
                                    </span>
                                    <div className={`p-1 rounded-full border transition-all duration-300 ${isOpen ? "border-blue-400 text-blue-400 rotate-180" : "border-white/20 text-slate-400"}`}>
                                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-slate-300 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
