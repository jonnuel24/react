import React from "react";
import Onboard from "../asset/styles/onboard.css";
import Logo from "../asset/images/logo.svg";
import Drop from "../asset/images/drop-img.svg";
import { Link } from "react-router-dom";

function onboard() {
  return (
    <div className="flex flex-col items-center justify-center main-div">
      <div className="flex flex-col div">
        <div className="flex flex-col items-start div-up">
          <img src={Logo} alt="" className="logo" />
          <h1>Let’s get Started</h1>
        </div>

        <div className="flex flex-col cta">
          <Link to="/signup">
            <button className="btn1">Create an Account</button>
          </Link>

          <Link to="/login">
            <button className="btn2">Login to Account</button>
          </Link>
        </div>
      </div>

      <img src={Drop} alt="" className="drop-img" />
    </div>
  );
}

export default onboard;
