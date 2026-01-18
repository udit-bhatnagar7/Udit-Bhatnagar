import React, { useEffect, useState } from "react";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled ? "bg-[#050509]/95 border-b border-white/10 backdrop-blur-md py-3" : "bg-transparent border-b border-transparent py-3"}
  `;

  const linkBase = "text-sm font-medium transition-colors";
  const linkColor = "text-slate-200 hover:text-white";

  return (
    <nav id="navbar" className={navClasses}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="flex text-white gap-2 items-center">
          <img
            src="/logo/uditbhatnagar.png"
            alt="Logo"
            width="50"
            height="46"
            className="h-[46px] w-auto rounded-xl"
          />
          <div className="flex flex-col">
            <span className="text-lg font-medium ">UDIT BHATNAGAR</span>
            <small className="text-xs">UI/UX & Web Designer</small>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`${linkBase} ${linkColor}`}>About</a>
          <a href="#services" className={`${linkBase} ${linkColor}`}>Services</a>
          <a href="#skills" className={`${linkBase} ${linkColor}`}>Skills</a>
          <a href="#work" className={`${linkBase} ${linkColor}`}>Work</a>
          <a href="#testimonials" className={`${linkBase} ${linkColor}`}>Testimonials</a>
          <a href="#contact" className={`${linkBase} ${linkColor}`}>Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-100 focus:outline-none"
        >
          {isOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#050509]/98 border-t border-white/10 shadow-lg py-6 px-6 flex flex-col space-y-4">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
