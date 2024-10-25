import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Projects from "@/components/Projects";
import { navItems } from "@/data/data";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <main className="w-full mx-auto bg-black-200 overflow-hidden">
      <FloatingNav navItems={navItems} />
      <div className="max-w-5xl mx-auto">
        <Hero />
        <Projects />
        <About />
        <Experience />
      </div>
      <Contact />
    </main>
  );
};
export default page;
