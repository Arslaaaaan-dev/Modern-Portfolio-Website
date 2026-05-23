"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer className="relative z-10 border-t border-white/5 bg-black/80 backdrop-blur-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple animate-pulse" />
            <span className="font-display font-bold text-xl tracking-tighter">MPW.</span>
          </div>

          <div className="text-white/50 text-sm font-light">
            &copy; {new Date().getFullYear()} Modern Portfolio Website. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="hover-trigger flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>
      </div>
    </motion.footer>
  );
}
