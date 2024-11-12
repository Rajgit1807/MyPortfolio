'use client'
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ProjectProps {
    image: StaticImageData;
    title: string;
    content: React.ReactNode; 
    link:string;// Accept content as a component
  }
  
  const Project: React.FC<ProjectProps> = ({image,title,content,link}) => {
  
    const [show,setShow] = useState(false);
  
    return (
      <div className="flex project justify-between items-center w-full" >
            
        <div className="box w-1/2 cursor-pointer relative" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
  
        <div className={`flex flex-col max-w-[670px] justify-center rounded-lg bg-[#000000] pro-div p-3 sm:p-5   ${show && "blur-[2px]"}`}>
          
          <div className={`flex shadow-lg rounded-lg justify-center items-center shadow-red-700 project-img`}>
     <Image
      alt="Laptop Image"
      src={image}
      className="rounded-md project-img "
    />
        </div>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer"
    className={`${
      show ? "opacity-80 scale-100" : "opacity-0 scale-95"
    }pointer-events-none transition-opacity duration-300 absolute bg-black top-0 w-full h-full rounded-lg flex items-center justify-center`}
  >      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={`${show?"w-20 h-20":"w-16 h-16"} transition-all duration-300 tabler-icon tabler-icon-external-link m-auto size-10 stroke-white scale-50 group-hover:scale-100`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link m-auto size-10 stroke-white transition-all scale-50 group-hover:scale-100"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
        </a> 
        </div>
  
        <div className="box w-1/2 ps-[8%]">
  <h2 className="text-white font-bold text-2xl tracking-wide">
            {title}
          </h2>
          <p className="text-[#FF2B51] text-base mt-3 font-semibold text-wrap ">
         
            {content}
          </p>
        </div>
      </div>
    );
  };

  export default Project;