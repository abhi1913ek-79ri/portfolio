"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-20 md:pt-0 h-2/3 flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-20">
      {/* LEFT TEXT CONTENT */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
        <p className="text-blue-600 font-semibold tracking-wide mb-2 text-xl">
          Hi, I'm Abhishek Kumar Giri
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
          Turning
          <span className="text-blue-600"> Ideas Into Working Web Applications</span>
        </h1>

        {/* TYPEWRITER EFFECT */}
        <div className="text-xl md:text-2xl text-slate-700 font-medium mt-4 h-10">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer in Training (MERN)",
                "Building Frontend Projects with React & Next.js",
                "Learning the Basics of AI & Machine Learning",
                "Focused on Improving Through Projects & Practice",

              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 70,
            }}
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-6">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 shadow hover:bg-slate-100 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      {/* Image + Blob Wrapper */}
      <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 mx-auto">

        {/* Soft glow */}
        <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-full"></div>

        {/* BLUE BLOB SHAPE */}
        <svg
          viewBox="0 0 200 200"
          className="absolute w-full h-full drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]"
        >
          <path
            fill="#0F62FE"
            d="M62.7,-57.5C78.9,-46.6,88,-23.3,86.6,-1.4C85.1,20.4,73.2,40.8,57,55.1C40.8,69.4,20.4,77.5,0.2,77.3C-20.1,77.2,-40.2,68.8,-52.4,54.5C-64.6,40.2,-68.9,20.1,-67.8,1.1C-66.7,-17.9,-60.2,-35.8,-48,-46.7C-35.8,-57.6,-17.9,-61.5,2.7,-64.2C23.3,-66.9,46.6,-68.4,62.7,-57.5Z"
            transform="translate(100 100)"
          />

          {/* CLIP PATH FOR IMAGE */}
          <clipPath id="blobClip">
            <path
              d="M62.7,-57.5C78.9,-46.6,88,-23.3,86.6,-1.4C85.1,20.4,73.2,40.8,57,55.1C40.8,69.4,20.4,77.5,0.2,77.3C-20.1,77.2,-40.2,68.8,-52.4,54.5C-64.6,40.2,-68.9,20.1,-67.8,1.1C-66.7,-17.9,-60.2,-35.8,-48,-46.7C-35.8,-57.6,-17.9,-61.5,2.7,-64.2C23.3,-66.9,46.6,-68.4,62.7,-57.5Z"
              transform="translate(100 100)"
            />
          </clipPath>

          {/* IMAGE INSIDE BLOB */}
          <image
            href="/profile.png"
            width="200"
            height="200"
            x="5"
            y="25"
            clipPath="url(#blobClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>

      </div>

    </section>
  );
}
