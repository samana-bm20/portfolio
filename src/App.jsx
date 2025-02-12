import React from "react";
import Navbar from "./components/Navbar";
import FixedContact from "./components/FixedContact";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-bgblack w-dvh">
      <Navbar />
      <FixedContact />
      <div
        id="content"
        className="pt-15 md: pt-20 px-10 md:px-[4rem] lg:px-[6rem]"
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
        <div id="projects" className="py-10 md:p-16 lg:p-[6.5rem]">
          <Projects />
        </div>
        <div id="testimonials" className="py-10 md:p-16 lg:p-[6.5rem]">
          <Testimonials />
        </div>
        <div id="blogs" className="py-10 md:p-16 lg:p-[6.5rem]">
          <Blogs />
        </div>
        <div id="contact" className="py-10 md:p-16 lg:p-[6.5rem]">
          <Contact />
        </div>
      </div>
      <div className="w-full py-4 shadow-card">
        <a
          href="https://github.com/samana-bm20/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[0.7rem] text-secondary hover:text-primary tracking-wide text-center italic cursor-pointer">
            Designed and developed by Samana Mirza
          </p>
        </a>
      </div>
    </div>
  );
};

export default App;
