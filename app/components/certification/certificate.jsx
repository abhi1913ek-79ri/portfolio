"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
    {
        title: "Software Engineering Virtual Experience",
        org: "JPMorgan Chase & Co. (Forage)",
        year: "Nov 2025",
        desc: "Completed practical modules on project setup, Kafka integration, H2 database setup, and REST API development.",
        link: "https://drive.google.com/file/d/11Bg9835f6-ALskmdtbyla21ylPX63Smc/view",
    },
    {
        title: "React & Redux Certification Test – Completion Certificate",
        org: "KnowledgeGate",
        year: "2025",
        desc: "Successfully completed the React and Redux Certification Test under the KnowledgeGate YouTube Course.",
        link: "https://drive.google.com/file/d/1H3wHApjyjx6MGK8S1R5_VSicvM9qodL4/view?usp=sharing",
    },

    {
        title: "Node.js + Express.js + MongoDB (MERN Backend)",
        org: "KnowledgeGate",
        year: "2024",
        desc: "Completed the MERN Backend course covering Node.js, Express.js, MongoDB, APIs, backend routing, and authentication fundamentals.",
        link: "https://drive.google.com/file/d/1vosFO33NJgHvQYGCY_kiMtN5Lez_Kuub/view?usp=sharing",
    },
    {
        title: "Certificate of Merit – Computer Science (100/100)",
        org: "Central Board of Secondary Education (CBSE)",
        year: "2022",
        desc: "Awarded Certificate of Merit for scoring perfect marks in Computer Science.",
        link: "https://drive.google.com/file/d/1BG2KpFwScFxVujKR_x1VAq6abWEitWhX/view",
    },

];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="w-full min-h-screen px-6 md:px-20 py-24 bg-gradient-to-b from-white to-blue-50/10 flex flex-col items-center flex flex-wrap justify-center"
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-4xl font-bold text-slate-900 text-center mb-12"
            >
                Certificates <span className="text-blue-600">& Achievements</span>
            </motion.h2>

            {/* Grid */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.01 }}
                        whileHover={{ scale: 1.05, translateY: -6 }}
                        className="
              p-6 bg-white/60 backdrop-blur-xl 
              rounded-2xl shadow-md border border-white/60 
              transition-all hover:shadow-blue-300/50 hover:border-blue-400
            "
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="text-blue-600" size={26} />
                            <h3 className="text-lg font-semibold text-slate-900">
                                {cert.title}
                            </h3>
                        </div>

                        <p className="text-slate-700 text-sm mb-1">
                            Issued by <span className="font-semibold">{cert.org}</span>
                        </p>

                        <p className="text-xs text-slate-500 mb-3">{cert.year}</p>

                        <p className="text-sm text-slate-700 mb-4">{cert.desc}</p>

                        <a
                            href={cert.link}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline"
                        >
                            View Certificate <ExternalLink size={14} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
