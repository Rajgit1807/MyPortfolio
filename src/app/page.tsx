import About from "@/components/About/About";
import Contact from "@/components/Contact.tsx/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Menu from "@/components/Menu/Menu";
import Projects from "@/components/Projects/Projects";


export default function Home() {
  return (
    <div className="flex flex-col justify-center px-5 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10" id="home">
      <Menu/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer  nomodal={false}/>
    </div>
  );
}
