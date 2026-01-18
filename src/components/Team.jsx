import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Raj Sharma",
    role: "Full-Stack Developer",
    skills: ["Next.js", "Node.js", "MongoDB", "API Systems"],
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    linkedin: "#",
  },
  {
    name: "Ishan Verma",
    role: "Frontend Developer",
    skills: ["React", "TailwindCSS", "UI Animation"],
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
  },
  {
    name: "Priya Mehta",
    role: "Graphic Designer",
    skills: ["Branding", "Illustration", "Adobe Suite"],
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
  },
  {
    name: "Amit Gupta",
    role: "SEO Specialist",
    skills: ["On-Page SEO", "Technical SEO", "Keyword Ranking"],
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="py-24 bg-[#050509] border-t border-white/10 relative overflow-hidden"
    >
      {/* glowing background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050509] to-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-blue-400 mb-3">
            Team
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            The people behind the magic
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4">
            Scroll → to meet each member
          </p>
        </motion.div>
        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#06070d] border border-white/10 rounded-[26px] shadow-[0_18px_60px_rgba(0,0,0,0.65)] overflow-hidden"
            >
              {/* image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={member.img}
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300" />
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>

                <p className="text-blue-300 text-sm font-semibold uppercase tracking-wide">
                  {member.role}
                </p>

                {/* skill tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full text-[10px] uppercase font-medium bg-white/5 border border-white/10 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* footer line */}
                <div className="mt-6 border-t border-white/10 pt-4 flex justify-between items-center">
                  <p className="text-xs text-slate-400">
                    Experience: <span className="text-slate-200">3–7 yrs</span>
                  </p>

                  <a
                    href={member.linkedin}
                    className="p-2 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors"
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <Linkedin size={16} className="text-blue-300" />
                  </a>
                </div>
              </div>

              {/* hover highlight ring */}
              <div className="absolute inset-0 rounded-[26px] border border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
