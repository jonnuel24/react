import React, { useState, useRef, useEffect } from "react";
import Logo from "../asset/images/logo.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../asset/styles/webnav.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Webnav() {
  // const linkStyle = {
  //   textDecoration: "none",
  //   color: "inherit",
  // };

  const [menuOpen, setMenuOpen] = useState(false);

  // Ref to the menu button for detecting clicks outside the menu
  const menuButtonRef = useRef(null);

  useEffect(() => {
    // Add event listener to close the menu when clicking outside of it
    const handleOutsideClick = (event) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row items-center justify-between w-full py-4 px-[16px] sm:px-[64px] mx-auto wnav relative">
      <div>
        <img src={Logo} alt="" className="w-full" />
      </div>
      <ul className="hidden md:flex flex-row items-center justify-center gap-12 mb-0 webnav-list">
        <Link className="wl-link">
          <li>About Us</li>
        </Link>
        <Link className="wl-link">
          <li>Services</li>
        </Link>
        <Link className="wl-link">
          <li>FAQ</li>
        </Link>
        <Link className="wl-link">
          <li>Contact Us</li>
        </Link>
      </ul>

      <button
        className="hidden md:flex flex-row items-center justify-center p-2 gap-4 hover:bg-[#145C3F] wn-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Get Early Access
        <Icon icon="ic:round-arrow-back-ios" rotate={2} />
      </button>

      {/* menu button:sm */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        ref={menuButtonRef}
      >
        <Icon
          icon={
            menuOpen ? "ant-design:close-outlined" : "ant-design:menu-outlined"
          }
          width="53px"
          height="53px"
          className="w-[48px] h-[48px] website-menu-icon"
        />
      </button>

      {/* menu:sm */}
      {menuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          ></div>
          <ul className="lg:hidden flex flex-col items-center absolute top-24 right-4 w-[90%] bg-white py-[32px] px-[16px]  gap-12 mb-0 webnav-list z-20">
            <Link className="wl-link">
              <li>About Us</li>
            </Link>
            <Link className="wl-link">
              <li>Services</li>
            </Link>
            <Link className="wl-link">
              <li>FAQ</li>
            </Link>
            <Link className="wl-link">
              <li>Contact Us</li>
            </Link>
          </ul>
        </>
      )}
    </div>
  );
}

export default Webnav;
