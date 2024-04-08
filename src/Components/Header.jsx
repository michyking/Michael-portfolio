import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
// react scroll
import { Link } from "react-scroll";

export function Header() {
  const [hambuger, setHambuger] = useState(false);
  const navRef = useRef();
  const location = useLocation()
  console.log(location);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setHambuger(!hambuger);
  };

  const navigation = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "project" },
    { name: "Certification", id: "certificate" },
    { name: "Contact", id: "contact" },
  ];

  const navLinks = navigation.map((val, i) => {
    const { name, id } = val;
    return (
      <Link
        key={i}
        to={id}
        
        className="lg:ml-10 cursor-pointer text-white hover:text-primary"
      >
        {name}
      </Link>
    );
  });
  return (
    <header className="bg-site" id="head">
      <h1 className="text-[30px] font-bold">MO</h1>
      <nav ref={navRef} className="mobile">
        {navLinks}
        <a href="#">
          <button className="btn btn-sm text-[15px]">Resume</button>
        </a>
      </nav>
      <button onClick={showNavBar} className="nav-btn">
        {hambuger ? <FaTimes /> : <RiMenu4Fill />}
      </button>
    </header>
  );
}
