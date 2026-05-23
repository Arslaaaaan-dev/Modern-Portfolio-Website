import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import SocialContact from "@/components/SocialContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-neon-purple selection:text-white overflow-hidden">
      <Hero />
      <div className="relative z-10 bg-background">
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <SocialContact />
      </div>
      <Footer />
    </main>
  );
}
