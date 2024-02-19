"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Image from "next/image";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const onNavClick = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  const setStickyOn = () => {
    setSticky(window.scrollY >= 120);
  };

  useEffect(() => {
    window.addEventListener("scroll", setStickyOn);
    return () => {
      window.removeEventListener("scroll", setStickyOn);
    };
  }, []);

  return (
    <nav
      className={`py-5 w-full transition-[background-color] duration-500 sticky top-0 ${
        sticky ? "sticky-navbar" : ""
      }`}
    >
      <div className="container flex justify-between items-center">
        <div>
          <Image src="/logo.png" width={120} height={500} alt="Site Logo" />
        </div>
        <div
          className={`text-center bg-red-600 absolute top-0 right-0 px-24 py-14 h-[100vh] lg:h-full transform transition-transform duration-300 ease-out ${
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
          />
        </div>
        <GiHamburgerMenu
          className={`cursor-pointer lg:hidden ${sticky ? "text-black" : ""}`}
          onClick={onNavClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
