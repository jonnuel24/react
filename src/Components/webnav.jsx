import React, { useState, useRef } from "react";
import Logo from "../asset/images/logo.svg";
//import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../asset/styles/webnav.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import { Link as ScrollLink } from "react-scroll";
import { Link} from "react-router-dom";

function Webnav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Ref to the menu button for detecting clicks outside the menu
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleBackgroundClick = (event) => {
  //   // Check if the clicked element is the close icon
  //   const closeIconClass = "ant-design:close-outlined"; // Replace with the correct class name of your close icon
  //   const isCloseIcon = event.target.classList.contains(closeIconClass);

  //   if (menuOpen && !isCloseIcon) {
  //     toggleMenu();
  //   }
  // };

  return (
    <div className="flex flex-row items-center justify-between w-full py-4 px-[16px] sm:px-[64px] mx-auto wnav sticky top-0 shadow-md z-40 bg-white  ">
      <Link to={"/website"}>
        {" "}
        <div>
          <img src={Logo} alt="" className="w-full" />
        </div>
        
      </Link>
      <ul className="hidden md:flex flex-row items-center justify-center gap-12 mb-0 webnav-list">
        <a href="#websiteHeroSection" className="wl-link">
          <li>Home</li>
        </a>
        <a href="#websiteAbout" className="wl-link">
          <li>About Us</li>
        </a>
        <a href="#services" className="wl-link">
          <li>Services</li>
        </a>
        <a href="#faqs" className="wl-link">
          <li>FAQ</li>
        </a>
      </ul>

      {/* <button
        className="hidden md:flex flex-row items-center justify-center p-2 gap-4 hover:bg-[#145C3F] wn-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Get Early Access
        <Icon icon="ic:round-arrow-back-ios" rotate={2} />
      </button> */}
      <div className="hidden md:flex flex-row items-center gap-4">
        <Link to={"/login"}>
          {" "}
          <button className="wn-btn-2 text-[20px] font-bold hover:text-[#145C3F] hover:bg-[#4aa76148]">
            Login
          </button>
        </Link>

        <Link to={"/createAccount"}>
          {" "}
          <button className="hidden md:flex flex-row items-center justify-center p-2 gap-4 hover:bg-[#145C3F] wn-btn">
            Get Started
            <Icon icon="ic:round-arrow-back-ios" rotate={2} />
          </button>
        </Link>
      </div>

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
          <ul className="lg:hidden flex flex-col items-start absolute top-24 right-4 w-[90%] bg-white py-[32px] px-[16px]  gap-12 mb-0 webnav-list z-20">
            <a href="#websiteHeroSection" className="wl-link">
              <li>Home</li>
            </a>
            <a href="#websiteAbout" className="wl-link">
              <li>About Us</li>
            </a>
            <a href="#services" className="wl-link">
              <li>Services</li>
            </a>
            <a href="#faqs" className="wl-link">
              <li>FAQ</li>
            </a>

            <button className="wn-btn-2 text-[20px] font-bold hover:text-[#145C3F] hover:bg-[#4aa76148]">
              Login
            </button>
            <button
              className="flex flex-row items-center justify-center p-2 gap-4 hover:bg-[#145C3F] wn-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Get Started
              <Icon icon="ic:round-arrow-back-ios" rotate={2} />
            </button>
          </ul>
        </>
      )}
    </div>
  );
}

export default Webnav;
