import React from "react";
import { Mail, Linkedin, Phone, ArrowRight } from "lucide-react";
import { personalInfo } from "../data";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#050509] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden"
    >
   
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        {/* TOP CTA STRIP */}
        <section className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: big text */}
          <div>
            <h2 className="font-black leading-none tracking-tight text-left">
              <span className="block text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px]">
                LET&apos;S WORK
              </span>
              <span className="block text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-slate-200">
                TOGETHER
              </span>
            </h2>
          </div>

          {/* Right: copy + CTA */}
          <div className="flex flex-col items-start lg:items-end gap-8 text-left lg:text-right">
            <p className="text-sm sm:text-base text-slate-300 max-w-md">
              Have a product, website or idea you want to ship? I help teams
              with UX, UI, web design and front-end execution—from idea to live
              experience.
            </p>

            <div className="flex flex-col items-stretch lg:items-end gap-4 w-full max-w-md">
              {/* Primary CTA */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-[#ff4b2b] to-[#ff7b00] hover:from-[#ff5b3a] hover:to-[#ff8b1a] transition-all shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
              >
                Get in touch
                <ArrowRight size={18} className="ml-2" />
              </a>

              {/* Quick contact row */}
              <div className="flex flex-col sm:flex-row gap-4 text-xs sm:text-sm text-slate-300">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} />
                  <span>{personalInfo.phone}</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM FOOTER */}
        <section className="border-t border-white/10 pt-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: big name in background */}
            <div className="relative overflow-hidden">
              <div className="relative">
                <span className="block text-[40px] md:text-[72px] lg:text-[96px] font-black tracking-tight text-slate-800 leading-none select-none">
                  Udit
                </span>
                <span className="block -mt-3 text-[40px] md:text-[72px] lg:text-[96px] font-black tracking-tight text-slate-800 leading-none select-none">
                  Bhatnagar
                </span>
              </div>
              <p className="mt-6 text-xs sm:text-sm text-slate-400 max-w-sm">
                Designing thoughtful, conversion-focused interfaces for web and
                product teams—blending UX, visual design and SEO-ready builds.
              </p>
            </div>

            {/* Right: link columns */}
            <div className="grid sm:grid-cols-3 gap-8 text-xs sm:text-sm">
              {/* Quick links */}
              <div className="space-y-3">
                <h4 className="text-slate-300 font-semibold tracking-[0.16em] uppercase">
                  Quick Links
                </h4>
                <nav className="space-y-1.5 text-slate-400 flex flex-col">
                  <FooterLink href="#about" label="About" />
                  <FooterLink href="#services" label="Services" />
                  <FooterLink href="#skills" label="Skills" />
                  <FooterLink href="#stack" label="Tool Stack" />
                  <FooterLink href="#gallery" label="Visuals" />
                </nav>
              </div>

              {/* Portfolio */}
              <div className="space-y-3">
                <h4 className="text-slate-300 font-semibold tracking-[0.16em] uppercase">
                  Work
                </h4>
                <nav className="space-y-1.5 text-slate-400 flex flex-col">
                  <FooterLink href="#projects" label="Selected Projects" />
                  <FooterLink href="#work-details" label="Case Studies" />
                  <FooterLink href="#testimonials" label="Testimonials" />
                </nav>
              </div>

              {/* Social */}
              <div className="space-y-3">
                <h4 className="text-slate-300 font-semibold tracking-[0.16em] uppercase">
                  Social
                </h4>
                <nav className="space-y-1.5 text-slate-400 flex flex-col">
                  <FooterLink href={personalInfo.linkedin} label="LinkedIn" external />
                  <FooterLink href={`mailto:${personalInfo.email}`} label="Email" />
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 pt-6 border-t border-white/5 text-center text-[11px] sm:text-xs text-slate-500">
            <p>© {year} Udit Bhatnagar. All rights reserved.</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label, external = false }) => {
  const base =
    "inline-flex items-center gap-1 hover:text-white transition-colors";
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
