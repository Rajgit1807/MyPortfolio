"use client"
import React, { useState } from "react";
import Title from "../common/Title";
import Image, { StaticImageData } from "next/image";
import "./Projects.css";
import { ProjectData } from "./ProjectData";
import Project from "./Project";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full" >
    <div className="flex flex-col w-full max-w-[1800px] items-center mt-20 sm:mt-28 pt-4 sm:pt-4" id="projects">
      <Title
        title="PROJECTS"
        content="Here are some personal projects and client projects that I created during my Internship"
      />
      <div className="w-full sm:px-16 mt-16 sm:mt-24 flex flex-col gap-20">
        {ProjectData.map((item,index)=>(
        <Project key ={index} image={item.image} title={item.title} content = {item.content} link={item.link}/>
        ))}
      </div>
    </div>
    <div className="w-full flex items-center justify-center mt-16 h-16">
      <Link  href="/project">
      <button  className="text-black w-28 h-10 rounded-md bg-[#ffffff] font-semibold text-[18px] hover:bg-[#FF2B51] hover:text-white transition-all duration-300 hover:w-[120px] hover:h-11 hover:text-[19px] hover:shadow-neutral-200 hover:shadow-sm" >View All</button>
      </Link>
    </div>
    </div>

  );
};

export default Projects;


