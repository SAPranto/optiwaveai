"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { BiSearchAlt, BiCart, BiHeart, BiUser } from "react-icons/bi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

    // State to track which mega menu is open
    const [megaMenu, setMegaMenu] = useState("gifts");

    // Function to handle mega menu open/close
    const handleMegaMenuToggle = (menuName) => {
      setMegaMenu(megaMenu === menuName ? null : menuName);
    };
  
    // Mega menu content for the "Gifts" link
    const giftsMegaMenu = (
      <div className="mega-menu absolute bottom-0">
        <p>Mega menu for Gifts</p>
      </div>
    );

  return (
    <>
      <div className="bg-black text-white text-center text-xs py-2">
        <span>Sign up for exclusive updates</span>
      </div>
      <div className="bg-white text-black relative z-50">
        <div className="container">
          <div className="navbar-wrapper flex justify-between items-center py-7">
            <div className="flex justify-start items-center gap-14">
              <div>
                <img src="./logo.png" alt="Main Logo" width={150} />
              </div>
              <ul
                className={`md:flex md:gap-5 md:text-xs md:items-center font-bold uppercase ${
                  isNavOpen ? "nav-dropdown-open" : "hidden"
                }`}
              >
      <li
        className="cursor-pointer relative"
        onMouseEnter={() => handleMegaMenuToggle("gifts")}
        onMouseLeave={() => handleMegaMenuToggle(null)}
      >
        <Link href="/">Gifts</Link>
        {megaMenu === "gifts" && giftsMegaMenu}
      </li>
                <li className="cursor-pointer">
                  <Link href="/about">New In</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/team">Bags</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/contact">women</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/contact">men</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/contact">home & lifestyle</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/contact">children</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/contact">jeans</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/contact">stories</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-start gap-3">
                <BiSearchAlt></BiSearchAlt>
                <BiCart></BiCart>
                <BiHeart></BiHeart>
                <BiUser></BiUser>
              </div>
              <div className="md:hidden z-10">
                {isNavOpen ? (
                  <GiCancel
                    onClick={handleNavToggle}
                    className=" text-red-400 text-xl cursor-pointer"
                  />
                ) : (
                  <GiHamburgerMenu
                    onClick={handleNavToggle}
                    className=" text-xl cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
