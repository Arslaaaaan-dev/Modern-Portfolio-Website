"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, MonitorSmartphone, Database, Cpu, Layers, Palette } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: MonitorSmartphone, level: 95, color: "from-blue-500 to-cyan-400" },
  { name: "Creative Coding (WebGL)", icon: Code2, level: 85, color: "from-purple-500 to-pink-500" },
  { name: "UI/UX Design", icon: Palette, level: 90, color: "from-orange-500 to-yellow-500" },
  { name: "Backend Architecture", icon: Database, level: 80, color: "from-green-500 to-emerald-400" },
  { name: "Performance Optimization", icon: Cpu, level: 88, color: "from-red-500 to-rose-400" },
  { name: "System Design", icon: Layers, level: 75, color: "from-indigo-500 to-blue-500" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-32 relative z-10 bg-white/[0.01]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Skills & Technologies</h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 group hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-shadow duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                </div>

                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
                <div className="mt-2 text-right text-xs text-white/50 font-mono">
                  {skill.level}%
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
