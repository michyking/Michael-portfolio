import React from "react";

// UseEffect
import { useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import cert from "../assets/certificate.png";

export function Certificate() {

  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className=" bg-sitebg py-10" data-aos="fade-up" id="certificate">
      <div className="container mx-auto">
        <div>
          <h1 className="h2 text-center mb-11 lg:mb-24">certification</h1>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-x-8 gap-y-7">
            <p>
              Professionally certified by Techathon Mentorship and Open Source
              program.  
            </p>
            <img src={cert} alt="" className="rounded-md lg:max-w-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}