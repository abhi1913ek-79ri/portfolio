"use client";
import Link from "next/link";
import Hamburger from "@/app/ui/Hamburger";
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const path = usePathname(); // For active link

  // Scroll Lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Custom Link Component (Desktop)
  const NavItem = ({ href, label }) => {
    const isActive = path === href;

    return (
      <Link
        href={href}
        className={`
          px-4 py-1 rounded-xl text-[15px]
          transition-all duration-200
          ${isActive
            ? "bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.35)]"
            : "bg-[#f3f4f6] text-slate-900 hover:shadow-[0_3px_8px_rgba(0,0,0,0.12)] hover:bg-white"
          }
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="h-[4rem] py-5 px-5 md:px-20 flex justify-between items-center bg-gray-50 backdrop-blur-sm">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* MOBILE: Hamburger */}
          <div className="md:hidden">
            <Hamburger open={open} setOpen={setOpen} />
          </div>

          {/* DESKTOP: Logo Left */}
          <div className="hidden md:block text-2xl font-semibold text-blue-700 tracking-tight drop-shadow-sm">
            <Link href="/">{/* DESKTOP: Logo Left */}
              <div className="hidden md:block">
                <Link href="/">
                  <p className="text-3xl font-mono font-bold">
                    <span className="text-black">&lt;</span>
                    <span className="text-blue-600">AG</span>
                    <span className="text-black"> /&gt;</span>
                  </p>

                </Link>
              </div>
            </Link>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex flex-row items-center gap-6">
          <NavItem href="#about" label="About" />
          <NavItem href="#skills" label="Skills" />
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#contact" label="Contact" />
        </div>

        {/* MOBILE: Logo Right */}
        <div className="md:hidden font-semibold text-blue-700">
          <p className="text-2xl font-mono font-bold">
            <span className="text-black">&lt;</span>
            <span className="text-blue-600">AG</span>
            <span className="text-black"> /&gt;</span>
          </p>

        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE MENU LEFT PANEL */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-3/4 bg-white shadow-xl p-10 z-50 transition-transform duration-300 rounded-r-2xl
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col gap-8 text-blue-900 text-lg">
          <div className="flex justify-end" onClick={() => setOpen(false)}>
            <X size={32} />
          </div>

          {/* SIMPLE mobile links */}
          <Link href="#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
