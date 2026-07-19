import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Dynamically import all graphics from the assets folder
const importAll = import.meta.glob("../assets/graphics/*.{png,jpg,jpeg,svg}", { eager: true });
const items = Object.entries(importAll).map(([path, module]) => {
    const fileName = path.split('/').pop().replace(/\.(png|jpg|jpeg|svg)$/i, "");
    return {
        id: fileName,
        title: fileName.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
        category: "Graphic",
        image: module.default,
    };
});

const FullGallery = () => {

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
                            <h1 className="text-4xl md:text-6xl font-sans font-black text-white">
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
                                    width="400"
                                    height="300"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />


                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FullGallery;
