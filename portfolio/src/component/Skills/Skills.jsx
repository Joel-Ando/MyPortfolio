import React from "react";
import image1 from "./../../img/imag1.png";
import image2 from "./../../img/image2.png";
import image3 from "./../../img/image3.png";
import image4 from "./../../img/image4.png";
import image5 from "./../../img/image5.png";
import image6 from "./../../img/image6.png";
import image7 from "./../../img/image7.png";
import image8 from "./../../img/image8.png";
import image9 from "./../../img/image9.png";
import image10 from "./../../img/image10.png";
import { motion } from "framer-motion";
import "./../../App.css";

function Skills() {
  return (
    <div className="my-7 py-6 max-w-[1200px] font-oxanium mx-auto" id="skills">
      <div className="px-4 md:px-8">
        <div className="mb-4 items-center justify-between gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl text-white">
              My<span className="primary-color">Skills</span>
            </h1>
            <p className="text-gray-500">
              Languages i can create and complete asigned task with
            </p>
          </motion.div>
        </div>
        <ul className="orbit mx-auto">
          <li>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image1}
              alt="tailwindLogoPng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image2}
              alt="laravelLogoPng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image3}
              alt="mysqlLogopng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image4}
              alt="nodejsLogoPng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image5}
              alt="javascriptLogoPng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.9,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image7}
              alt="mongoDbLogoPng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.11,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image6}
              alt="phpLogoPng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.12,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image8}
              alt="reactLogoPng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.13,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image9}
              alt="cssLogoPng"
            />
          </li>
          <li>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.13,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={image10}
              alt="htmlLogoPng"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
