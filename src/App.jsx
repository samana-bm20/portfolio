import React from "react";
import Navbar from "./components/Navbar";
import FixedContact from "./components/FixedContact";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-[#080b0e] h-dvh w-dvh">
      <Navbar />
      <FixedContact />
      <div id="content" className="mx-[10rem]">
        <div id="home" className="m-16">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
