'use client'
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import "./Projects.css";

interface ProjectProps {
    image: StaticImageData;
    title: string;
    content: React.ReactNode; 
    link:string;
  }
  
  const Project2: React.FC<ProjectProps> = ({image,title,content,link}) => {
  
    const [show,setShow] = useState(false);
  
    return (
      <div className={`flex project justify-between items-center w-full transition-transform duration-300 ease-in-out ${show && "scale-105"} `} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            
        <div className="box cursor-pointer" >
  
        <div className={`flex flex-col max-w-[670px] justify-center rounded-lg bg-[#000000] pro-div2 p-2 sm:p-3`}>
          
          <div className={`flex rounded-md justify-center items-center project-img`} >
          <a 
  href={link} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="flex justify-center items-center rounded-md overflow-hidden"
>
  <Image
    alt="Laptop Image"
    src={image}
    className={`rounded-md project-img transition-transform duration-300 ease-in-out ${show && "scale-110"}`}
  />
</a>

        </div>
        <div className="box mt-5">
  <h2 className="text-white font-bold text-lg tracking-wide">
            {title}
          </h2>
          <p className="text-[#FF2B51]  text-[15px]  mt-3 font-semibold text-wrap line-clamp-4">
         
            {content}
          </p>
        </div>
        </div>
       
       
        </div>
  
  
      </div>
    );
  };

  export default Project2;