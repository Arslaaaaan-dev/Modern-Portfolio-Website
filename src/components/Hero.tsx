"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero3D from "./Hero3D";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Hero3D />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10 pointer-events-none" />

      <motion.div style={{ y }} className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-white/80">Available for freelance work</span>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="https://res.cloudinary.com/dccm287b8/image/upload/v1779633817/copy_of_edit_this_photo_very_naturally_202605191401_g0slui.webp"
          alt="Profile"
          className="w-32 h-32 rounded-full border-2 border-neon-purple shadow-[0_0_20px_#bc13fe] object-cover mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">SAYYED</span> ARSLAAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 font-light"
        >
          Crafting premium digital experiences through motion, typography, and creative development. Elevating brands into the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="hover-trigger group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="hover-trigger inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition-all hover:border-white/40"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
