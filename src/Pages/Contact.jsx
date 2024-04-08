import React, { useEffect, useRef } from "react";

// icons
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// emailjs
import emailjs from "@emailjs/browser";

import { Link } from "react-scroll";

export function Contact() {
  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hnx5mjd",
        "template_o597dnn",
        form.current,
        "1Hnpq7tbrb48p7VS4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="my-16" id="contact" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="" >
          <h1 className="h2 mb-11 lg:mb-24 text-center">Contact info</h1>
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* social media links */}
            <div className="flex flex-col items-center justify-center flex-1">
              {/* email */}
              <div
                className="bg-sitebg rounded-md gap-y-2 py-7 px-4 flex flex-col 
                justify-center items-center w-[300px] text-sm hover:bg-site hover:border
                 hover:border-primary transition-all mb-7"
              >
                <MdEmail className="text-primary font text-[1.5rem] mb-3" />
                <p>Email</p>
                <p>michaelonyeabo10@gmail.com</p>
                <a
                  href="mailto:michaelonyeabo10@gmail.com"
                  className="text-primary mt-3 hover:text-yellow-50"
                >
                  Send a message
                </a>
              </div>
              {/* messenger */}
              <div
                className="bg-sitebg rounded-md gap-y-2 py-7 px-4 flex flex-col 
                justify-center items-center w-[300px] text-sm hover:bg-site hover:border
                 hover:border-primary transition-all mb-7"
              >
                <BsMessenger className="text-primary font text-[1.5rem] mb-3" />
                <p>Messenger</p>
                <p>Michael Onyeabo</p>
                <a
                  href="https://m.me/michael.onyeabo.161"
                  className="text-primary mt-3 hover:text-yellow-50"
                >
                  Send a message
                </a>
              </div>
            </div>
            {/* form */}
            <div className="flex justify-center items-center">
              <form
                onSubmit={submitHandler}
                autoComplete="off"
                ref={form}
                action=""
                className="flex flex-1 flex-col items-center justify-center gap-y-7
                w-[250px] lg:w-[500px]"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form"
                  name="user_name"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="form"
                  name="user_email"
                />
                <textarea
                  id=""
                  cols="50"
                  rows="5"
                  className="form "
                  placeholder="Your Message"
                  name="message"
                ></textarea>
                <button className="btn btn-sm">Send message</button>
              </form>
            </div>
          </div>
        </div>
        {/* Top icon */}
        <Link
          className="flex items-center justify-center gap-x-2 text-primary 
        font-semibold cursor-pointer text-lg my-14 hover: hover:text-white"
          to="hero"
          smooth={true}
          duration={800}
        >
          <p className=" ">Back to top</p>
          <FaAngleUp />
        </Link>
      </div>
    </section>
  );
}

