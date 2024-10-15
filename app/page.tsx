import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Projects from "@/components/Projects";
import { navItems } from "@/data/data";
import About from "@/components/About";

const page = () => {
  return (
    <main className="w-full mx-auto bg-black-200">
      <Hero />
      <FloatingNav navItems={navItems} />
      <div className="max-w-7xl mx-auto">
        <Projects />
        <About />
      </div>
    </main>
  );
};
export default page;
