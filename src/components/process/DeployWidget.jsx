import React from "react";
// eslint-disable-next-line no-unused-vars
import { m } from "framer-motion";
import { MessageSquare, ArrowUpRight } from "lucide-react";

// eslint-disable-next-line no-unused-vars
export default function DeployWidget({ isActive }) {

  return (
    <div className="w-full flex flex-col gap-2 relative overflow-hidden mt-3 p-3 bg-white/[0.02] border border-white/5 rounded-2xl h-36">
      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#ffffff_1px,_transparent_0)] bg-[length:12px_12px]" />
      </div>

      {/* Floating Notification Message Bubble */}
      <div className="absolute top-2 left-3 right-3 bg-slate-950/90 border border-white/10 backdrop-blur-md p-1.5 rounded-lg flex items-center justify-between z-20 shadow-lg transition-all duration-300">
        <div className="flex items-center gap-1.5 text-[8px] font-medium text-slate-300">
          <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <MessageSquare size={8} />
          </div>
          <span>Client: Ready for review!</span>
        </div>
        <span className="text-[7.5px] text-slate-500 font-mono">Just now</span>
      </div>

      {/* Main Agency/Framer-style showcase card layout */}
      <div className="flex-1 mt-6 border border-white/5 rounded-lg bg-slate-950/40 p-2 text-left flex flex-col justify-between overflow-hidden relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Fake Avatar */}
            <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[8px] font-bold text-white overflow-hidden">
              <img
                src="/images/hero-profile.jpg"
                alt="Mini Profile Avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div>
              <h5 className="text-[9px] font-bold text-white leading-none">Udit Bhatnagar</h5>
              <span className="text-[7.5px] text-slate-500">New Delhi, IN</span>
            </div>
          </div>

          {/* Premium Micro-Badges */}
          <div className="flex gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[7.5px] font-bold flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
            <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[7.5px] font-bold">
              REACT
            </span>
            <span className="px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 text-[7.5px] font-bold">
              TAILWIND
            </span>
          </div>
        </div>

        {/* Website mockup preview thumbnails */}
        <div className="grid grid-cols-3 gap-1.5 mt-2">
          <div className="h-9 bg-slate-900 border border-white/5 rounded flex items-center justify-center relative overflow-hidden group">
            <div className="w-5 h-1 bg-white/20 rounded-full" />
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="h-9 bg-slate-900 border border-white/5 rounded flex items-center justify-center relative overflow-hidden group">
            <div className="w-3 h-1 bg-white/20 rounded-full" />
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="h-9 bg-slate-900 border border-white/5 rounded flex items-center justify-center relative overflow-hidden group">
            <ArrowUpRight size={10} className="text-slate-600 group-hover:text-white transition-colors" />
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}
