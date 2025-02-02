import React from "react";
import { Button, TextField } from "@mui/material";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import hashnode from "../assets/hashnode.svg";

const Contact = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-xl md:text-3xl font-bold text-primary">CONTACT</p>
        <div className="w-[6rem] md:w-[8rem] border-t-2 border-secondary mt-1 ml-6"></div>
      </div>
      <div className="mt-5">
        <p className="text-xs md:text-base text-secondary tracking-wide mb-4">
          Feel free to reach out if you are interested in connecting with me.
        </p>
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
            <div>
              <TextField required label="Full Name" size="small" fullWidth />
            </div>
            <div>
              <TextField required label="Mail" size="small" fullWidth />
            </div>
            <div>
              <TextField
                label="Message"
                multiline
                rows={3}
                size="small"
                fullWidth
              />
            </div>
            <div className="w-full flex flex-row-reverse">
              <Button color="primary" variant="contained" size="small">
                Send
              </Button>
            </div>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-1/2">
            <div className="w-full h-full shadow-card rounded-md bg-bggray flex flex-col items-center justify-center py-6 md:py-0">
              <div>
                <p className="text-primary text-md md:text-xl font-semibold pb-2 text-center">
                  Contact Details
                </p>
                <a href="tel:+919354027834">
                  <p className="text-xs md:text-base text-secondary tracking-wide text-center cursor-pointer">
                    +91 9354027834
                  </p>
                </a>
                <a href="mailto:samana.butool.mirza10@gmail.com">
                  <p className="text-xs md:text-base text-secondary tracking-wide text-center cursor-pointer">
                    samana.butool.mirza10@gmail.com
                  </p>
                </a>
                <div className="w-full flex md:hidden gap-4 items-center justify-center pt-2">
                  <img src={linkedin} alt="linkedin" className="w-5 h-5" />
                  <img src={github} alt="github" className="w-5 h-5" />
                  <img src={hashnode} alt="hashnode" className="w-5 h-5" />
                </div>
              </div>
              <div className="pt-8">
                <p className="text-primary text-md md:text-xl font-semibold pb-2 text-center">
                  Address
                </p>
                <p className="text-xs md:text-base text-secondary tracking-wide text-center">
                  Preet Vihar, Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
