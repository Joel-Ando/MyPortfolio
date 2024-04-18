import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">Joel &copy; 2024</p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/joel-wanneh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/JoelWanneh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://github.com/Joel-Ando"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default Footer;
