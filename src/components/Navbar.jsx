import React from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="w-dvh h-20 bg-[#11171d] text-2xl font-bold py-3 px-10 shadow-xl">
      <div className="h-full flex items-center justify-between">
        <div className="font-bold text-5xl text-[#66fcf1] font-inter">
          sbm<span className="text-[#c5c6c7]">.</span>
        </div>
        <div>
          <ul className="font-sans text-sm font-medium text-[#c5c6c7] tracking-wide flex items-center">
            <li className="hover:text-[#66fcf1] cursor-pointer">About</li>
            <li className="ml-8 hover:text-[#66fcf1] cursor-pointer">
              Experience
            </li>
            <li className="ml-8 hover:text-[#66fcf1] cursor-pointer">
              Projects
            </li>
            <li className="ml-8 hover:text-[#66fcf1] cursor-pointer">
              Contact
            </li>
            <li className="ml-8 hover:text-[#66fcf1] cursor-pointer">
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
