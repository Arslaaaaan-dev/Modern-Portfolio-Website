"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Awards Won", value: "12" },
];

const timeline = [
  { year: "2023 - Present", role: "Senior Creative Developer", company: "Studio X" },
  { year: "2021 - 2023", role: "Frontend Engineer", company: "Tech Innovations" },
  { year: "2019 - 2021", role: "UI/UX Designer", company: "Creative Agency" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-mono text-neon-blue uppercase tracking-widest mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Bridging the gap between <span className="text-white/50">design</span> and <span className="text-white/50">engineering</span>.
            </h3>
            <p className="text-lg text-white/70 mb-8 font-light leading-relaxed">
              I am a multidisciplinary developer and designer focused on creating immersive digital experiences. With a passion for motion graphics and 3D interactions, I build websites that don&apos;t just look good, but feel alive.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-white mb-2">{stat.value}</span>
                  <span className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="glass-card p-8 md:p-12"
          >
            <h4 className="text-xl font-display font-bold mb-8 text-white">Experience</h4>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-12 before:absolute before:-left-1.5 before:top-6 before:w-3 before:h-3 before:bg-neon-purple before:rounded-full after:absolute after:left-0 after:top-10 after:w-[2px] after:h-[calc(100%+8px)] last:after:hidden after:bg-gradient-to-b after:from-neon-purple after:to-transparent">
                  <div className="p-4 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/5">

                  <span className="text-xs font-mono text-neon-blue mb-1 block">{item.year}</span>
                  <h5 className="text-lg font-bold text-white">{item.role}</h5>
                  <p className="text-white/50 text-sm">{item.company}</p>

                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
