import React from "react";
import hrms from "../assets/projects/hrms.png";
import lms from "../assets/projects/lms.png";
import leads from "../assets/projects/lms-leads.png";
import cpcl from "../assets/projects/cpcl.png";

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
            <p className="text-xs md:text-base text-secondary tracking-wide text-left lg:text-right">
              The Human Resource Management System streamlines employee
              management by tracking attendance, leave requests, official
              duty/wfh records, and providing a visual calendar for attendance.
              It maintains employee records, offers admin-side controls, and
              generates detailed monthly and annual analytics reports on
              attendance, working hours, and leaves.
            </p>
          </div>
          <div className="grid grid-cols-3 md:flex lg:grid xl:flex justify-start lg:justify-end gap-2 mt-4">
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                React
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                Node
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                Express
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                SQL Server
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                Core UI
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">JWT</p>
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
            <p className="text-xs md:text-base text-secondary tracking-wide">
              The Lead Management System efficiently organizes potential leads
              with bulk addition, follow-up tracking, and status updates. It
              enables users to set reminders and tasks, providing timely
              notifications and email alerts. The dashboard offers summarized
              analytics, upcoming task reminders, and admin features to manage
              products, users, and a robust notification system.
            </p>
          </div>
          <div className="grid grid-cols-3 md:flex lg:grid xl:flex gap-2 mt-4">
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                React
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                Node
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                Express
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                MongoDB
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">MUI</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                Socket IO
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-10 h-full">
        <div className="flex justify-center lg:w-1/2">
          <img src={cpcl} alt="HRMS" className="object-contain" />
        </div>
        <div className="lg:w-1/2 ml-0 lg:ml-4 flex flex-col justify-center">
          <p className="mt-4 lg:mt-0 text-primary text-md md:text-xl font-bold text-left lg:text-right">
            Centralized Safety Monitoring System
          </p>
          <div className="mt-4 bg-bggray rounded w-full shadow-card p-3">
            <p className="text-xs md:text-base text-secondary tracking-wide text-left lg:text-right">
              The Centralized Safety Monitoring System for CPCL streamlines
              safety operations with role-based access for requesting and
              issuing permits along with other activities like radiography, fire
              water network, etc. It features an admin panel for user and role
              management, a map dashboard visualizing safety metrics and risk
              scores, a main dashboard offering analytics, and comprehensive
              report generation and alert notifications for informed decision-making.
            </p>
          </div>
          <div className="grid grid-cols-3 md:flex lg:grid xl:flex justify-start lg:justify-end gap-2 mt-4">
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                React
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                Node
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                Tailwind
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                SQL Server
              </p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">MUI</p>
            </div>
            <div className=" rounded-full border-primary border-2 px-1 md:px-2 py-0 md:py-1">
              <p className="text-primary text-xs md:text-sm text-center">
                ArcGIS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
