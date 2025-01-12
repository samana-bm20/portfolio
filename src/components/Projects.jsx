import React from "react";
import hrms from "../assets/projects/hrms.png";
import lms from "../assets/projects/lms.png";
import leads from "../assets/projects/lms-leads.png";

const Projects = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-xl md:text-3xl font-bold text-primary">PROJECTS</p>
        <div className="w-[6rem] md:w-[8rem] border-t-2 border-secondary mt-1 ml-6"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-10 h-full">
        <div className="flex justify-center lg:w-1/2">
          <img src={hrms} alt="HRMS" className="object-contain" />
        </div>
        <div className="lg:w-1/2 ml-0 lg:ml-4 flex flex-col justify-center">
          <p className="mt-4 lg:mt-0 text-primary text-md md:text-xl font-bold text-left lg:text-right">
            Human Resource Management System
          </p>
          <div className="mt-4 bg-bggray rounded w-full shadow-card p-3">
            <p className="text-xs md:text-base text-secondary text-left lg:text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, consectetur explicabo error aut inventore nihil,
              deserunt vel commodi reiciendis dolorem aperiam quidem corporis
              impedit facilis eveniet ex sint tempore iusto.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end gap-2 mt-4">
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">React</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">Node</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">Express</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">
                SQL Server
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">Core UI</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">JWT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-between mt-10 h-full">
        <div className="flex justify-center lg:w-1/2">
          <img src={leads} alt="LMS" className="object-contain" />
        </div>
        <div className="lg:w-1/2 mr-0 lg:mr-4 flex flex-col justify-center">
          <p className="mt-4 lg:mt-0 text-primary text-md md:text-xl font-bold">
            Lead Management System
          </p>
          <div className="mt-4 bg-bggray rounded w-full shadow-card p-3">
            <p className="text-xs md:text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, consectetur explicabo error aut inventore nihil,
              deserunt vel commodi reiciendis dolorem aperiam quidem corporis
              impedit facilis eveniet ex sint tempore iusto.
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">React</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">Node</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">Express</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">MongoDB</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">MUI</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-[0.6rem] md:text-sm">Socket IO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
