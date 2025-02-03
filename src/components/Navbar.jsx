import React, { useState } from "react";
import { Button } from "@mui/material";
import { MenuOpenRounded } from "@mui/icons-material";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  

  return (
    <>
      <div className="fixed top-0 w-full h-15 md:h-20 bg-bggray text-2xl font-bold py-3 px-10 md:px-14 shadow-xl z-[8]">
        <div className="h-full flex items-center justify-between">
          <div className="font-bold text-3xl md:text-5xl text-primary font-inter">
            sbm<span className="text-secondary">.</span>
          </div>
          <div className="hidden md:block">
            <ul className="font-sans text-sm font-medium text-secondary tracking-wide flex items-center gap-6 lg:gap-10">
              <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("home")}>Home</li>
              <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("about")}>
                About
              </li>
              <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("experience")}>
                Experience
              </li>
              <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("projects")}>
                Projects
              </li>
              <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("testimonials")}>
                Testimonials
              </li>
              <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("blogs")}>Blogs</li>
              <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("contact")}>
                Contact
              </li>
              {/* <li className="ml-8 hover:text-primary cursor-pointer">
              <Button variant="outlined" color="primary">
                Resume
              </Button>
            </li> */}
            </ul>
          </div>
          <div className="block md:hidden" onClick={() => setIsMenuOpen(true)}>
            <MenuOpenRounded color="primary" />
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="block md:hidden">
          <div
            className="h-screen w-screen fixed top-0 left-0 bg-bgblack opacity-50 z-[9]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></div>

          <div
            className={`h-dvh w-[15rem] fixed top-0 left-0 bg-bggray shadow-xl z-[10] 
                            transform transition-transform duration-500 ease-in-out 
                            ${
                              isMenuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
          >
            <div className="py-3 px-10 shadow-md">
              <p className="font-bold text-3xl text-primary font-inter">
                sbm<span className="text-secondary">.</span>
              </p>
            </div>
            <div className="py-5 px-10">
              <ul className="font-inter text-sm font-medium text-secondary tracking-wide flex flex-col gap-6">
                <li className="active:text-primary cursor-pointer" onClick={() => { handleScroll("home"); setIsMenuOpen(false); }}>Home</li>
                <li className="active:text-primary cursor-pointer" onClick={() => { handleScroll("about"); setIsMenuOpen(false); }}>About</li>
                <li className="active:text-primary cursor-pointer" onClick={() => { handleScroll("experience"); setIsMenuOpen(false); }}>Experience</li>
                <li className="active:text-primary cursor-pointer" onClick={() => { handleScroll("projects"); setIsMenuOpen(false); }}>Projects</li>
                <li className="active:text-primary cursor-pointer" onClick={() => { handleScroll("testimonials"); setIsMenuOpen(false); }}>Testimonials</li>
                <li className="active:text-primary cursor-pointer" onClick={() => { handleScroll("blogs"); setIsMenuOpen(false); }}>Blogs</li>
                <li className="active:text-primary cursor-pointer" onClick={() => { handleScroll("contact"); setIsMenuOpen(false); }}>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
