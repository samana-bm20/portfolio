import React from "react";
import mllogo from "../assets/mllogo.png";

const Experience = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-xl md:text-3xl font-bold text-primary">EXPERIENCE</p>
        <div className="w-[6rem] md:w-[8rem] border-t-2 border-secondary mt-1 ml-6"></div>
      </div>
      <div>
        <p className="text-md md:text-lg mt-5 font-semibold text-secondary">
          Software Developer{" "}
          <span className="text-primary cursor-pointer">
            <a href="http://www.mlinfomap.com">@ML Infomap Pvt Ltd</a>
          </span>
        </p>
        <p className="text-xs md:text-sm italic text-secondary">
          February 2024 - Present
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-full lg:w-2/3 mt-5 ml-4">
          {/* <div
            className="absolute inset-0 bg-cover bg-center md:bg-none"
            style={{
              backgroundImage: `url(${mllogo})`,
              opacity: 0.5, // Opacity applied only to background
              // zIndex: -1, // Keeps it behind the content
            }}
          ></div> */}
          <ul className=" list-square marker:text-primary">
            <li className="text-xs md:text-base text-secondary tracking-wide">
              Built and managed fast, responsive web applications using{" "}
              <span className="text-primary">Javascript (React.js </span>
              and <span className="text-primary">Node.js)</span>, focusing on
              creating smooth user experiences with optimized and reliable code.
            </li>
            <li className="text-xs md:text-base text-secondary tracking-wide mt-3">
              Designed and developed{" "}
              <span className="text-primary">RESTful APIs</span> that made data
              sharing seamless, improving how quickly and efficiently
              information flows between systems.
            </li>
            <li className="text-xs md:text-base text-secondary tracking-wide mt-3">
              Worked closely with a team of 8-10 members to deliver advanced{" "}
              <span className="text-primary">GIS solutions</span> using{" "}
              <span className="text-primary">ArcGIS</span> for government based
              projects, enabling users to see real-time, location-based data and
              meet client needs effectively.
            </li>
            <li className="text-xs md:text-base text-secondary tracking-wide mt-3">
              Improved database performance by optimizing complex{" "}
              <span className="text-primary">SQL Server </span>
              queries and introducing{" "}
              <span className="text-primary">MongoDB</span> for scalable data
              storage, ensuring faster and more reliable software.
            </li>
            <li className="text-xs md:text-base text-secondary tracking-wide mt-3">
              Wrote detailed project documentation like{" "}
              <span className="text-primary">SRS, SDD, STD,</span> and{" "}
              <span className="text-primary">RFP, </span>
              making development workflows clear and implementation strategies
              easy to follow.
            </li>
            <li className="text-xs md:text-base text-secondary tracking-wide mt-3">
              Conducted thorough <span className="text-primary">testing</span>{" "}
              and <span className="text-primary">debugging</span> to deliver
              robust, error-free applications that users can trust.
            </li>
          </ul>
        </div>
        <div className="hidden lg:block w-1/3 h-full">
          <img
            src={mllogo}
            alt="ML Infomap Pvt Ltd"
            className="object-cover w-full h-full opacity-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
