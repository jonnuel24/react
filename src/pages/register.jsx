import React from "react";

import SignupImg from "../asset/images/signup-img.png";
import Logo from "../asset/images/logo.svg";
import "../asset/styles/register.css";
import Checkbox from "../Components/checkbox";
import Button from "../Components/button";
import CountrySelector from "../Components/country";
import DropImg from "../asset/images/drop-img.svg";

function register() {
  return (
    <div className="row">
      <div className="register-left col  col-3">
        <img src={SignupImg} alt="" className="h-screen" />
      </div>

      <div className="register-right col col-9">
        <div className="register-right-div1">
          <img src={Logo} alt="" />
          <h1>Farmer Personal Information</h1>
          <div className="register-divider1"></div>
        </div>
      </div>
    </div>
  );
}

export default register;
