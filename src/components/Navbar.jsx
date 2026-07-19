import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

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
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b
    ${scrolled ? "bg-[#050509]/20 border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-md py-3" : "bg-transparent border-transparent py-5"}
  `;

  const linkBase = "text-sm font-medium transition-colors";
  const linkColor = "text-slate-200 hover:text-white";

  return (
    <header>
      <nav id="navbar" className={navClasses}>
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6">

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
            <a href="#faq" className={`${linkBase} ${linkColor}`}>FAQ</a>
            <a href="#contact-section" className={`${linkBase} ${linkColor}`}>Contact</a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
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
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-[#050509]/98 border-t border-white/10 shadow-lg py-6 px-6 flex flex-col space-y-4">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
            <a href="#contact-section" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
