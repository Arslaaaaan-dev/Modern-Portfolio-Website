"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import { motion, useScroll } from "framer-motion";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <Navbar />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple z-[60]" style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} />
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        {children}
      </div>
    </>
  );
}
