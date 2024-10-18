import ProjectCard from "./ui/ProjectCard";
import { projectsItems } from "@/data/data";
import Subtitle from "./ui/Subtitle";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" w-full px-6 py-8 mx-auto grid place-items-center gap-8"
    >
      <Subtitle title=" A small selection of" highlight="recent projects" />
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
