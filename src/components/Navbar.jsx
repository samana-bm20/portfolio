import React from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen h-15 md:h-20 bg-bggray text-2xl font-bold py-3 px-14 shadow-xl">
      <div className="h-full flex items-center justify-between">
        <div className="font-bold text-3xl md:text-5xl text-primary font-inter">
          sbm<span className="text-secondary">.</span>
        </div>
        <div className="hidden md:block">
          <ul className="font-sans text-sm font-medium text-secondary tracking-wide flex items-center">
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="ml-8 hover:text-primary cursor-pointer">
              Experience
            </li>
            <li className="ml-8 hover:text-primary cursor-pointer">Projects</li>
            <li className="ml-8 hover:text-primary cursor-pointer">Contact</li>
            <li className="ml-8 hover:text-primary cursor-pointer">
              <Button variant="outlined" color="primary">
                Resume
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
