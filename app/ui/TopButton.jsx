"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <motion.button
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed 
          bottom-6 right-6 
          bg-blue-600 text-white 
          p-3 rounded-full shadow-xl 
          hover:bg-blue-700 hover:scale-110 
          transition-all 
          z-50
        "
      >
        <ArrowUp size={22} />
      </motion.button>
    )
  );
}
