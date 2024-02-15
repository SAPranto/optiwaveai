"use client";
import { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

import React from "react";

const navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="py-5 bg-black text-white">
      <div className="container flex justify-between">
        <div>Image</div>
        <div
          className={`text-center bg-red-500 absolute top-0 right-0 px-24 py-14 h-full ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
            <li className="primary-btn">Button</li>
          </ul>
          <div className="absolute top-4 right-4" onClick={onNavClick}>
            <GiCancel className="cursor-pointer"></GiCancel>
          </div>
        </div>
        <div onClick={onNavClick}>
          <GiHamburgerMenu className="cursor-pointer"></GiHamburgerMenu>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
