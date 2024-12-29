import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import hashnode from "../assets/hashnode.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import message from "../assets/message.svg";

const FixedContact = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col items-center fixed top-[10rem] left-10">
        <div className="h-[8rem] border-l-2 border-secondary mt-6"></div>
        <ul className="text-white items-center">
          <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
            <img src={github} alt="github" />
          </li>
          <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
            <img src={linkedin} alt="linkedin" />
          </li>
          <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
            <img src={hashnode} alt="hashnode" />
          </li>
        </ul>
        <div className="h-[8rem] border-l-2 border-secondary mt-6"></div>
      </div>

      <div className="flex flex-col items-center fixed top-[10rem] right-10">
        <div className="h-[8rem] border-l-2 border-secondary mt-6"></div>
        <ul className="text-white items-center">
          <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
            <img src={phone} alt="phone" />
          </li>
          <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
            <img src={mail} alt="mail" />
          </li>
          <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
            <img src={message} alt="message" />
          </li>
        </ul>
        <div className="h-[8rem] border-l-2 border-secondary mt-6"></div>
      </div>
    </div>
  );
};

export default FixedContact;
