import React from "react";
import Project1 from "./../../Assets/Project1.png";
import Project2 from "./../../Assets/Project2.png";
import Project3 from "./../../Assets/Project3.png";
function Project() {
  return (
    <div className="my-7 py-6 max-w-[1200px] font-oxanium mx-auto">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flexx items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl lg:text-3xl text-white">
              My<span className="primary-color">Projects</span>
            </h1>
            <p className="text-gray-500">Below are my Projects</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="https://ghibbat.net/"
            className="group h-64 overflow-hidden rounded-lg shadow-lg md:h-100"
          >
            <img
              src={Project1}
              alt="ghibatschoolImg"
              className="h-48 w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href=""
            className="group h-64 overflow-hidden rounded-lg shadow-lg md:h-80"
          >
            <img
              src={Project2}
              alt="weatherAppimg"
              className="h-48 w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href=""
            className="group h-64 overflow-hidden rounded-lg shadow-lg md:h-80"
          >
            <img
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
