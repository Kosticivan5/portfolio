import Subtitle from "./ui/Subtitle";
import { jobExperienceItems } from "@/data/data";
const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl px-6 py-8 mx-auto grid place-items-center gap-8 "
    >
      <Subtitle title="My work" highlight="experience" />
      <div className="w-full mx-auto grid md:grid-cols-4 gap-4 text-white">
        {jobExperienceItems.map((item, i) => (
          <div
            className={`relative ${
              i === 2 ? "md:col-start-2 md:col-end-4" : "md:col-span-2"
            }  rounded-xl p-4 flex sm:flex-row items-start flex-col sm:items-center gap-2 bg-grid-gradient shadow-lg shadow-cyan-700/20`}
          >
            <img
              className={`w-16 ${i === 2 && "rotate-[25deg] w-14"}`}
              src={item.icon}
              alt={item.title}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm tracking-wide font-light">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
