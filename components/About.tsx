"use client";

import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { bentoGridItems } from "@/data/data";
import { PiStackLight } from "react-icons/pi";
import TechStack from "./ui/TechStack";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Subtitle from "./ui/Subtitle";
import Image from "next/image";

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kosticivan5@gmail.com");
    setCopied(true);
  };

  return (
    <section
      id="about"
      className="w-full px-6 py-8 mx-auto grid place-items-center gap-8"
    >
      <Subtitle title="About" highlight="me" />
      <BentoGrid className=" mx-auto">
        {bentoGridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            // header={item.header}
            // icon={item.icon}
            className={`${i === 0 ? "md:col-span-4 md:row-span-2 " : ""} ${
              i === 1 || i === 2 ? "md:col-span-3 " : ""
            } ${i === 3 ? "md:col-span-6 flex justify-center" : ""} ${
              i === 4 ? "md:col-span-4 flex items-center justify-center" : ""
            } ${i === 5 ? "md:col-span-6" : ""}`}
          >
            {i === 0 && (
              <>
                <div className="h-full w-full bg-grid-gradient dark:bg-grid-white/[0.05] absolute top-0 left0"></div>
                <div className="absolute z-10 -bottom-20 -left-1 w-full h-full ">
                  <Image
                    className="sm:w-full h-full object-cover md:scale-75 [mask-image:radial-gradient(ellipse_at_bottom_left,transparent_0%,black)]"
                    src=".././images/communication.png"
                    alt=""
                  />
                </div>
              </>
            )}
            {i === 1 && (
              <div>
                <Image
                  className="object-contain scale-150 absolute -bottom-28 w-full h-full [mask-image:radial-gradient(ellipse_at_bottom,transparent_0%,black)]"
                  src=".././images/globe.png"
                  alt="globe"
                />
              </div>
            )}
            {i === 2 && (
              <div>
                <Image
                  className="absolute bottom-0 right-0"
                  src=".././images/skeleton.png"
                  alt="skeleton"
                />
              </div>
            )}
            {i === 3 && (
              <>
                <div className="absolute -top-10 left-[20%] w-52 [mask-image:radial-gradient(ellipse_at_top_left,transparent_15%,black)] opacity-20">
                  <PiStackLight className="text-white-100 w-full h-full " />
                </div>
                <TechStack />
              </>
            )}
            {i === 4 && (
              <div className="relative">
                <div className="absolute -top-24 right-0 z-20">
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </div>
                <button
                  className="relative z-30 px-8 py-2 rounded-md bg-teal-600 text-white font-bold transition duration-300 hover:bg-white hover:text-black border-2 border-transparent "
                  onClick={handleCopy}
                >
                  {copied ? "Email copied" : "Copy my email"}
                </button>
              </div>
            )}
            {i === 5 && (
              <div>
                <div className="h-full w-full bg-grid-gradient dark:bg-grid-white/[0.05] absolute top-0 left0 "></div>
                <Image
                  className="absolute -bottom-24 -right-24 scale-75"
                  src=".././images/code_snippet.png"
                  alt="skeleton"
                />
              </div>
            )}
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};
export default About;
