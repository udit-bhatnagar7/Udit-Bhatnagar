import React from "react";
import { motion } from "framer-motion";
// Dynamically import all graphics from the assets folder
const importAll = import.meta.glob("../assets/graphics/*.{png,jpg,jpeg,svg}", { eager: true });
const graphicDesignData = Object.entries(importAll).map(([path, module]) => {
    const fileName = path.split('/').pop().replace(/\.(png|jpg|jpeg|svg)$/i, "");
    return {
        id: fileName,
        title: fileName.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
        category: "Graphic",
        image: module.default,
    };
});
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const DesignGallery = () => {
    // Show only first 6 items
    const displayedItems = graphicDesignData.slice(0, 6);

    return (
        <section className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-blue-400 mb-3">
                            Graphic Design
                        </p>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                            Visual & Brand Identity
                        </h2>
                        <p className="text-slate-400 mt-4 max-w-lg">
                            A collection of logos, thumbnails, flyers, and social media graphics.
                        </p>
                    </div>

                    <Link
                        to="/gallery"
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium text-white"
                    >
                        View Full Gallery
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Masonry-style Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {displayedItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
    );
};

export default DesignGallery;
