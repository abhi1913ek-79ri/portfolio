"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-white via-blue-50/20 to-blue-100/40 pt-20 pb-10 overflow-hidden">

      {/* BACKGROUND WAVES */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute w-[180%] h-40 bg-blue-500/20 rounded-full blur-3xl top-10 left-[-40%]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[160%] h-32 bg-blue-400/20 rounded-full blur-3xl bottom-10 left-[-30%]"
          animate={{ y: [20, 0, 20] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-blue-700">Abhishek Giri</h2>
          <p className="text-slate-700 mt-3 leading-relaxed">
            Passionate about building beautiful, functional and interactive web experiences.
            Always learning. Always improving. 🚀
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://github.com/abhi1913ek-79ri"
              target="_blank"
              className="p-2 rounded-full bg-white/60 backdrop-blur border border-blue-200 shadow hover:shadow-blue-300 hover:bg-blue-600 hover:text-white transition"
            >
              <Github size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://linkedin.com/in/abhishek-kumar-giri-abhi1913ek-79ri"
              target="_blank"
              className="p-2 rounded-full bg-white/60 backdrop-blur border border-blue-200 shadow hover:shadow-blue-300 hover:bg-blue-600 hover:text-white transition"
            >
              <Linkedin size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="mailto:abhishek@example.com"
              className="p-2 rounded-full bg-white/60 backdrop-blur border border-blue-200 shadow hover:shadow-blue-300 hover:bg-blue-600 hover:text-white transition"
            >
              <Mail size={22} />
            </motion.a>
          </div>
        </motion.div>

        {/* CENTER COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Quick Links</h3>

          <div className="flex flex-col gap-3 text-slate-700 text-sm">
            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ x: 6, color: "#2563eb" }}
                className="transition cursor-pointer"
              >
                → {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Let's Work Together</h3>
          <p className="text-slate-700 text-sm mb-4">
            Open for internships, collaborations and interesting development work.
            Drop a message anytime!
          </p>

          <Link
            href="#contact"
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white shadow hover:scale-105 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* COPYRIGHT LINE */}
      <div className="relative z-10 mt-12 pt-6 border-t border-blue-200/40 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Abhishek Kumar Giri — All Rights Reserved.
      </div>
    </footer>
  );
}
