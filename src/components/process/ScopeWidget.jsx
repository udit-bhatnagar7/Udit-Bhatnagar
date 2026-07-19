import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { m, AnimatePresence } from "framer-motion";

export default function ScopeWidget({ isActive }) {
  const [hoverIndex, setHoverIndex] = useState(2);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setHoverIndex((prev) => (prev === 2 ? 3 : prev === 3 ? 1 : 2));
    }, 2000);
    return () => clearInterval(interval);
  }, [isActive]);

  const chartData = [
    { x: 10, y: 35, visitors: "4,200", views: "3,100", label: "Oct 1" },
    { x: 30, y: 15, visitors: "7,800", views: "5,400", label: "Oct 5" },
    { x: 50, y: 28, visitors: "9,706", views: "6,816", label: "Oct 15" },
    { x: 70, y: 10, visitors: "12,400", views: "9,100", label: "Oct 20" },
    { x: 90, y: 22, visitors: "15,800", views: "11,500", label: "Oct 25" },
  ];

  return (
    <div className="w-full flex flex-col gap-2 relative overflow-hidden mt-3 p-3 bg-white/[0.02] border border-white/5 rounded-2xl h-36">
      {/* Light Mode Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.03]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#ffffff_1px,_transparent_0)] bg-[length:12px_12px]" />
      </div>

      {/* Floating Tooltip Card */}
      <div className="absolute top-2 left-4 z-20 px-2.5 py-1.5 rounded-xl bg-slate-950/90 border border-white/10 backdrop-blur-md shadow-xl text-left" style={{ left: `${chartData[hoverIndex].x - 10}%` }}>
        <span className="text-[7.5px] font-bold text-slate-500 block mb-0.5 uppercase tracking-wide">
          {chartData[hoverIndex].label}, 2026
        </span>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="text-[9px] text-slate-300 font-semibold">
              Visitors: <span className="text-white font-bold">{chartData[hoverIndex].visitors}</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span className="text-[9px] text-slate-300 font-semibold">
              Pageviews: <span className="text-white font-bold">{chartData[hoverIndex].views}</span>
            </span>
          </div>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="w-full h-full flex items-end justify-center relative mt-4">
        <svg className="w-full h-16 overflow-visible" viewBox="0 0 100 40">
          <defs>
            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

          {/* Area Path */}
          <path
            d="M 10 35 L 30 15 L 50 28 L 70 10 L 90 22 L 90 40 L 10 40 Z"
            fill="url(#chartGlow)"
          />

          {/* Line 1 (Visitors) */}
          <path
            d="M 10 35 L 30 15 L 50 28 L 70 10 L 90 22"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.25"
            strokeLinecap="round"
          />

          {/* Line 2 (Pageviews) */}
          <path
            d="M 10 38 L 30 20 L 50 32 L 70 15 L 90 28"
            fill="none"
            stroke="#6366f1"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Dots */}
          {chartData.map((d, i) => (
            <g key={i}>
              <circle
                cx={d.x}
                cy={d.y}
                r={hoverIndex === i ? 2.5 : 1.5}
                fill={hoverIndex === i ? "#fff" : "#3b82f6"}
                stroke={hoverIndex === i ? "#3b82f6" : "rgba(0,0,0,0.5)"}
                strokeWidth="0.5"
                className="transition-all duration-200"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
