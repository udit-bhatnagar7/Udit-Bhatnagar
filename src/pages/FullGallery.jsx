import React from "react";
import { motion } from "framer-motion";
import { graphicDesignData } from "../data";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FullGallery = () => {
    // Show all items
    const items = graphicDesignData;

    return (
        <main className="min-h-screen bg-[#050509] text-white">
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                        <div>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
                            >
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
                                Full Design Gallery
                            </h1>
                            <p className="text-slate-400 mt-4 max-w-2xl">
                                Exploring visual identities through logos, posters, social media creatives, and digital art.
                            </p>
                        </div>
                    </div>

                    {/* Masonry-style Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-[#0a0a12] border border-white/10"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold mb-1">
                                        {item.category}
                                    </span>
                                    <h3 className="text-lg font-medium text-white">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FullGallery;
