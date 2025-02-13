import React from "react";
import react from "../assets/blogs/React.png";
import css from "../assets/blogs/CSS-UI.png";
import database from "../assets/blogs/Database.png";
import node from "../assets/blogs/NodeJS.png";

const Blogs = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-xl md:text-3xl font-bold text-primary">BLOGS</p>
        <div className="w-[6rem] md:w-[8rem] border-t-2 border-secondary mt-1 ml-6"></div>
      </div>
      <div className="mt-5">
        <p className="text-xs md:text-base text-secondary tracking-wide">
          I enjoy sharing experiences and insights from my development journey
          through blogs, including the mistakes I've made and how they've fueled
          my growth as an individual. Here are some of my latest articles:
        </p>
        <div>
          <div className="mt-5 w-full border-t-2 border-secondary"></div>
          <a
            href="https://from-procrastination-to-progress.hashnode.dev/into-the-react-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col md:flex-row items-center justify-center hover:bg-bggray cursor-pointer">
              <div className="w-full md:w-2/6 px-4 py-2 flex items-start">
                <img
                  src={react}
                  alt="React Blog"
                  className="object-contain py-2"
                />
              </div>
              <div className="w-full md:w-4/6 px-4">
                <p className="text-primary text-md md:text-xl font-semibold py-2">
                  Into the React Web: From Chaos to Confidence
                </p>
                <p className="text-xs md:text-base text-secondary tracking-wide">
                  Like many budding developers, I procrastinated about starting
                  projects and learning. The sheer number of tools and
                  frameworks left me overwhelmed. My approach was simple yet
                  disastrous...
                </p>
                <p className="text-primary underline hover:font-medium w-fit py-2 text-xs tracking-wider">
                  Read More
                </p>
              </div>
            </div>
          </a>

          <div className="w-full border-t-2 border-secondary"></div>
          <a
            href="https://from-procrastination-to-progress.hashnode.dev/balancing-css-and-ui-libs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col md:flex-row items-center justify-center hover:bg-bggray cursor-pointer">
              <div className="w-full md:w-2/6 px-4 py-2 flex items-start">
                <img src={css} alt="CSS Blog" className="object-contain py-2" />
              </div>
              <div className="w-full md:w-4/6 px-4">
                <p className="text-primary text-md md:text-xl font-semibold py-2">
                  Balancing the Art of CSS and UI Libraries
                </p>
                <p className="text-xs md:text-base text-secondary tracking-wide">
                  CSS and UI libraries often feel like a tangled web of
                  complexity, but they hold the power to create stunning user
                  interfaces. I’d often find myself stuck on seemingly minor
                  issues like...
                </p>
                <p className="text-primary underline hover:font-medium w-fit py-2 text-xs tracking-wider">
                  Read More
                </p>
              </div>
            </div>
          </a>

          <div className="w-full border-t-2 border-secondary"></div>
          <a
            href="https://from-procrastination-to-progress.hashnode.dev/navigating-databases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col md:flex-row items-center justify-center hover:bg-bggray cursor-pointer">
              <div className="w-full md:w-2/6 px-4 py-2 flex items-start">
                <img
                  src={database}
                  alt="Database Blog"
                  className="object-contain py-2"
                />
              </div>
              <div className="w-full md:w-4/6 px-4">
                <p className="text-primary text-md md:text-xl font-semibold py-2">
                  Navigating Databases: From SQL to NoSQL
                </p>
                <p className="text-xs md:text-base text-secondary tracking-wide">
                  In the world of development, understanding which database
                  system to use for a project can make a huge difference in
                  performance, scalability, and flexibility. When I first
                  started working with SQL...
                </p>
                <p className="text-primary underline hover:font-medium w-fit py-2 text-xs tracking-wider">
                  Read More
                </p>
              </div>
            </div>
          </a>

          <div className="mb-2 w-full border-t-2 border-secondary"></div>
          <p className="text-xs px-4 text-secondary tracking-wide italic">
            Explore more of my writings on{" "}
            <a
              href="https://hashnode.com/@samana-scripts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-primary cursor-pointer">Hashnode</span>
            </a>{" "}
            or{" "}
            <a
              href="https://dev.to/samanamirza_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-primary cursor-pointer">Dev.to</span>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
