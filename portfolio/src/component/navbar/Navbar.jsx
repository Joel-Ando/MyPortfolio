import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "./../../img/logo.jpeg";

function Navbar() {
  const [nav, setnav] = useState(false);

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <div className="text-gray-300 font-oxanium hover:cursor-pointer flex justify-between items-center max-w-[1240px] mx-auto h-20 px-4 text-1">
      <img src={logo} alt="logo" className="h-25 w-20 ml-5 " />
      {/* <h1 className="ml-5">Joelwanneh</h1> */}
      <ul className="hidden md:flex ">
        <li className="p-5 hover:text-purple-500">Home</li>
        <li
          onClick={() => handleClickScroll("about")}
          className="p-5 hover:text-purple-500"
        >
          About
        </li>
        <li
          onClick={() => handleClickScroll("skills")}
          className="p-5 hover:text-purple-500"
        >
          Skills
        </li>
        <li
          onClick={() => handleClickScroll("project")}
          className="p-5 hover:text-purple-500"
        >
          Project
        </li>
        <li
          onClick={() => handleClickScroll("contact")}
          className="p-5 hover:text-purple-500"
        >
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 fixed h-30 flex justify-center left-0 top-20 w-[100%] border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-0"
            : "fixed top-[-100%]"
        }
      >
        <ul className="p-8 text-2xl">
          <li className="p-2 hover:text-purple-500 ">Home</li>
          <li
            onClick={() => {
              handleClickScroll("about");
              handleNav();
            }}
            className="p-2 hover:text-purple-500"
          >
            About
          </li>
          <li
            onClick={() => {
              handleClickScroll("skills");
              handleNav();
            }}
            className="p-2 hover:text-purple-500"
          >
            Skills
          </li>
          <li
            onClick={() => {
              handleClickScroll("project");
              handleNav();
            }}
            className="p-2 hover:text-purple-500"
          >
            Project
          </li>
          <li
            onClick={() => {
              handleClickScroll("contact");
              handleNav();
            }}
            className="p-2 hover:text-purple-500"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
