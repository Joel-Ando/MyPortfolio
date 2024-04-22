import React, { useState, useEffect } from "react";
import { AiFillUpCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const BackToTopbtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100; // Adjust this threshold as needed

      setShowButton(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-5 right-5 text-4xl cursor-pointer text-purple-900 hover:text-purple-600"
      onClick={scrollToTop}
    >
      <AiFillUpCircle />
    </motion.div>
  );
};

export default BackToTopbtn;
