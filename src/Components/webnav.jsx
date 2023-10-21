import React from "react";
import Logo from "../asset/images/logo.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../asset/styles/webnav.css";

function webnav() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (

    <div className="flex flex-row items-center justify-between w-full py-12 px-24 mx-auto wnav">
      <div>
        <img src={Logo} alt="" className="w-full" />
      </div>

      <div className="flex  items-center gap-8">
        <Link to={"/onboard"} className="flex items-center wn-signin" style={linkStyle}>
          Sign in <Icon icon="iconoir:arrow-tr" />
        </Link>
        <button className="flex flex-row items-center justify-center p-4 gap-4 hover:bg-[#145C3F] wn-btn">
          Get Early Access
          <Icon icon="ic:round-arrow-back-ios" rotate={2} />
        </button>
      </div>
    </div>
  );
}

export default webnav;
