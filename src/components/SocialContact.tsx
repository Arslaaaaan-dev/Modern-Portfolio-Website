"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Briefcase, Code2, Mail, Phone } from "lucide-react";

const links = [
  { name: "Email", icon: Mail, url: "mailto:hello@example.com", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Briefcase, url: "https://linkedin.com", color: "hover:text-blue-500" },
  { name: "GitHub", icon: Code2, url: "https://github.com", color: "hover:text-white" },
  { name: "Instagram", icon: Camera, url: "https://instagram.com", color: "hover:text-pink-500" },
  { name: "WhatsApp", icon: Phone, url: "https://wa.me/1234567890", color: "hover:text-green-500" },
];

export default function SocialContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 md:p-24 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full max-h-lg bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Let&apos;s create something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">extraordinary.</span>
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto font-light">
              I&apos;m always open to discussing product design work or partnership opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className={`w-6 h-6 text-white/70 transition-colors duration-300 ${link.color}`} />

                    {/* Tooltip */}
                    <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 whitespace-nowrap pointer-events-none">
                      {link.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
