"use client";


import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl tracking-tighter hover:text-neon-blue transition-colors">MPW.</a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-neon-blue ${activeSection === link.href.substring(1) ? "text-neon-blue" : "text-white/70"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
