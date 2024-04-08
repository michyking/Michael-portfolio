import React from "react";

// image
import image from "../assets/profile.png";

import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiRedux, SiChakraui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

// UseEffect
import { useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      className=" place-items-center lg:mb-24"
      data-aos="fade-up"
      id="about"
    >
      <div className="container mx-auto">
        <h2 className="text-primary h2 mb-12 text-center">Get to Know me</h2>
        <div className="flex gap-8 justify-center align-center flex-col lg:flex-row">
          {/* Introduction */}
          <div className="flex-1 items-center">
            <h2 className="h3 text-center">Introduction</h2>
            <div>
              <img src={image} alt="" className="mb-5"/>
            <p className="text-left py-4">
              Michael Onyeabo is a passionate Front-End Web developer with a
              keen eye for detail, particularly when it comes to creating
              responsive website designs. I graduated from the{" "}
              <span className=" font-bold">
                Techathon Mentorship and Open Source
              </span>{" "}
              program, where I collaborated with team members to build a{" "}
              <span className=" font-bold"> real-life project.</span> As a
              highly motivated and enthusiastic learner, I always welcome new
              challenges and strive to achieve excellence. My strong{" "}
              <span className=" font-bold">communication</span> and{" "}
              <span className=" font-bold">teamwork skills </span>
              drive my passion for success in any endeavor.
            </p>
            </div>
          </div>
          {/* Techonologies */}
          <div className="flex-1">
            <h2 className="h3 text-center">Technologies</h2>
            <div className="flex justify-center gap-5 flex-wrap">
              <div className="skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center">
                <p>HTML</p>
                <FaHtml5 className="text-7xl html"  />
              </div>
              <div className=" skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center ">
                <p>CSS</p>
                <FaCss3Alt className="text-7xl css" />
              </div>
              <div className=" skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center">
                <p>JavaScript</p>
                <IoLogoJavascript className="text-7xl js" />
              </div>
              <div className=" skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center">
                <p>React JS</p>
                <FaReact className="text-7xl react" />
              </div>
              <div className=" skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center">
                <p>Redux</p>
                <SiRedux className="text-7xl redux" />
              </div>
              <div className=" skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center">
                <p>Tailwind CSS</p>
                <SiTailwindcss className="text-7xl tailwind" />
              </div>
              <div className=" skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center">
                <p>Chakra UI</p>
                <SiChakraui className="text-7xl chakra" />
              </div>
              <div className=" skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center">
                <p>Git</p>
                <FaGitAlt className="text-7xl git" />
              </div>
              <div className=" skill-box bg-sitebg w-40 h-40 flex flex-col justify-center items-center">
                <p>GitHub</p>
                <FaGithub className="text-7xl github" />
              </div>
              
            </div>
          </div>
        </div>
        {/* <div
          className="lg:text-center lg:gap-y-0 flex justify-between
        flex-col-reverse lg:flex-row "
        >
          <div className="flex-1 text-center px-4 flex flex-col items-center ">
            <h3 className="h3">Introduction</h3>
            <p className="text-left lg:text-justify">
              Michael Onyeabo is a passionate Front-End Web developer with a
              keen eye for detail, particularly when it comes to creating
              responsive website designs. I graduated from the{" "}
              <span className=" font-bold">
                Techathon Mentorship and Open Source
              </span>{" "}
              program, where I collaborated with team members to build a{" "}
              <span className=" font-bold"> real-life project.</span> As a
              highly motivated and enthusiastic learner, I always welcome new
              challenges and strive to achieve excellence. My strong{" "}
              <span className=" font-bold">communication</span> and{" "}
              <span className=" font-bold">teamwork skills </span>
              drive my passion for success in any endeavor.
            </p>
          </div>

          {/* Techonology */}
        {/*  <div className="hidden flex-col lg:flex flex-1 mx-auto mix-blend-lighten">
            <h3 className="h3">Techonologies</h3>
            <div className="flex gap-4">
              <div className="bg-sitebg w-40 h-40 flex flex-col justify-center align-center">
                <p>HTML</p>
                <FaHtml5 className="text-5xl skills" />
              </div>
              <div className="bg-sitebg w-40 h-40">
                <p>HTML</p>
                <FaHtml5 className="skills"/>
              </div>
              <p>
               
                
                <SiTailwindcss />
                <SiRedux />
                <FaGitAlt />
                <SiChakraui />
              </p>
            </div>
          </div> 
        </div>*/}
      </div>
    </section>
  );
}
