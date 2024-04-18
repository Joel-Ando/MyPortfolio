import React from "react";
import Project1 from "./../../Assets/Project1.png";
import Project2 from "./../../Assets/Project2.png";
import Project3 from "./../../Assets/Project3.png";
import { motion } from "framer-motion";

function Project() {
  return (
    <div className="my-7 py-6 max-w-[1200px] font-oxanium mx-auto" id="project">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flexx items-center justify-between gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl lg:text-3xl text-white">
              My<span className="primary-color">Projects</span>
            </h1>
            <p className="text-gray-500">Below are my Projects</p>
          </motion.div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="https://ghibbat.net/"
            className="group  h-48 overflow-hidden rounded-lg shadow-lg md:h-100"
          >
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              src={Project1}
              alt="ghibatschoolImg"
              className="h-48 w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://github.com/Joel-Ando/MyWeatherApp"
            className="group  h-48 overflow-hidden rounded-lg shadow-lg md:h-100"
          >
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              src={Project2}
              alt="weatherAppimg"
              className="h-48 w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://github.com/Joel-Ando/MyPortfolio"
            className="group  h-48 overflow-hidden rounded-lg shadow-lg md:h-100"
          >
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.12,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              src={Project3}
              alt="portfolioImg"
              className="h-48 w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
