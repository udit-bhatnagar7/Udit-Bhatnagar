import React, { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data";

const HeroAvatar = () => {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 12;
    const y = -(e.clientY - rect.top - rect.height / 2) / 12;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const avatarStyle = {
    transformStyle: "preserve-3d",
    transform: isHovered
      ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.01, 1.01, 1.01)`
      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: isHovered ? "none" : "transform 0.5s ease"
  };

  const innerImageStyle = {
    transform: "translateZ(10px)"
  };

  const badgeStyle = {
    transform: "translateZ(35px)"
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={avatarStyle}
      className="relative w-full max-w-[380px] aspect-[4/5] mx-auto rounded-[2rem] overflow-hidden border border-white/10 bg-[#0d0d15]/40 transition-transform duration-300 cursor-pointer select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),rgba(99,102,241,0.05)_50%,transparent_70%)] blur-2xl -z-10" />

      {/* Portrait Image */}
      <img
        src={personalInfo.photoUrl || "/images/udit-profile.jpg"}
        alt={`${personalInfo.name} – UI/UX & Web Designer`}
        width="380"
        height="475"
        fetchpriority="high"
        style={innerImageStyle}
        className="w-full h-full object-cover transition-transform duration-300"
      />

      {/* Floating Glassmorphic Status Overlay */}
      <div 
        style={badgeStyle}
        className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl flex justify-between items-center z-20"
      >
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">
            Status
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Available for projects
          </h4>
          <p className="text-[10px] sm:text-[11px] text-slate-300">
            Share your ideas, and let's ship it.
          </p>
        </div>
        
        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-md hover:scale-105 transition-transform duration-300 flex-shrink-0 ml-3">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default HeroAvatar;
