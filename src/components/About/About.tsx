import React from "react";
import "./About.css"
import Title from "../common/Title";
interface CardProps {
  txt: string;
}

const Card: React.FC<CardProps> = ({ txt }) => {
  return (
    <div className="flex items-center flex-col">
      <div className="hidden lg:block rounded-full w-[6px] h-[6px] bg-white">
      </div>
    <div className="flex flex-col items-center animate-pendulum">
      <div className="hidden lg:block w-[1px] bg-[#FF2B51] h-10">
      </div>
    <div className="px-3 py-[5px] md:px-5 md:py-2 text-[15px] md:text-[16px] bg-black w-fit rounded-[5px] cursor-pointer border border-white text-[#FF2B51] font-semibold hover:border-[#E40037] hover:text-white">
    {txt}
  </div>  
  </div>
  </div>

  );
};

const skills = [
  "React",
  "Tailwind CSS",
  "Ionic",
  "React Native",
  "Bootstrap",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "Git",
  "Github",
  "Responsive Design",
  "C++",
  "Python",
  "Redux",
  "REST API"
];

const About: React.FC = () => {
  return (
    <div className="flex justify-center w-full" >
    <div className="flex flex-col items-center w-full max-w-[1800px] mt-24 sm:mt-32 md:mt-44 pt-4 sm:pt-4 md:pt-4 " id="about">
     <Title title="ABOUT ME" content="Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology." />
      <div className="knowMe w-full md:px-5 lg:px-12 mt-20 sm:mt-24">
        <div>
          <h2 className="text-white font-bold text-2xl tracking-wide">
            Get to know me!
          </h2>
          <p className="text-white md:text-[17px] lg:text-lg mt-4 md:mt-7 font-semibold">
            I'm a
            <span className="text-[#FF2B51] mx-[6px]">
              Full Stack Developer
            </span>
            with a strong focus on building and managing both the front-end and
            back-end of websites and web applications, ensuring the success and
            performance of the overall product.
          </p>
          <p className="text-white md:text-[17px] lg:text-lg mt-4 md:mt-7 font-semibold">
            With 1 year of experience in front-end development using
            <span className="text-[#FF2B51] mx-[6px]">React</span> and
            <span className="text-[#FF2B51] ml-[6px]">Tailwind CSS</span>, I
            have created dynamic, responsive, and user-friendly interfaces.
            Additionally, I am proficient in backend technologies like
            <span className="text-[#FF2B51] ml-[6px]">Node.js</span>,
            <span className="text-[#FF2B51] ml-[6px]">MongoDB</span>, and
            <span className="text-[#FF2B51] ml-[6px]">Express.js</span>, which
            allows me to handle the complete development lifecycle efficiently.
          </p>
          <p className="text-white md:text-[17px] lg:text-lg mt-4 md:mt-7 font-semibold">
            Feel free to check out some of my
            <span className="text-[#FF2B51] mx-[6px]">Projects</span> in the
            Projects section. I'm always open to new opportunities where I can
            contribute, learn, and grow. If you have a role that matches my
            skills and experience, or if you'd like to connect over web
            development and programming, feel free to reach out to me on
            <span className="text-[#FF2B51] mx-[6px] underline">LinkedIn</span>!
          </p>
        </div>
        <div className="skills">
          <h2 className=" text-white font-bold text-2xl tracking-wide">
            My Skills
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-2 md:gap-4">
            {skills.map((skill, index) => (
              <Card key={index} txt={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
