"use client";
import { motion } from "framer-motion";

// Resume-based categories with % levels
const skills = {
  programming: [
    { name: "C++", level: 90 },
    { name: "C", level: 85 },
    { name: "Python", level: 85 },
  ],
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Next.js", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "Django", level: 40 },
  ],
  databases: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "SQLite", level: 60 },
  ],
  csFundamentals: [
    { name: "DBMS", level: 85 },
    { name: "OOP (C++)", level: 90 },
    { name: "DSA", level: 75 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 60 },
    { name: "Canva", level: 70 },
  ],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Adaptability",
    "Critical Thinking",
  ],
};

// Progress Bars (Development Strengths)
const progressData = [
  { name: "Frontend Development", level: 85 },
  { name: "Backend Development", level: 75 },
  { name: "Database Management", level: 70 },
  { name: "CS Fundamentals (DBMS + OOP + DSA)", level: 82 },
];

// Badge with % + glow hover effect
function Badge({ name, level }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.08 }}
      className="
        px-4 py-1.5 flex items-center gap-2 
        bg-blue-50 text-blue-700 rounded-xl shadow-sm 
        border border-blue-200 hover:border-blue-500 
        hover:shadow-blue-300 transition-all cursor-pointer
      "
    >
      <span className="font-medium text-sm">{name}</span>
      <span className="text-xs px-2 py-0.5 bg-blue-600 text-white rounded-full">
        {level}%
      </span>
    </motion.div>
  );
}

// Progress Bar Component
function ProgressBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full"
    >
      <div className="flex justify-between text-sm font-medium mb-1">
        <span className="text-slate-900">{name}</span>
        <span className="text-slate-600">{level}%</span>
      </div>

      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen px-6 md:px-20 py-24 
      bg-gradient-to-b from-white to-blue-50/10 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-4xl font-bold text-center text-slate-900 mb-10"
      >
        Skills <span className="text-blue-600">Overview</span>
      </motion.h2>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ====================== CARD 1 ====================== */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="
            p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-md 
            border border-white/60 hover:border-blue-400 hover:shadow-blue-200
            transition-all
          "
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Technical Skills
          </h3>

          {/* Programming */}
          <div className="mb-4">
            <p className="font-medium text-slate-800 mb-2">Programming Languages</p>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((s) => (
                <Badge key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="mb-4">
            <p className="font-medium text-slate-800 mb-2">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((s) => (
                <Badge key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-4">
            <p className="font-medium text-slate-800 mb-2">Backend</p>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((s) => (
                <Badge key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mb-4">
            <p className="font-medium text-slate-800 mb-2">Databases</p>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((s) => (
                <Badge key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ====================== CARD 2 ====================== */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="
            p-6 bg-white/50 backdrop-blur-xl rounded-2xl shadow-md 
            border border-white/60 hover:border-blue-400 hover:shadow-blue-200 transition-all
          "
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Development Strengths
          </h3>

          <div className="space-y-6">
            {progressData.map((p, i) => (
              <ProgressBar
                key={p.name}
                name={p.name}
                level={p.level}
                delay={0.08 * i}
              />
            ))}
          </div>

          {/* CS Fundamentals Bar */}
          <div className="mt-8">
            <h4 className="text-md font-semibold text-blue-700 mb-2">
              CS Fundamentals
            </h4>
            <ProgressBar
              name="DBMS + OOP + DSA"
              level={82}
              delay={0.4}
            />
          </div>
        </motion.div>

        {/* ====================== CARD 3 ====================== */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="
            p-6 bg-white/50 backdrop-blur-xl rounded-2xl shadow-md 
            border border-white/60 hover:border-blue-400 hover:shadow-blue-200 transition-all
          "
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Tools & Soft Skills
          </h3>

          <p className="font-medium text-slate-800 mb-2">Tools & Platforms</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.tools.map((s) => (
              <Badge key={s.name} name={s.name} level={s.level} />
            ))}
          </div>

          <p className="font-medium text-slate-800 mb-2">Soft Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.softSkills.map((s) => (
              <motion.div
                key={s}
                whileHover={{ scale: 1.08 }}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-xl shadow-sm text-sm border border-slate-200"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
