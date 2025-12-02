"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Attendify – Smart Attendance System",
    description:
      "A MERN-based attendance management app with JWT auth, dashboards, realtime stats and clean UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    img: "/attendify.png", // replace with your own image
    live: "https://attendifyattendkarle.vercel.app/",
    github: "https://github.com/abhi1913ek-79ri/Attendify",
  },
  {
    title: "QR Code Generator & Scanner",
    description:
      "A simple QR generator and scanner tool built with React. Supports real-time QR preview.",
    tech: ["React", "HTML5 API"],
    img: "/Qr.png",
    live: "https://qr-code-hc6s.vercel.app/",
    github: "https://github.com/abhi1913ek-79ri/qr-code",
  },
  {
    title: "Text Utility App",
    description:
      "A React app that provides text formatting, counting, and transformation utilities.",
    tech: ["React", "JavaScript", "CSS"],
    img: "/textUtils.png",
    live: "https://66c84999882f3d46dfc736b0--gleaming-crepe-2c0372.netlify.app/",
    github: "https://github.com/abhi1913ek-79ri/textutils",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen px-6 md:px-20 py-20 bg-gradient-to-b from-white to-blue-50/10 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-slate-900 text-center mb-10"
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="
              bg-white/60 backdrop-blur-xl 
              border border-white/60 
              rounded-2xl shadow-md 
              hover:shadow-xl 
              transition 
              p-4
            "
          >
            <div className="relative w-full h-40 rounded-xl overflow-hidden shadow">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mt-4">
              {p.title}
            </h3>

            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
              {p.description}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-5">
              <a
                href={p.live}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm shadow hover:scale-105 transition"
              >
                <ExternalLink size={16} /> Live
              </a>

              <a
                href={p.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm shadow hover:scale-105 transition"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
