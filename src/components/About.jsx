import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.webp";
import sql from "../assets/skills/sql server.png";
import mongo from "../assets/skills/mongo.svg";
import staruml from "../assets/skills/staruml.png";
import drawio from "../assets/skills/drawio.png";
import figma from "../assets/skills/figma.png";
import canva from "../assets/skills/canva.webp";
import tailwind from "../assets/skills/tailwind.png";
import arcgis from "../assets/skills/arcgis.png";
import java from "../assets/skills/java.png";
import github from "../assets/skills/github.webp";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="flex items-center">
            <p className="text-2xl font-semibold text-primary">About Me</p>
            <div className="w-[8rem] border-t-2 border-secondary mt-1 ml-6"></div>
          </div>
          <p className="mt-5 mb-2 text-xs md:text-base text-secondary tracking-wide">
            Hello! My <span className="italic">(full)</span>name is{" "}
            <span className="text-primary">Samana Butool Mirza</span>. I am a
            developer by profession and a creator at heart. I love to build
            solutions that bridge the gap between design and development.
          </p>
          <p className="my-2 text-xs md:text-base text-secondary tracking-wide">
            My journey into{" "}
            <span className="text-primary">Computer Science</span> began as a
            bold step in a family where everyone had a biology background. With
            zero guidance, it’s been a thrilling and transformative learning
            experience ever since. I completed my schooling at{" "}
            <span className="text-primary">Mater Dei School</span> and graduated
            with BTech in Computer Science Engineering from{" "}
            <span className="text-primary">
              APJ Abdul Kalam Technical University
            </span>{" "}
            in June 2024.
          </p>
          <p className="my-2 text-xs md:text-base text-secondary tracking-wide">
            While excelling in academics, I actively participated and won
            competitions in design, theatre, speaking, and sports, as well as
            organized and volunteered for various college events—because{" "}
            <span className="italic">
              "All work and no play makes Jack a dull{" "}
              <span className="line-through">boy</span> girl."
            </span>
          </p>
          <p className="my-2 text-xs md:text-base text-secondary tracking-wide">
            When I’m not coding, you’ll find me exploring my creative side
            through designing, doing yoga, reading novels, or simply sitting by
            the mountains.
          </p>
        </div>
        <div className="ml-0 md:ml-8">
          <p className="my-2 mt-2 md:mt-12 text-xs md:text-base text-secondary tracking-wide">
            Here are a few tools and technologies I've been working with
            recently:
          </p>
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={html}
                alt="react"
                className="w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                HTML
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={css}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                CSS
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={js}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                JS
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={react}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-10 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                React
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={node}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Node
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={express}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Express
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={sql}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.5rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                SQL Server
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={mongo}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                MongoDB
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={staruml}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                StarUML
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={drawio}
                alt="react"
                className=" w-7 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                DrawIO
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={canva}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Canva
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={figma}
                alt="react"
                className=" w-6 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Figma
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={tailwind}
                alt="react"
                className="w-8 md:w-12 h-6 md:h-8 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide pt-3">
                Tailwind
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={arcgis}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                ArcGIS
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={java}
                alt="react"
                className=" w-7 md:w-15 h-7 md:h-12 m-1"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                Java
              </p>
            </div>
            <div className="bg-bggray rounded-md p-2 flex flex-col items-center justify-center w-4[rem] md:w-[6rem] shadow-card">
              <img
                src={github}
                alt="react"
                className=" w-8 md:w-15 h-7 md:h-12 m-1 rounded-md"
              />
              <p className="text-[0.6rem] md:text-[0.8rem] font-medium text-secondary tracking-wide">
                GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;