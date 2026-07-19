import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { m } from "framer-motion";
import { MousePointer, PenTool, Type, HelpCircle } from "lucide-react";

export default function FigmaWidget({ isActive }) {
  const [activeButton, setActiveButton] = useState("primary");
  const [cursorPos, setCursorPos] = useState({ x: 30, y: 70 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const sequence = [
      { name: "primary", x: 85, y: 22 },
      { name: "secondary", x: 85, y: 48 },
      { name: "outline", x: 85, y: 74 },
      { name: "ghost", x: 85, y: 100 }
    ];

    let step = 0;
    const interval = setInterval(() => {
      const nextStep = sequence[step % sequence.length];
      
      // Move cursor to button
      setCursorPos({ x: nextStep.x, y: nextStep.y });
      
      // Simulate click
      setTimeout(() => {
        setIsClicking(true);
        setActiveButton(nextStep.name);
        
        setTimeout(() => {
          setIsClicking(false);
        }, 150);
      }, 600);

      step++;
    }, 1800);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="w-full flex gap-3 relative overflow-hidden mt-3 p-3 bg-white/[0.02] border border-white/5 rounded-2xl h-36">
      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#ffffff_1px,_transparent_0)] bg-[length:12px_12px]" />
      </div>

      {/* Figma Left Toolbar */}
      <div className="w-9 h-full bg-slate-950/80 border border-white/10 rounded-xl flex flex-col items-center justify-around py-2 z-10 shadow-lg">
        <div className="p-1 rounded-md bg-blue-500/20 text-blue-400">
          <MousePointer size={11} className="-rotate-90 fill-blue-400/20" />
        </div>
        <div className="p-1 rounded-md text-slate-500 hover:text-slate-300">
          <PenTool size={11} />
        </div>
        <div className="p-1 rounded-md text-slate-500 hover:text-slate-300">
          <Type size={11} />
        </div>
        <div className="p-1 rounded-md text-slate-500 hover:text-slate-300">
          <HelpCircle size={11} />
        </div>
      </div>

      {/* Button Variants Canvas (Right side) */}
      <div className="flex-1 h-full flex flex-col gap-1.5 justify-center relative px-2 border border-white/5 rounded-xl bg-slate-950/40 overflow-hidden">
        {/* Primary Button */}
        <div
          className={`px-3 py-1.5 text-[9px] font-semibold rounded-md text-center transition-all duration-200 border w-24 mx-auto ${
            activeButton === "primary"
              ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25 scale-105"
              : "bg-blue-500/10 border-blue-500/20 text-blue-400"
          }`}
        >
          Primary
        </div>

        {/* Secondary Button */}
        <div
          className={`px-3 py-1.5 text-[9px] font-semibold rounded-md text-center transition-all duration-200 border w-24 mx-auto ${
            activeButton === "secondary"
              ? "bg-slate-800 border-slate-700 text-white scale-105 shadow-md"
              : "bg-slate-900/40 border-white/5 text-slate-400"
          }`}
        >
          Secondary
        </div>

        {/* Outline Button */}
        <div
          className={`px-3 py-1.5 text-[9px] font-semibold rounded-md text-center transition-all duration-200 border w-24 mx-auto ${
            activeButton === "outline"
              ? "border-blue-400 text-blue-400 bg-blue-500/5 scale-105"
              : "border-white/10 text-slate-400 bg-transparent"
          }`}
        >
          Outline
        </div>

        {/* Ghost Button */}
        <div
          className={`px-3 py-1.5 text-[9px] font-semibold rounded-md text-center transition-all duration-200 w-24 mx-auto ${
            activeButton === "ghost"
              ? "text-white bg-white/5 scale-105"
              : "text-slate-500 hover:text-slate-400"
          }`}
        >
          Ghost
        </div>

        {/* Animated Mouse Cursor */}
        <div
          className="absolute z-30 pointer-events-none transition-all duration-700 ease-out"
          style={{
            left: `${cursorPos.x}%`,
            top: `${cursorPos.y}%`,
            transform: "translate(-3px, -3px)"
          }}
        >
          <MousePointer
            size={12}
            className={`-rotate-90 fill-white text-slate-950 filter drop-shadow-md transition-transform duration-150 ${
              isClicking ? "scale-75" : "scale-100"
            }`}
          />
          {isClicking && (
            <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-blue-500/40 animate-ping pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
}
