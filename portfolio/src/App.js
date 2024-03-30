import React from "react";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import ParticlesComponent from "./config/ConfigTsparticles";
import "./App.css";

function App() {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
