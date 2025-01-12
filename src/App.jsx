import React from "react";
import Navbar from "./components/Navbar";
import FixedContact from "./components/FixedContact";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="bg-bgblack w-dvh">
      <Navbar />
      <FixedContact />
      <div
        id="content"
        className="pt-15 md: pt-20 px-10 md:px-[5rem] lg:px-[10rem]"
      >
        <div id="home" className="py-10 md:p-16 lg:p-[6.5rem]">
          <Home />
        </div>
        <div id="about" className="py-10 md:p-16 lg:p-[6.5rem]">
          <About />
        </div>
        <div id="experience" className="py-10 md:p-16 lg:p-[6.5rem]">
          <Experience />
        </div>
        <div id="experience" className="py-10 md:p-16 lg:p-[6.5rem]">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
