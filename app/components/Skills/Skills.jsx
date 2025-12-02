"use client";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 70 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "MySQL", level: 65 },
  { name: "Python", level: 60 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Git & GitHub", level: 80 },
  { name: "Figma / Design", level: 60 },
  { name: "Django (Beginner)", level: 40 },
,
];

// small animated badge
function SkillBadge({ label }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium shadow-sm"
    >
      {label}
    </motion.span>
  );
}

// horizontal progress bar
function SkillBar({ name, level, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-800">{name}</span>
        <span className="text-xs text-slate-500">{level}%</span>
      </div>

      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.9, delay }}
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-b from-white to-blue-50/10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-4xl font-bold text-slate-900 text-center mb-8"
      >
        Skills <span className="text-blue-600">Overview</span>
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: short intro + badges */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 bg-white/60 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-md"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-3">What I Work With</h3>
          <p className="text-slate-700 mb-4 leading-relaxed text-sm">
            I focus on building real, maintainable web apps using the MERN stack and
            modern frontend tools. Below are my main skills — I keep improving them
            by building projects and learning new patterns.
          </p>

          <div className="flex flex-wrap gap-3">
            {["MERN", "React", "Next.js", "Node.js", "MongoDB"].map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>

          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transition"
            >
              See Projects
            </a>
          </div>
        </motion.div>

        {/* Middle: skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-1 bg-white/50 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Core Skills</h4>
          <div className="space-y-4">
            {skillsData.slice(0, 7).map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
            ))}
          </div>
        </motion.div>

        {/* Right: more skills + small tools */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 bg-white/50 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Other Tools & Tech</h4>

          <div className="grid grid-cols-2 gap-3">
            {skillsData.slice(7).map((s, i) => (
              <div
                key={s.name}
                className="flex items-center gap-3 bg-blue-50/40 rounded-lg p-2"
              >
                <div className="w-9 h-9 rounded-md bg-white/60 flex items-center justify-center text-blue-700 font-semibold shadow-sm">
                  {s.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-800">{s.name}</div>
                  <div className="text-xs text-slate-500">Level: {s.level}%</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-sm text-slate-600">
              Continuously learning AI/ML basics and improving backend patterns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
