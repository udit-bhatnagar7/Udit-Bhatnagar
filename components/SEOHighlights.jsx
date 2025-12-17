import React from "react";
import { seoHighlightsData } from "../data";

const SEOHighlights = () => {
  return (
    <section
      id="seo-impact"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute -top-32 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-4rem] w-80 h-80 bg-emerald-500/12 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.26em] text-blue-400 uppercase mb-3">
            SEO & Performance
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-3 text-white">
            Results beyond the visuals.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            My goal is to design interfaces that are not only beautiful, but
            measurable—driving organic traffic, engagement and conversions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {seoHighlightsData.map((stat, index) => {
            const isPrimary = index === 0; // highlight first stat a bit more

            return (
              <article
                key={index}
                className={[
                  "relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/3 to-transparent",
                  "hover:from-blue-500/40 hover:via-purple-500/30 hover:to-transparent transition-all duration-300",
                ].join(" ")}
              >
                <div className="h-full bg-black/80 rounded-2xl px-6 py-6 flex flex-col justify-between border border-white/5 hover:border-white/15 transition-all duration-300 shadow-[0_18px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.95)] hover:-translate-y-1.5">
                  {/* label */}
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400 mb-3">
                    {stat.label}
                  </p>

                  {/* value */}
                  <p
                    className={
                      "mb-3 font-bold text-white " +
                      (isPrimary
                        ? "text-4xl sm:text-[40px]"
                        : "text-3xl sm:text-[32px]")
                    }
                  >
                    {stat.value}
                  </p>

                  {/* subtle accent line */}
                  <div className="flex items-center gap-1 mb-3">
                    <span className="w-7 h-[2px] rounded-full bg-blue-400/80" />
                    <span className="w-4 h-[2px] rounded-full bg-slate-500/70" />
                  </div>

                  {/* description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SEOHighlights;
