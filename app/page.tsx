import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkGrid from "@/components/WorkGrid";
import { navItems } from "@/data/data";

const page = () => {
  return (
    <main className="w-full mx-auto bg-black-100">
      <FloatingNav navItems={navItems} />
      <Hero />
      <div className="bg-black-200 h-screen w-full">
        <WorkGrid />
      </div>
    </main>
  );
};
export default page;
