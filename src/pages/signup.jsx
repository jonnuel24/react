/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import SignupImg from "../asset/images/signup-img.png";
import Logo from "../asset/images/logo.svg";
import "../asset/styles/signup.css";
// import Checkbox from "../Components/checkbox";

// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import accountServices from "../services/auth.service";
import UserType from "../Components/UserType";
import SignUpForm from "../Components/SignupForm";

function Signup() {
  // show and hide password

  const [type, setType] = useState(null);

  return (
    <div className="flex h-screen overall-div">
      <div className="w-3/12 su-left">
        <img src={SignupImg} alt="" className="h-screen signup-img" />
      </div>

      <div className="flex flex-col items-start w-3/12 signup-right-div">
        <img src={Logo} alt="" />
        {!type ? <UserType setType={setType} /> : <SignUpForm type={type} />}
      </div>
    </div>
  );
}

export default Signup;
