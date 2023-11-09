import React from "react";
import Logo from "../asset/images/logo.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../asset/styles/webnav.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function webnav() {
  // const linkStyle = {
  //   textDecoration: "none",
  //   color: "inherit",
  // };
  return (
    <div className="flex flex-row items-center justify-between w-full py-12 px-24 mx-auto wnav">
      <div>
        <img src={Logo} alt="" className="w-full" />
      </div>
      <ul className="flex flex-row items-center justify-center gap-12 mb-0 webnav-list">
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
        className="flex flex-row items-center justify-center p-4 gap-4 hover:bg-[#145C3F] wn-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Get Early Access
        <Icon icon="ic:round-arrow-back-ios" rotate={2} />
      </button>
    </div>
  );
}

export default webnav;
