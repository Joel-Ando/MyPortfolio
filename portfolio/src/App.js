import React from "react";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import BackTotopBtn from "./component/BackTotopBtn";
import ParticlesComponent from "./config/ConfigTsparticles";
import Skills from "./component/Skills/Skills";
import "./App.css";

function App() {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <BackTotopBtn />
    </div>
  );
}

export default App;
