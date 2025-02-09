import React, { useState } from "react";
import { Button, TextField, Snackbar, Alert } from "@mui/material";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import hashnode from "../assets/hashnode.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid =
    fullname.trim() !== "" && message.trim() !== "" && isValidEmail(email);

  const handleSubmit = () => {
    const serviceId = "service_kjhvrer";
    const templateId = "template_9m4vig8";
    const publicKey = "xu9W4sihMjJsW-KyH";

    const emailParams = {
      from_name: fullname,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully.", response);

        setSnackbar({
          open: true,
          message: "Email sent successfully!",
          severity: "success",
        });

        setFullname("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending the email.", error);

        setSnackbar({
          open: true,
          message: "Failed to send email. Please try again.",
          severity: "error",
        });
      });
  };

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
              <TextField
                required
                label="Full Name"
                size="small"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                fullWidth
              />
            </div>
            <div>
              <TextField
                required
                label="Mail"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={email !== "" && !isValidEmail(email)}
                helperText={
                  email !== "" && !isValidEmail(email)
                    ? "Enter a valid email"
                    : ""
                }
                fullWidth
              />
            </div>
            <div>
              <TextField
                required
                label="Message"
                multiline
                rows={3}
                size="small"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
              />
            </div>
            <div className="w-full flex flex-row-reverse">
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={handleSubmit}
                disabled={!isFormValid}
              >
                Send
              </Button>
            </div>
          </div>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={4000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={() => setSnackbar({ ...snackbar, open: false })}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>

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
                  <a
                    href="https://www.linkedin.com/in/contactsamana10/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/samana-bm20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github" className="w-5 h-5" />
                  </a>
                  <a
                    href="https://hashnode.com/@samana-scripts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={hashnode} alt="hashnode" className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="pt-8">
                <p className="text-primary text-md md:text-xl font-semibold pb-2 text-center">
                  Address
                </p>
                <p className="text-xs md:text-base text-secondary tracking-wide text-center">
                  New Delhi, Delhi, India
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
