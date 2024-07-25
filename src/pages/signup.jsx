/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";
import SignupImg from "../asset/images/signup-img.png";
import Logo from "../asset/images/logo.svg";
import "../asset/styles/signup.css";
import UserType from "../Components/UserType";
import SignUpForm from "../Components/SignupForm";
import CompleteSignup from "../Components/CompleteSignup";
import CheckMail from "../pages/checkMail";
import accountServices from "../services/auth.service";
import { notification } from "../services/notification";
import { useNavigate } from "react-router-dom";

function Signup() {
  // show and hide password
  const [type, setType] = useState(null);
  const [stage, setStage] = useState("selectType");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    userType: type,
    phoneNumber: "",
    password: "",
    country: "Nigeria",
    state: "",
    city: "",
    street: "",
    localGovtArea: "",
    placeId: "64cy-u8df940u-7899e6cd",
    farmName: "",
    dateOfEstablishment: "",
    noOfEmployees: 0,
    addresses: [],
  });

  const navigate = useNavigate();




  return (
    <div className="flex h-screen overall-div">
      <div className="w-3/12 su-left">
        {type && <img src={SignupImg} alt="" className="h-screen signup-img" />}
      </div>

      <div className="flex flex-col items-start w-3/12 signup-right-div">
        <img src={Logo} alt="" />
        {stage === "selectType" && (
          <UserType setType={setType} setStage={setStage} />
        )}
        {stage === "form" && (
          <SignUpForm
            type={type}
            stage={stage}
            setUserData={setUserData}
            userData={userData}
            setStage={setStage}
          />
        )}
        {stage === "completeProfile" && (
          <CompleteSignup
            type={type}
            stage={stage}
            setUserData={setUserData}
            userData={userData}
            setStage={setStage}
          />
        )}
        {stage === "OTP" && <CheckMail type={type} setStage={setStage} />}
        {/* {!type ? <UserType setType={setType} /> : <SignUpForm type={type} />} */}
      </div>
    </div>
  );
}

export default Signup;
