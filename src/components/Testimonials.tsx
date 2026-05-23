"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "An absolute masterclass in web development. The attention to detail and smooth animations completely transformed our brand's digital presence.",
    author: "Sarah Jenkins",
    role: "Creative Director, Studio Nexus"
  },
  {
    text: "Working together was a seamless experience. They possess a rare combination of technical brilliance and keen design intuition.",
    author: "David Chen",
    role: "Founder, TechFlow"
  },
  {
    text: "The final product exceeded all our expectations. The 3D elements and interactions added a level of premium feel we didn't know was possible on the web.",
    author: "Elena Rodriguez",
    role: "Marketing Head, Nova Corp"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          <Quote className="w-20 h-20 text-white/5 absolute -top-10 -left-10 md:-left-20" />

          <div className="h-[300px] md:h-[250px] relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : 20,
                  scale: activeIndex === index ? 1 : 0.95,
                  pointerEvents: activeIndex === index ? "auto" : "none"
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center text-center justify-center"
              >
                <p className="text-xl md:text-3xl font-light text-white leading-relaxed mb-10">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <h5 className="text-lg font-bold text-white mb-1">{testimonial.author}</h5>
                  <span className="text-sm text-neon-blue font-mono">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-8 bg-white" : "w-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
