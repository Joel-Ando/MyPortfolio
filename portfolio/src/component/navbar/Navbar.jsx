import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <div className="text-gray-300  font-oxanium hover:cursor-pointer flex justify-between items-center max-w-[1240px] mx-auto h-20 px-4 text-1">
      {/* <img src={ }  alt="" className=""/> */}
      <h1 className="ml-5">Joelwanneh</h1>
      <ul className="hidden md:flex">
        <li className="p-2">Home</li>
        <li className="p-2">About</li>
        <li className="p-2">Skills</li>
        <li className="p-2">Project</li>
        <li className="p-2">Contact</li>
      </ul>
      <button className="button mr-5">Contact me</button>

      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 fixed h-30 flex justify-center left-0 top-20 w-[100%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-0"
            : "fixed top-[-100%]"
        }
      >
        <ul className="p-8 text-2xl">
          <li className="p-2 ">Home</li>
          <li className="p-2">About</li>
          <li className="p-2">Skills</li>
          <li className="p-2">Project</li>
          <li className="p-2">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
