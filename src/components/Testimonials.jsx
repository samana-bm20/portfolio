import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-xl md:text-3xl font-bold text-primary">
          TESTIMONIALS
        </p>
        <div className="w-[6rem] md:w-[8rem] border-t-2 border-secondary mt-1 ml-6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        <div className="flex flex-col p-5 bg-bggray rounded-md shadow-card">
          <p className="flex-grow text-xs md:text-base text-secondary tracking-wide italic">
            "Samana has demonstrated exceptional skills in full stack
            development, especially React, which has contributed to the success
            of our projects. She shows great potential and professionalism,
            making her a valuable asset."
          </p>
          <p className="mt-4 text-xs md:text-base font-medium text-primary tracking-wide">
            MR. YOGENDRA SINGH
          </p>
          <p className="text-sm md:text-md font-medium text-primary tracking-wide leading-tight">
            Sr. Software Programmer @ML Infomap Pvt Ltd
          </p>
        </div>

        <div className="flex flex-col p-5 bg-bggray rounded-md shadow-card">
          <p className="flex-grow text-xs md:text-base text-secondary tracking-wide italic">
            "Samana has demonstrated exceptional skills in full stack
            development, which has contributed to the success of our projects.
            She shows great potential and professionalism, making her a valuable
            asset."
          </p>
          <p className="mt-4 text-xs md:text-base font-medium text-primary tracking-wide">
            MR. AKASH TRIPATHI
          </p>
          <p className="text-sm md:text-md font-medium text-primary tracking-wide leading-tight">
            Sr. Software Engineer @Amantya Technologies
          </p>
        </div>

        <div className="flex flex-col p-5 bg-bggray rounded-md shadow-card">
          <p className="flex-grow text-xs md:text-base text-secondary tracking-wide italic">
            "Samana has consistently demonstrated academic excellence while
            actively engaging in extracurricular activites. Her dedication,
            initiative in organizing events, and ability to lead teams
            effectively highlight her well-rounded capabilities."
          </p>
          <p className="mt-4 text-xs md:text-base font-medium text-primary tracking-wide">
            MR. MANDEEP SINGH KATRE
          </p>
          <p className="text-sm md:text-md font-medium text-primary tracking-wide leading-tight">
            Asst. Professor @Inderprastha Engineering College
          </p>
        </div>

        <div className="flex flex-col p-5 bg-bggray rounded-md shadow-card">
          <p className="flex-grow text-xs md:text-base text-secondary tracking-wide italic">
            "Samana has demonstrated exceptional skills in full stack
            development, which has contributed to the success of our projects.
            She shows great potential and professionalism, making her a valuable
            asset."
          </p>
          <p className="mt-4 text-xs md:text-base font-medium text-primary tracking-wide">
            MRS. NEHA GHAI
          </p>
          <p className="text-sm md:text-md font-medium text-primary tracking-wide leading-tight">
            Computer Science Faculty @Mater Dei School
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
