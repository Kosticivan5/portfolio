import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { bentoGridItems } from "@/data/data";
import { PiStackLight } from "react-icons/pi";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl p-6 pb-8 mx-auto grid place-items-center gap-8"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold dark:text-white text-center pb-3 max-w-[1400px] ">
          About <span className="text-white-100">me</span>
        </h2>
        <div className="bg-white w-24 sm:w-40 h-[2px] mx-auto rounded-[100%]"></div>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {bentoGridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            // header={item.header}
            // icon={item.icon}
            className={`${i === 0 ? "md:col-span-4 md:row-span-2 " : ""} ${
              i === 1 || i === 2 ? "md:col-span-3 " : ""
            } ${i === 3 ? "md:col-span-6" : ""} ${
              i === 4 ? "md:col-span-4  " : ""
            } ${i === 5 ? "md:col-span-6" : ""}`}
          >
            {i === 0 && (
              <>
                <div className="h-full w-full bg-grid-gradient  dark:bg-grid-white/[0.05] absolute top-0 left0"></div>
                <div className="absolute z-10 -bottom-20 -left-1 w-full h-full [mask-image:radial-gradient(ellipse_at_top_left,transparent_1%,black)]">
                  <img
                    className="w-full h-full object-cover scale-75"
                    src=".././images/communication.png"
                    alt=""
                  />
                </div>
              </>
            )}
            {i === 1 && (
              <div>
                <img
                  className="object-contain scale-150 absolute -bottom-28 w-full h-full [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
                  src=".././images/globe.png"
                  alt="globe"
                />
              </div>
            )}
            {i === 2 && (
              <div>
                <img
                  className="absolute bottom-0 right-0"
                  src=".././images/skeleton.png"
                  alt="skeleton"
                />
              </div>
            )}
            {i === 3 && (
              <div className="absolute -top-10 -right-10 w-52 [mask-image:radial-gradient(ellipse_at_top_left,transparent_15%,black)]">
                <PiStackLight className="text-white-100 w-full h-full" />
              </div>
            )}
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};
export default About;
