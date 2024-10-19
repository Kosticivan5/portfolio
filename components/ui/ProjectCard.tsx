"use client";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

type IconsType = {
  name: string;
  src: string;
};

type ImageData = {
  title: string;
  subtitle: string;
  icons: IconsType[];
  image: string;
};

const ProjectCard = ({ title, subtitle, icons, image }: ImageData) => {
  return (
    <div className="h-full relative max-w-sm sm:min-w-72 md:min-w-80 min-h-96 md:max-w-full shadow-lg ">
      {/* blur */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-gray-500 transform scale-[0.80]  rounded-full blur-3xl" />
      {/* blur */}
      <div className="relative shadow-xl bg-grid-gradient backdrop-blur-sm p-4 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start gap-4">
        <div className="flex flex-col justify-center gap-2 w-full">
          <div className="w-full flex items-center justify-center bg-card-gradient rounded-lg  overflow-hidden">
            <Image
              className="w-5/6 h-full object-cover rounded-t-xl rotate-x-6 skew-x-6 translate-y-4 max-w-xs"
              src={image}
              alt={title}
              layout="responsive"
              width={200}
              height={100}
            />
          </div>

          <h1 className="font-bold text-xl text-white relative z-50">
            {title}
          </h1>

          <p className="font-normal text-base text-slate-300  relative z-50">
            {subtitle}
          </p>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex py-2 items-center gap-2 ">
            {icons.map(({ src, name }) => {
              return (
                <img key={name} className="w-4 sm:w-5" src={src} alt={name} />
              );
            })}
          </div>

          <a
            href="/"
            className=" px-4 py-2 text-gray-300 flex items-center justify-center gap-1 hover:bg-white hover:text-black transition-all ease-in-out duration-300 text-xs sm:text-sm"
          >
            Check live site
            <FaLocationArrow className="text-[10px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
