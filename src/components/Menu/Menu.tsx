"use client"
import { useState } from "react"

const Menu = () => {
  const [elClick, setElClick] = useState("home");

  return (
<div className="fixed bottom-7 md:bottom-9 lg:bottom-12 left-1/2 transform -translate-x-1/2 w-fit">
<div className="border border-[#FF2B51] bg-[#2b0a0a] rounded-lg text-white flex gap-[6px] md:gap-[7px] lg:gap-2 px-[5px] py-[5px] md:px-[6px] md:py-[6px] lg:px-2 lg:py-2 font-semibold text-[10px] md:text-[12px] lg:text-[14px]">
        <a href="#home"
          className={`${elClick === "home" ? "bg-[#000000] text-[#FF2B51]" : ""} hover:bg-[#000000] hover:text-[#FF2B51] rounded-md px-[6px] py-[5px] md:px-[7.5px] md:py-[6.5px] lg:px-3 lg:py-2 cursor-pointer`}
          onClick={() => setElClick("home")}
        >
          Home
        </a>
        <a
            href="#about"
          className={`${elClick === "about" ? "bg-[#000000] text-[#FF2B51]" : ""} hover:bg-[#000000] hover:text-[#FF2B51] rounded-md px-[6px] py-[5px] md:px-[7.5px] md:py-[6.5px] lg:px-3 lg:py-2 cursor-pointer`}
          onClick={() => setElClick("about")}
        >
          About
        </a>
        <a  href="#projects"        
          className={`${elClick === "projects" ? "bg-[#000000] text-[#FF2B51]" : ""} hover:bg-[#000000] hover:text-[#FF2B51] rounded-md px-[6px] py-[5px] md:px-[7.5px] md:py-[6.5px] lg:px-3 lg:py-2 cursor-pointer`}
          onClick={() => setElClick("projects")}
        >
          Projects
        </a>
        <a href="#contact"
          className={`${elClick === "contact" ? "bg-[#000000] text-[#FF2B51]" : ""} hover:bg-[#000000] hover:text-[#FF2B51] rounded-md px-[6px] py-[5px] md:px-[7.5px] md:py-[6.5px] lg:px-3 lg:py-2 cursor-pointer`}
          onClick={() => setElClick("contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
