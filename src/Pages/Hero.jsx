import React from "react";

// image
import main from '../assets/Michael.png'

// react scroll
import { Link } from "react-scroll";

// type writer
import { useTypewriter, Cursor  } from 'react-simple-typewriter'

// UseEffect 
import { useEffect } from "react";

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Hero() {

  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
    });
  }, [])

const [text] = useTypewriter({
  words: ['i am front-end developer', 'hire me!'],
  loop: {},
  typeSpeed: 120,
  deleteSpeed: 80
})



  return (
    <section className="py-8 place-items-center mb-16 lg:mb-28 hero-section" id="hero">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between lg:gap-x-0">
          <div className="hidden lg:flex flex-1 max-w-[450px] mx-auto mix-blend-lighten "  /*data-aos="fade-down"*/>
            {/* image */}
            <img src={main} alt="Micahel Onyeabo" />
          </div>
          <div className="max-w-[550px] flex-1 text-left md:text-center lg:mx-8" /*data-aos="fade-up"*/>
            {/* text */}
            <h1 className="h2">Michael Onyeabo</h1>
            <p className="font-tertiary uppercase text-[22px] md:text-[28px] mb-6 ">
              <span className="text-primary">
               {text}
              </span>
              <Cursor cursorStyle= '>'/>
            </p>
            <p className="mb-6">
              As a front-end developer, I specialize in creating outstanding
              digital experiences with occasional design work. Currently, my
              primary focus is on building web pages that are both accessible
              and responsive.
            </p>
            <Link to="contact"  smooth={true}
            duration={800}>
              <button className="btn btn-lg">Let's Talk</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

