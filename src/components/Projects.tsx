"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Nova UI",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Aether Motion",
    category: "WebGL Experience",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    color: "from-emerald-500/20 to-cyan-500/20"
  },
  {
    title: "Quantum Finance",
    category: "Fintech Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Lumina Engine",
    category: "3D Framework",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop",
    color: "from-pink-500/20 to-rose-500/20"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section id="projects" className="py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono text-neon-blue uppercase tracking-widest mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h3>
          </div>
          <button className="hover-trigger px-6 py-3 rounded-full border border-white/20 hover:bg-white text-white hover:text-black transition-all duration-300 text-sm font-medium">
            View All Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}


              className={`group relative rounded-3xl overflow-hidden cursor-none ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              {/* Project Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />

                {/* Fallback pattern for images */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent mix-blend-overlay" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-75 group-hover:brightness-100"
                />

                {/* Hover overlay text */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="pt-6 pb-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-sm font-mono text-white/50">{project.category}</span>
                </div>
                <div className="w-full h-[1px] bg-white/10 mt-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full bg-white/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
