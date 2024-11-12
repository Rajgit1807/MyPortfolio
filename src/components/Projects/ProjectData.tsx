import forfend from "../assets/forfend.png";
import pritup from "../assets/promptituuup.png";
import socialOut from "../assets/socialout.png";

export const ProjectData = [
  {
    image: pritup,
    title: "Prompt It Up",
    content: (
      <>
        <span className="text-white">Prompt It Up</span> is a comprehensive AI
        content platform tailored for enthusiasts and professionals, offering a
        curated collection of AI tools, task-specific prompts, engaging reels,
        and educational YouTube videos. I collaboratively developed this
        AI-focused website, utilizing{" "}
        <span className="text-white">ReactJS</span> and{" "}
        <span className="text-white">TailwindCSS</span> for the front end and{" "}
        <span className="text-white">SQL</span> and{" "}
        <span className="text-white">.NET</span> for the back end.
      </>
    ),
    link: "https://prompitup.com/ai-content/videos",
  },
  {
    image: forfend,
    title: "Forfend",
    content: (
      <>
        Forfend is a robust, user-friendly email security web application bulit
        using <span className="text-white">ReactJS</span> and{" "}
        <span className="text-white">TailwindCSS</span> designed to protect
        individuals and businesses from phishing, spam, and other email-based
        threats. The platform provides secure email management features. It
        leverages cutting-edge encryption technologies to safeguard email
        communications and prevent unauthorized access.
      </>
    ),
    link: "https://forfend.netlify.app/",
  },
  {
    image: socialOut,
    title: "Social Out",
    content: (
      <>
        <span className="text-white">Social Out</span> is an event organizing platform that simplifies
        the process of hosting, discovering, and managing events. It offers a
        seamless user experience through a responsive website and two
        cross-platform mobile apps, designed for event organizers and
        participants alike. <span className="text-white">Social Out</span> provides the tools to create,
        promote, and manage events efficiently.
      </>
    ),
    link: "https://socialout.co/",
  },
];
