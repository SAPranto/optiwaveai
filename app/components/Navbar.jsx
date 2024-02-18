"use client";
import { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

import React from "react";

const navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 390) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed)

  return (
    <nav className="py-5 text-white">
      <div className="container flex justify-between">
        <div>Image</div>
        <div
          className={`text-center bg-red-500 absolute top-0 right-0 px-24 py-14 h-full transform transition-transform duration-300 ease-out ${
            isNavOpen
              ? "translate-x-0 lg:transform-none"
              : "translate-x-full lg:transform-none"
          } lg:block lg:relative lg:bg-transparent lg:py-0 lg:px-0`}
        >
          <ul className="flex flex-col items-center gap-10 lg:flex-row">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
            <li className="primary-btn">Button</li>
          </ul>
          <GiCancel
            className="absolute top-4 right-4 cursor-pointer lg:hidden"
            onClick={onNavClick}
          ></GiCancel>
        </div>
        <GiHamburgerMenu
          className="cursor-pointer lg:hidden"
          onClick={onNavClick}
        ></GiHamburgerMenu>
      </div>
    </nav>
  );
};

export default navbar;
