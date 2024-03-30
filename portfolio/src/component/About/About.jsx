import React from "react";
import ComputerImg from "./../../Assets/computerImg.jpg";

function About() {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto id='about' font-oxanium">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={ComputerImg}
              alt="computerImg"
              className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="primary-color">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hey there! 👋 I'm Joel Ando Ngah Wanneh, a passionate software
                engineer in Yaoundé, Cameroon. With a Bachelor of Science in
                Computer Engineering from Siantour University Institute Coron
                and experience from the ALX Africa Aice Program, I have a robust
                skill set spanning backend and frontend technologies. Despite
                being an entry-level professional, I have a strong enthusiasm
                for learning and a dedication to mastering new technologies and
                methodologies. My internship experiences at companies like
                Mozart Group and VTC International have honed my problem-solving
                and collaborative abilities, making me a valuable asset in any
                team environment. When I'm not coding, you can find me indulging
                in my interests in fitness, dancing, music, and adventure. Let's
                connect and build something awesome together! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
