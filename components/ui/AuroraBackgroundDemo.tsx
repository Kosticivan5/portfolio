"use client";

import { motion } from "framer-motion";
import React from "react";
import AuroraBackground from "./AuroraBackground";
import BannerButton from "./BannerButton";
import TextEffect from "./TextEffect";
const AuroraBackgroundDemo = () => {
  return (
    <AuroraBackground>
      {/* <div className="text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white text-center">
          Bringing Designs to Life{" "}
          <span className="text-white-100">with Code</span>
        </div> */}

      <TextEffect words="Designing Seamless Interfaces for Modern Web Applicationsss" />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.3,
          duration: 0.9,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="font-normal text-center md:text-2xl dark:text-neutral-200 py-4 ">
          Hi, I&apos;m Ivan, a Front-end Developer
        </div>
        <BannerButton />
      </motion.div>
    </AuroraBackground>
  );
};

export default AuroraBackgroundDemo;
