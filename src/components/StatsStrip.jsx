import React from "react";

const statsData = [
  {
    id: "experience",
    value: "3+ Years",
    label: "Dev Experience"
  },
  {
    id: "products",
    value: "5+ Prods",
    label: "Designed & Shipped"
  },
  {
    id: "pipeline",
    value: "1 Person",
    label: "End-to-End Dev"
  }
];

const StatsStrip = () => {
  return (
    <div className="w-full mt-12 grid grid-cols-3 gap-4 sm:gap-6 text-left border-t border-white/5 pt-8">
      {statsData.map((stat) => (
        <div key={stat.id} className="flex flex-col items-start">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 whitespace-nowrap">
            {stat.value}
          </h3>

          <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 leading-tight">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;
