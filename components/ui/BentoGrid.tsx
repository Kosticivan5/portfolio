import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[12rem] grid-cols-1 md:grid-cols-10 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  children,
}: //   header,
//   icon,
{
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: string | React.ReactNode;
  //   header?: React.ReactNode;
  //   icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:bg-grid-gradient dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      {/* {header} */}
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-20">
        {/* {icon} */}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-xl capitalize">
          {title}
        </div>
        <div className="font-sans font-normal text-white text-xs ">
          {description}
        </div>
      </div>
      {children}
    </div>
  );
};
