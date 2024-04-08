import React from "react";

// UseEffect
import { useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// images
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export function Projects() {
  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="my-24 md:my-0" id="project">
      <div className="container mx-auto">
        <div className="bg-sitebg w-full rounded-md py-10 mb-5">
          <h1 className="h2 text-center">Featured Projects</h1>
        </div>
        <div className="place-items-center">
          {/* first project */}
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-x-16 mb-14 lg:mb-24"
            data-aos="fade-up"
          >
            {/* image */}
            <div className="flex-1">
              <img src={project1} alt="" className="rounded-md lg:max-w-xl hover:scale-110 transition-all duration-1000" />
            </div>
            {/* text */}
            <div className="flex-1 ">
              <h1 className="h3">Crowdhearts</h1>
              <p className="mb-3">
                CrowdHeart is a charity organization that provides assistance to
                people and communities who are in need, as well as receiving
                donations from people.
              </p>
              <hr className="border-primary mb-3" />
              <ul>
                <li>Platform: Web (app)</li>
                <li>Role: Front end Developer</li>
                <li>Tools: HTML, CSS, JavaScript & AOS</li>
              </ul>
              <div className="flex items-center justify-between mt-9 max-w-[15rem]">
                <a href="https://crowdheart.netlify.app/">
                  <button className="btn btn-sm">Live Demo</button>
                </a>
                <a href="https://github.com/Etinhandy/group-1-team-3">
                  <button className="btn-sm1 hover:border-primary">Github</button>
                </a>
              </div>
            </div>
          </div>
          {/* second project */}
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-x-16 mb-14 lg:mb-24 "
            data-aos="fade-up"
          >
            {/* image */}
            <div className="flex-1">
              <img src={project3} alt="" className="rounded-md lg:max-w-xl hover:scale-110 transition-all duration-1000" />
            </div>
            {/* text */}
            <div className="flex-1 ">
              <h1 className="h3">Shopping NotePad</h1>
              <p className="mb-3">
                This is a Shopping NotePad that is used to list items that need
                to be purchased during a shopping trip. It is a convenient tool
                that can help shoppers stay organized and remember everything
                they need to buy.
              </p>
              <hr className="border-primary mb-3" />
              <ul>
                <li>Platform: Web (app)</li>
                <li>Role: Front end Developer</li>
                <li>Tools: React JS & Chakra UI</li>
              </ul>
              <div className="flex items-center justify-between mt-9 max-w-[15rem]">
                <a href="https://mich-shopping-list.netlify.app/">
                  <button className="btn btn-sm">Live Demo</button>
                </a>
                <a href="https://github.com/michyking/shoppingList">
                  <button className="btn-sm1 hover:border-primary">Github</button>
                </a>
              </div>
            </div>
          </div>
          {/* third project */}
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-x-16 mb-14 lg:mb-24"
            data-aos="fade-up"
          >
            {/* image */}
            <div className="flex-1">
              <img src={project2} alt="" className="rounded-md lg:max-w-xl hover:scale-110 transition-all duration-1000" />
            </div>
            {/* text */}
            <div className="flex-1 ">
              <h1 className="h3">Simple cal</h1>
              <p className="mb-3">
                This is a simple calculator that perform basic arithmetic
                operations, such as addition, subtraction, multiplication, and
                division. As well as % and square.
              </p>
              <hr className="border-primary mb-3" />
              <ul>
                <li>Platform: Web (app)</li>
                <li>Role: Front end Developer</li>
                <li>Tools: HTML, CSS, JavaScript</li>
              </ul>
              <div className="flex items-center justify-between mt-9 max-w-[15rem]">
                <a href="https://simple-calculator-mich.netlify.app/">
                  <button className="btn btn-sm">Live Demo</button>
                </a>
                <a href="https://github.com/michyking/Simple-calculator">
                  <button className="btn-sm1 hover:border-primary">Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}