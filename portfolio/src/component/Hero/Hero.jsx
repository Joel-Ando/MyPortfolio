import React from "react";
import Profile from "../../Assets/imageAndo.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";

function Hero() {
  return (
    <div>
      <div className="font-oxanium flex justify-center items-center flex-col-reverse sm:flex-row  max-w-[1200px] mx-auto my-12 p-10 h-[64]">
        <div className="flex-col py-10 my-auto mx-auto">
          <h3 className="md:text-4xl sm:text-xl text-3xl font-bold text-gray-300">
            Hi, I am Joel Wanneh
          </h3>
          <h1 className="md:text-5xl sm:text-5xl text-3xl primary-color font-bold ">
            <TypeAnimation
              sequence={["A JUNIOR", 1000, "SOFTWARE", 1000, "ENGINEER", 1000]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-300 md:text-3xl sm:text-4xl text-l font-bold">
            Let me be Your go to Engineer for Your Web applications.
          </p>
          <div className="text-gray-300 py-3 flex flex-col">
            <div className="inline-flex space-x-2 py-1 item-center">
              <AiFillMail className="text-xl" />
              <span>joelwanneh@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 py-1 item-center">
              <AiFillPhone className="text-xl" />
              <span>+237 678510066</span>
            </div>
          </div>

          <div className="w-48 text-3xl cursor-pointer flex justify-start gap-10 my-3 text-purple-600">
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillGithub />
          </div>
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#263dff] via-[#992ecc] to-[#4e187a] rounded-xl blur-lg group-hover:opacity-100 group-hover:inset-1 group-hover:duration-200 animation-till"></div>
            <a
              href="/"
              title="download CV"
              role="button"
              className="w-[190px] h-[60px] relative inline-flex -center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2    focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="my-auto">
          <img
            src={Profile}
            alt="profile image"
            className="w-[200px] sm:w-[500px] mx-auto h-auto blob"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
