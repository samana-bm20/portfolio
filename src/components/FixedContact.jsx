import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import hashnode from "../assets/hashnode.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import message from "../assets/message.svg";
import { Tooltip } from "@mui/material";

const FixedContact = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col items-center fixed top-[10rem] left-10">
        <div className="h-[8rem] border-l-2 border-secondary mt-6"></div>
        <ul className="text-white items-center">
          <a
            href="https://www.linkedin.com/in/contactsamana10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
              <Tooltip title="LinkedIn" placement="right-start" arrow>
                <img src={linkedin} alt="linkedin" />
              </Tooltip>
            </li>
          </a>
          <a
            href="https://github.com/samana-bm20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
              <Tooltip title="Github" placement="right-start" arrow>
                <img src={github} alt="github" />
              </Tooltip>
            </li>
          </a>
          <a
            href="https://hashnode.com/@samana-scripts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
              <Tooltip title="Hashnode" placement="right-start" arrow>
                <img src={hashnode} alt="hashnode" />
              </Tooltip>
            </li>
          </a>
        </ul>
        <div className="h-[8rem] border-l-2 border-secondary mt-6"></div>
      </div>

      <div className="flex flex-col items-center fixed top-[10rem] right-10">
        <div className="h-[8rem] border-l-2 border-secondary mt-6"></div>
        <ul className="text-white items-center">
          <a href="tel:+919354027834">
            <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
              <Tooltip title="Call" placement="left-start" arrow>
                <img src={phone} alt="phone" />
              </Tooltip>
            </li>
          </a>
          <a href="mailto:samana.butool.mirza10@gmail.com">
            <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
              <Tooltip title="Mail" placement="left-start" arrow>
                <img src={mail} alt="mail" />
              </Tooltip>
            </li>
          </a>
          <a href="sms:+919354027834">
            <li className="mt-6 cursor-pointer duration-300 hover:-translate-y-1">
              <Tooltip title="Message" placement="left-start" arrow>
                <img src={message} alt="message" />
              </Tooltip>
            </li>
          </a>
        </ul>
        <div className="h-[8rem] border-l-2 border-secondary mt-6"></div>
      </div>
    </div>
  );
};

export default FixedContact;
