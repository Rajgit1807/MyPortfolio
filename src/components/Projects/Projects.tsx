import React from "react";
import Title from "../common/Title";
import Image from "next/image";
import pitup from "../assets/pitup.png";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <div className="flex justify-center w-full" >
    <div className="flex flex-col w-full max-w-[1800px] items-center mt-20 sm:mt-28 pt-4 sm:pt-4" id="projects">
      <Title
        title="PROJECTS"
        content="Here are some personal projects and client projects that I created during my Internship"
      />
      <div className="w-full sm:px-16 mt-16 sm:mt-24">
        <Project />
      </div>
    </div>
    </div>

  );
};

export default Projects;

const Project: React.FC = () => {
  return (
    <div className="flex project justify-between items-center w-full">
      <div className="box w-1/2">

      <div className="flex flex-col max-w-[670px] justify-center relative rounded-lg bg-[#000000] pro-div p-3 sm:p-5">
        
        <div className="flex shadow-lg rounded-lg justify-center items-center shadow-red-700 project-img">
   <Image
    alt="Laptop Image"
    src={pitup}
    className="rounded-md project-img "
  />
      </div>
      </div>
      </div>

      <div className="box w-1/2 ps-[8%]">
<h2 className="text-white font-bold text-2xl tracking-wide">
          Prompt It Up
        </h2>
        <p className="text-[#FF2B51] text-base mt-3 font-semibold text-wrap">
        <span className="text-white">Prompt It Up</span>{" "}is a comprehensive AI content platform tailored for
          enthusiasts and professionals, offering a curated collection of AI
          tools, task-specific prompts, engaging reels, and educational YouTube
          videos. I collaboratively developed this AI-focused website, utilizing{" "}
          <span className="text-white">ReactJS</span> and{" "}
          <span className="text-white">TailwindCSS</span> for the front end and{" "}
          <span className="text-white">SQL</span> and{" "}
          <span className="text-white">.NET</span> for the back end.
        </p>
      </div>
    </div>
  );
};
