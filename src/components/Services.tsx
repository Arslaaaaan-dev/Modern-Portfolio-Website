"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, PenTool, Zap } from "lucide-react";

const services = [
  {
    title: "Creative Development",
    description: "Building immersive, high-performance web experiences using modern technologies like Next.js, WebGL, and GSAP.",
    icon: Code,
    features: ["Frontend Architecture", "3D Web Experiences", "Performance Tuning"]
  },
  {
    title: "Digital Design",
    description: "Crafting intuitive and visually striking user interfaces with a focus on usability, aesthetics, and modern trends.",
    icon: PenTool,
    features: ["UI/UX Design", "Design Systems", "Interactive Prototyping"]
  },
  {
    title: "Motion & Interaction",
    description: "Bringing static designs to life with smooth, purposeful animations that enhance user engagement and brand perception.",
    icon: Zap,
    features: ["Micro-interactions", "Scroll Animations", "State Transitions"]
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative z-10 bg-black/50" ref={ref}>
      <div className="absolute inset-0 bg-glass pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            What I Do
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4 font-display">{service.title}</h4>
                  <p className="text-white/60 mb-8 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
