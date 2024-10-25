"use client";

import { motion } from "framer-motion";
import React from "react";
import BannerButton from "./ui/BannerButton";
import TextEffect from "./ui/TextEffect";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section className="relative h-screen max-h-section p-8">
      <Spotlight
        className="-top-40 left-0 md:left-96 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="-top-40 left-0 md:left-10 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="lightblue"
      />
      <div className="pt-3 w-8 sm:w-10">
        <img src="../../images/logo.svg" alt="logo" className="w-full" />
      </div>
      <div className="flex flex-col-reverse sm:flex-row  sm:items-start gap-5 pt-8 md:pt-20">
        <div className="flex flex-col gap-3 sm:pt-10">
          <div className="font-normal md:text-2xl dark:text-neutral-200">
            <motion.div
              initial={{ opacity: 0.0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0,
                duration: 0.9,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="font-normal md:text-2xl dark:text-neutral-200"
            >
              Hi, I&apos;m Ivan, a Front-end Developer
            </motion.div>
          </div>
          <TextEffect words="I Build Seamless Interfaces for Modern Web Applications" />
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.9,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className=""
          >
            <BannerButton />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 1.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <div
            className="w-20 xs:w-32 sm:w-44 md:w-60 lg:w-64 bg-black-100 overflow-hidden"
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            }}
          >
            <img
              className=" w-full translate-y-4"
              src="/images/ivan-v1.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>

      {/* <AuroraBackgroundDemo /> */}
    </section>
  );
};
export default Hero;
