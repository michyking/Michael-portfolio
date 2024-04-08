import React from 'react'

// icons
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare, } from "react-icons/fa";

export function Footer() {
  return (
    <section className='bg-sitebg mt-10 lg:mt-24 py-10'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center flex-col lg:flex-row gap-y-4'>
          <div className='flex gap-x-2 lg:gap-x-5 text-xl'>
              <a href="https://www.linkedin.com/in/michael-onyeabo-4113231b7/" className=' hover:text-primary'><AiFillLinkedin/></a>
              <a href="https://twitter.com/michaelonyeabo" className=' hover:text-primary'><BsTwitter/></a>
              <a href="https://web.facebook.com/michael.onyeabo.161" className=' hover:text-primary'><FaFacebookSquare/></a>
              <a href="https://github.com/michyking" className=' hover:text-primary'><AiFillGithub/></a>
          </div>
          <p>(c) All rights reserved 2022</p>
        </div>
      </div>
    </section>
  )
}
