import React from "react";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "../data";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact-section"
      className="bg-[#050509] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
          {/* Left: Heading, Description & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-black leading-none tracking-tight">
              <span className="block text-[40px] sm:text-[54px] md:text-[64px] lg:text-[72px] text-white">
                LET&apos;S WORK
              </span>
              <span className="block text-[40px] sm:text-[54px] md:text-[64px] lg:text-[72px] text-slate-400">
                TOGETHER
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
              Have a product, website or idea you want to ship? I help early-stage SaaS founders with UX, UI, web design and front-end execution from idea to live experience.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide uppercase bg-[#6366F1] hover:bg-[#4f46e5] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(99,102,241,0.2)]"
              >
                Get in touch
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Right: Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6 text-xs sm:text-sm lg:pt-6">
            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="text-slate-300 font-semibold tracking-[0.16em] uppercase text-xs">
                Quick Links
              </h3>
              <nav className="space-y-2.5 text-slate-400 flex flex-col">
                <FooterLink href="#about" label="About" />
                <FooterLink href="#services" label="Services" />
                <FooterLink href="#skills" label="Skills" />
                <FooterLink href="#stack" label="Tool Stack" />
                <FooterLink href="#gallery" label="Visuals" />
              </nav>
            </div>

            {/* Portfolio */}
            <div className="space-y-4">
              <h3 className="text-slate-300 font-semibold tracking-[0.16em] uppercase text-xs">
                Work
              </h3>
              <nav className="space-y-2.5 text-slate-400 flex flex-col">
                <FooterLink href="#projects" label="Selected Projects" />
                <FooterLink href="#work-details" label="Case Studies" />
                <FooterLink href="#testimonials" label="Testimonials" />
              </nav>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-slate-300 font-semibold tracking-[0.16em] uppercase text-xs">
                Social
              </h3>
              <nav className="space-y-2.5 text-slate-400 flex flex-col">
                <FooterLink href={personalInfo.linkedin} label="LinkedIn" external />
                <FooterLink href={`mailto:${personalInfo.email}`} label="Email" />
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-8 text-center text-[11px] sm:text-xs text-slate-400">
          <p>© {year} Udit Bhatnagar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label, external = false }) => {
  const base =
    "inline-flex items-center gap-1 hover:text-white transition-colors w-fit";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={base}>
        {label}
      </a>
    );
  }
  return (
    <a href={href} className={base}>
      {label}
    </a>
  );
};

export default Contact;
