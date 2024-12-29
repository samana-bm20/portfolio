import React from "react";
import arrowdown from "../assets/icons/arrow-down.svg";

const Home = () => {
  return (
    <>
      <p className="text-xs md:text-base font-medium text-secondary tracking-wider">
        Hi, my name is
      </p>
      <p className="text-5xl md:text-7xl font-bold text-primary tracking-wide my-10">
        SAMANA MIRZA
        <span className="text-secondary">.</span>
      </p>
      <p className="text-lg md:text-2xl font-semibold italic text-secondary tracking-wide">
        "And though she be but little, she is fierce!"
      </p>
      <p className="my-10 text-xs md:text-base font-medium text-secondary w-full lg:w-2/3 tracking-wide">
        I am a <span className="text-primary">Software Engineer</span>{" "}
        specializing in building things on the web. I thrive on blending art and
        logic, crafting solutions that combine creative UI designs with smart,
        efficient programming. Currently, I am focussed on building
        client-satisfactory and accessible applications at
        <span className="text-primary"> ML Infomap Pvt Ltd</span>.
      </p>
      <div className="flex items-center w-fit cursor-pointer duration-500 delay-100 hover:-translate-y-1">
        <p className="text-xs md:text-sm font-medium italic text-primary font-mono">
          Discover more about my journey
        </p>
        <img src={arrowdown} alt="arrowdown" className="w-8 h-8 mt-1" />
      </div>
    </>
  );
};

export default Home;
