import ProjectCard from "./ui/ProjectCard";
import { projectsItems } from "@/data/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" w-full max-w-7xl pt-6 pb-8 mx-auto grid place-items-center gap-8"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold dark:text-white text-center pb-3 max-w-[1400px] ">
          A small selection of{" "}
          <span className="text-white-100">recent projects</span>
        </h2>
        <div className="bg-white w-24 sm:w-40 h-[2px] mx-auto rounded-[100%]"></div>
      </div>
      <div className=" grid grid-cols-1 grid-rows-1 gap-4 xs:gap-y-6 md:gap-y-10 sm:gap-x-6 md:gap-x-10 sm:grid-cols-2 ">
        {projectsItems.map((item) => {
          const { id, title, subtitle, image, icons } = item;

          return (
            <ProjectCard
              key={id}
              title={title}
              subtitle={subtitle}
              image={image}
              icons={icons}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
