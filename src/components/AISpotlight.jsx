import React from 'react';

const AISpotlight = () => {
    return (
        <section className="max-w-7xl mx-auto py-24 md:py-32 relative overflow-hidden">
            {/* Dynamic AI Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left: Content and Story */}
                    <div className="lg:w-1/2">
                        <span className="inline-flex items-center px-4 py-1.5 mb-8 text-[11px] font-semibold tracking-[0.25em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
                            AI Case Study
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                            MLS Sofo AI: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300">
                                The Future of PropTech.
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10 text-balance">
                            Developed a high-performance UI/UX ecosystem that leverages custom AI models to ingest raw real-estate documents and instantly generate SEO-optimized, market-ready listings.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <div className="space-y-3">
                                <div className="text-blue-400 font-bold text-xs uppercase tracking-widest">01 / Extraction</div>
                                <p className="text-slate-300 text-sm leading-relaxed">Advanced OCR and NLP processing to pull deep data from messy legal docs.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-blue-400 font-bold text-xs uppercase tracking-widest">02 / Automation</div>
                                <p className="text-slate-300 text-sm leading-relaxed">Smart workflow triggers that syndicate listings across platforms automatically.</p>
                            </div>
                        </div>

                        <button className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg">
                            Explore Automation Flow
                        </button>
                    </div>

                    {/* Right: The "Eye-Catching" AI Visual */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-square max-w-xl mx-auto">
                            {/* Outer Rotating Ring */}
                            <div className="absolute inset-0 border-[1px] border-white/5 rounded-[4rem] animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-10 border-[1px] border-blue-500/20 rounded-[3rem] animate-[spin_15s_linear_infinite_reverse]"></div>

                            {/* Central AI Hub Card */}
                            <div className="absolute inset-20 glass-card rounded-[2rem] flex flex-col items-center justify-center p-8 text-center shadow-2xl shadow-blue-500/10 border border-blue-500/20">
                                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8" /><path d="m16 6-4 4-4-4" /><path d="M12 14v8" /><path d="m8 18 4 4 4-4" /><path d="m4.34 14.34 2.83-2.83" /><path d="m11.17 12.42 2.83-2.83" /><path d="m14.34 4.34 2.83 2.83" /><path d="m12.42 11.17 2.83 2.83" /></svg>
                                </div>
                                <div className="text-xs font-bold text-blue-400 tracking-[0.3em] uppercase mb-2">Neural Core v2.0</div>
                                <div className="text-2xl font-bold text-white mb-4">ML Insights Engine</div>
                                <div className="flex gap-2">
                                    <div className="h-1 w-8 bg-blue-500 rounded-full animate-pulse"></div>
                                    <div className="h-1 w-4 bg-blue-500/40 rounded-full"></div>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                                </div>
                            </div>

                            {/* Floating Data Points */}
                            <div className="absolute top-0 right-10 glass-card px-4 py-3 rounded-2xl animate-bounce duration-[3000ms] border border-white/5">
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Latency</div>
                                <div className="text-blue-400 font-black">140ms</div>
                            </div>
                            <div className="absolute bottom-10 left-0 glass-card px-4 py-3 rounded-2xl animate-bounce duration-[4000ms] border border-white/5">
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Accuracy</div>
                                <div className="text-emerald-400 font-black">99.8%</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AISpotlight;
