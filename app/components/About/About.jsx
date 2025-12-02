"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="
    w-full 
    h-full
    flex 
    flex-col 
    justify-center 
    items-center
    px-6 md:px-20 
    md:pt-0
    pt-10
    
    
  "
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-slate-900 text-center mb-12"
      >
        About <span className="text-blue-600">Me</span>
      </motion.h2>

      {/* Main Content - CENTERED WRAPPER */}
      <div className="
      w-full 
      max-w-6xl 
      mx-auto 
      flex 
      flex-col 
      md:flex-row 
      items-center 
      justify-center 
      gap-16
  ">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
        relative 
        w-64 h-64 
        md:w-72 md:h-72 
        rounded-3xl 
        overflow-hidden 
        shadow-xl
      "
        >
          <Image
            src="/profile.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-center md:text-left"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Hi, I'm Abhishek Kumar Giri 👋
          </h3>

          <p className="text-lg text-slate-700 mb-4 leading-relaxed text-justify">
            I'm a B.Tech IT student at USICT, GGSIPU, and currently learning Full-Stack Web Development
            using the MERN stack. I enjoy turning ideas into working web applications and improving
            my skills through real-world projects.
          </p>

          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            I work with React, Next.js, Node.js, MongoDB, and Python, and I’m also exploring AI & ML
            basics to understand how intelligent systems work.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            My goal is simple — keep learning, keep building, and become a strong developer who can create
            meaningful digital experiences.
          </p>

          <a
            href="#contact"
            className="
          inline-block 
          mt-3 
          px-6 py-3 
          rounded-xl 
          bg-blue-600 
          text-white 
          font-medium 
          shadow-lg 
          hover:scale-105 
          transition-transform
        "
          >
            Let’s Connect
          </a>
        </motion.div>
      </div>
    </section>

  );
}
