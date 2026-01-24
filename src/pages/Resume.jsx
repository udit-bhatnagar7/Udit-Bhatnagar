import React, { useRef } from 'react';
import {
    Download,
    Share2,
    Mail,
    Phone,
    Linkedin,
    MapPin,
    ExternalLink,
    Award,
    Briefcase,
    Code2,
    Layout,
    Globe,
    Star,
    Zap,
    Palette
} from 'lucide-react';
import { personalInfo } from '../data';

const Resume = () => {
    const resumeRef = useRef(null);



    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Udit Bhatnagar - Resume',
                    text: 'Check out Udit Bhatnagar\'s resume',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    // Exact data from User's Resume
    const experience = [
        {
            role: "Freelance — UI/UX & Web Designer",
            company: "Self-Employed",
            duration: "July 2024 – Present",
            description: "Tech Stack: Figma, HTML, CSS, Tailwind CSS, Zoho, UX Pilot, Vibe coding"
        },
        {
            role: "UI/UX & Web Designer",
            company: "Likeme",
            duration: "July 2023 – Present",
            description: "Tech Stack: Figma, HTML, CSS, Bootstrap, jQuery"
        },
        {
            role: "UI/UX Designer",
            company: "BMIIT",
            duration: "Jan 2021 – July 2023",
            description: "Tech Stack: Figma, Elementor, HTML, CSS"
        }
    ];

    const projects = [
        {
            title: "GoldTips Hair",
            role: "UI/UX & Web Designer",
            desc: "Designed and customized eCommerce site on Zoho Commerce using HTML, CSS, and jQuery.",
            link: "https://goldtipshair.com"
        },
        {
            title: "Zaucto",
            role: "UI/UX & Web Designer",
            desc: "Designed and developed the full site using Figma, HTML, Tailwind CSS."
        },
        {
            title: "Darbaan (App)",
            role: "UI/UX Designer, UX Researcher",
            desc: "Leading app interface design using Figma."
        },
        {
            title: "Likeme",
            role: "UI/UX & Web Designer",
            desc: "Ongoing design/dev using Figma, Bootstrap, and jQuery.",
            link: "https://likeme.co.in"
        },
        {
            title: "Hot Property Bazaar",
            role: "UI/UX & Web Designer",
            desc: "Real estate platform designed with Figma, Bootstrap, and jQuery.",
            link: "https://hotpropertybazaar.com"
        },
        {
            title: "Pragati CRM",
            role: "UI/UX & Web Designer",
            desc: "Developed and implemented CRM UI using Figma and Bootstrap.",
            link: "https://pragati.likeme.co.in"
        },
        {
            title: "HRM Software",
            role: "UI/UX & Web Designer",
            desc: "Created HR management UI from Figma to Bootstrap.",
            link: "https://hrmsoftware.in"
        },
        {
            title: "Vikasa",
            role: "UI/UX Designer",
            desc: "Converted Figma designs into a WordPress implementation.",
            link: "https://vikasa.com"
        },
        {
            title: "The Thaiger Deals (App)",
            role: "UI/UX Designer",
            desc: "Prototyped intuitive UI in Figma to enhance UX."
        },
        {
            title: "The Thaiger Property",
            role: "UI/UX Designer",
            desc: "Designed a brand-aligned property website in Figma.",
            link: ""
        },
        {
            title: "The Thaiger News",
            role: "UI/UX Designer",
            desc: "Built a content-focused interface using Photoshop.",
            link: ""
        }
    ];

    const areasOfExpertise = [
        "User Experience Design",
        "Wireframing & Prototyping",
        "Visual & Interaction Design",
        "Responsive/Adaptive UI",
        "HTML5, CSS3, jQuery",
        "UX Research"
    ];

    const tools = {
        design: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "Canva"],
        frameworks: ["Tailwind CSS", "Bootstrap"],
        productivity: ["Notion", "UX Pilot", "ChatGPT", "Builder.io", "Lovable"]
    };

    const education = [
        {
            degree: "Master of Computer Applications (MCA)",
            school: "Kurukshetra University",
            year: "2023"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "Kurukshetra University",
            year: "2022"
        }
    ];

    const languages = ["English", "Hindi", "Punjabi"];
    const hobbies = ["Travel", "Photography", "Collecting design inspiration"];

    return (
        <div className="min-h-screen bg-[#050509] text-slate-300 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">

            {/* Floating Actions */}
            <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50 print:hidden">
                <a
                    href="/Resume/Udit%20Bhatnagar.pdf"
                    download="Udit_Bhatnagar_Resume.pdf"
                    className="p-4 bg-white hover:bg-slate-200 text-black rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
                    title="Download Resume"
                >
                    <Download size={24} />
                </a>
                <button
                    onClick={handleShare}
                    className="p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-110 active:scale-95"
                    title="Share Resume"
                >
                    <Share2 size={24} />
                </button>
            </div>

            <div
                ref={resumeRef}
                className="max-w-[1000px] mx-auto bg-[#0a0a12] border border-white/5 shadow-2xl rounded-3xl overflow-hidden print:shadow-none print:border-none print:rounded-none print:bg-white print:text-black"
            >

                {/* Breadcrumb / Back Button */}
                <div className="absolute top-6 left-6 z-20 print:hidden">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 hover:bg-black/40"
                    >
                        <span className="text-lg leading-none pb-1">←</span>
                        <span className="text-sm font-medium">Back to Home</span>
                    </a>
                </div>

                {/* Header / Hero */}
                <header className="relative bg-[#0f0f1a] p-8 md:p-12 print:bg-white print:p-0 print:border-b print:border-black/10">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none print:hidden">
                        <Code2 size={400} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                        {/* Avatar */}
                        <div className="relative group shrink-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl relative z-10 print:border-slate-200">
                                <img
                                    src={personalInfo.photoUrl}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full -z-10 group-hover:bg-white/10 transition-all print:hidden" />
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight print:text-black">
                                Udit Bhatnagar
                            </h1>
                            <p className="text-lg md:text-xl text-slate-200 font-medium mb-6 print:text-slate-700">
                                UI/UX & Web Designer
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-slate-400 print:text-slate-600">
                                <a href="tel:+917027071704" className="flex items-center gap-2 hover:text-white transition-colors py-1 px-3 bg-white/5 rounded-lg border border-white/5 print:border-slate-200 print:bg-slate-50">
                                    <Phone size={14} className="text-white" />
                                    +91 70270-71704
                                </a>
                                <a href="mailto:uditbhatnagar6@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors py-1 px-3 bg-white/5 rounded-lg border border-white/5 print:border-slate-200 print:bg-slate-50">
                                    <Mail size={14} className="text-white" />
                                    uditbhatnagar6@gmail.com
                                </a>
                                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors py-1 px-3 bg-white/5 rounded-lg border border-white/5 print:hidden">
                                    <Linkedin size={14} className="text-white" />
                                    LinkedIn Profile
                                </a>
                                <div className="flex items-center gap-2 py-1 px-3 bg-white/5 rounded-lg border border-white/5 print:border-slate-200 print:bg-slate-50">
                                    <MapPin size={14} className="text-white" />
                                    India
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Body */}
                <div className="p-8 md:p-12 space-y-12 print:p-0 print:py-8 print:space-y-8">

                    {/* About Me */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 print:text-black">
                            <div className="p-2 bg-white/10 rounded-lg text-white print:text-black print:bg-transparent print:p-0">
                                <Star size={20} />
                            </div>
                            About Me
                        </h2>
                        <p className="leading-relaxed text-slate-300 print:text-slate-600 text-sm md:text-base">
                            Creative and detail-oriented UI/UX & Web Designer with 3+ years of experience designing intuitive, user-first
                            websites and mobile applications. I specialize in building responsive and accessible digital experiences that
                            are optimized for performance, usability, and inclusion. Proficient in Figma, Tailwind CSS, Bootstrap, HTML,
                            CSS, jQuery, and Adobe Creative Suite. I care deeply about creating designs that work for everyone, including
                            those with diverse needs and abilities. I also use modern AI tools like ChatGPT, UX Pilot, and Builder.io to
                            streamline design systems, content workflows, and front-end delivery.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 print:grid-cols-1 print:gap-8">

                        {/* Left Column: Experience & Projects */}
                        <div className="space-y-12 print:space-y-8">

                            {/* Experience */}
                            <section className="print:break-inside-avoid">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 print:text-black">
                                    <div className="p-2 bg-white/10 rounded-lg text-white print:text-black print:bg-transparent print:p-0">
                                        <Briefcase size={20} />
                                    </div>
                                    Professional Experience
                                </h2>

                                <div className="relative border-l-2 border-slate-800 space-y-10 ml-3 print:border-slate-200">
                                    {experience.map((role, idx) => (
                                        <div key={idx} className="relative pl-8">
                                            {/* Timeline Dot */}
                                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a12] border-2 border-white print:bg-white" />

                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                                <h3 className="text-lg font-bold text-white print:text-black">{role.role}</h3>
                                                <span className="text-[10px] font-bold px-2 py-0.5 bg-white/10 text-white rounded border border-white/20 print:bg-slate-100 print:text-slate-700 print:border-slate-200 uppercase tracking-wide">
                                                    {role.duration}
                                                </span>
                                            </div>

                                            <div className="text-sm text-slate-300 font-medium mb-3 flex items-center gap-2 print:text-slate-700">
                                                {role.company}
                                            </div>

                                            <p className="text-sm text-slate-400 font-mono print:text-slate-600 bg-white/5 p-3 rounded-lg border border-white/5 print:bg-slate-50 print:border-slate-200">
                                                {role.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Projects */}
                            <section className="print:break-inside-avoid">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 print:text-black">
                                    <div className="p-2 bg-white/10 rounded-lg text-white print:text-black print:bg-transparent print:p-0">
                                        <Globe size={20} />
                                    </div>
                                    Projects Highlights
                                </h2>
                                <div className="grid gap-3 lg:grid-cols-2 print:grid-cols-2">
                                    {projects.map((project, idx) => (
                                        <div key={idx} className="group p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors print:border-slate-200 print:bg-white print:shadow-sm break-inside-avoid">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-white group-hover:text-white transition-colors print:text-black inline-flex items-center gap-2">
                                                        {project.title}
                                                        {project.link && <ExternalLink size={12} className="opacity-50 print:hidden" />}
                                                    </h4>
                                                    <p className="text-xs text-slate-400 font-medium print:text-slate-700">
                                                        {project.role}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-400 print:text-slate-600 line-clamp-3">
                                                {project.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Skills, Education, etc */}
                        <div className="space-y-10 md:pl-8 md:border-l md:border-white/5 print:border-l-0 print:pl-0 print:space-y-8">

                            {/* Expertise */}
                            <section className="print:break-inside-avoid">
                                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-3 print:text-black">
                                    <div className="p-2 bg-white/10 rounded-lg text-white print:text-black print:bg-transparent print:p-0">
                                        <Zap size={18} />
                                    </div>
                                    Area of Expertise
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {areasOfExpertise.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 w-full mb-1 print:text-slate-700">
                                            <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Tools */}
                            <section className="print:break-inside-avoid">
                                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-3 print:text-black">
                                    <div className="p-2 bg-white/10 rounded-lg text-white print:text-black print:bg-transparent print:p-0">
                                        <Palette size={18} />
                                    </div>
                                    Tools & Platforms
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 print:text-slate-800">Design</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {tools.design.map((t, i) => (
                                                <span key={i} className="text-[11px] px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 print:bg-slate-100 print:text-slate-700 print:border-slate-200">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 print:text-slate-800">Frameworks</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {tools.frameworks.map((t, i) => (
                                                <span key={i} className="text-[11px] px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 print:bg-slate-100 print:text-slate-700 print:border-slate-200">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 print:text-slate-800">Productivity & AI</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {tools.productivity.map((t, i) => (
                                                <span key={i} className="text-[11px] px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 print:bg-slate-100 print:text-slate-700 print:border-slate-200">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Education */}
                            <section className="print:break-inside-avoid">
                                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-3 print:text-black">
                                    <div className="p-2 bg-white/10 rounded-lg text-white print:text-black print:bg-transparent print:p-0">
                                        <Award size={18} />
                                    </div>
                                    Education
                                </h2>
                                <div className="space-y-4">
                                    {education.map((edu, idx) => (
                                        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 print:border-slate-200 print:bg-white">
                                            <div className="text-slate-200 text-xs font-bold mb-1 print:text-slate-700">{edu.year}</div>
                                            <div className="font-bold text-white text-sm mb-1 print:text-black">{edu.degree}</div>
                                            <div className="text-xs text-slate-400 print:text-slate-600">{edu.school}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Languages & Hobbies */}
                            <section className="print:break-inside-avoid pt-4 border-t border-white/10 print:border-slate-200">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Languages</span>
                                        <span className="text-sm text-slate-300 print:text-slate-700">{languages.join(", ")}</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Hobbies</span>
                                        <span className="text-sm text-slate-300 print:text-slate-700">{hobbies.join(", ")}</span>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-[#0f0f1a] p-8 text-center border-t border-white/5 print:border-t print:border-slate-200 print:bg-white print:text-slate-500">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Udit Bhatnagar. All rights reserved.
                    </p>
                </footer>

            </div>

            {/* Print Styles Overrides */}
            <style>{`
        @media print {
          @page { margin: 10mm; size: auto; }
          body { -webkit-print-color-adjust: exact; background: white !important; }
        }
      `}</style>
        </div>
    );
};

export default Resume;
