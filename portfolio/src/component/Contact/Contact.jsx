import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_MY_SERVICE_ID,
        process.env.REACT_APP_MY_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_MY_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className="flex justify-center font-oxanium my-5 h-full sm:h-[70vh] items-center"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="p-5 mr-2 bg-gray-800 rounded-xl flex flex-col"
          >
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact<span className="primary-color">Me</span>
            </h1>
            <p className="text-normal text-lg font-medium text-gray-400 mt-4">
              let's get in touch <br /> Send me an Email
            </p>
            <div className="w-48 text-8xl flex justify-center items-center my-3 ml-5 text-purple-600">
              <AiFillMail />
            </div>
          </motion.div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="px-6 pb-6 flex flex-col justify-center max-w-[700px]"
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex flex-col"
            >
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full name"
                className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex flex-col mt-2"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex flex-col mt-2"
            >
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="Your message"
                className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              ></textarea>
            </motion.div>
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.12,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              type="submit"
              className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-3 px-3 rounded-lg mt-5"
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
