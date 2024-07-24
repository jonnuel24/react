/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";
import SignupImg from "../asset/images/signup-img.png";
import Logo from "../asset/images/logo.svg";
import "../asset/styles/signup.css";
import UserType from "../Components/UserType";
import SignUpForm from "../Components/SignupForm";
import CheckMail from "../pages/checkMail";
import accountServices from "../services/auth.service";
import { notification } from "../services/notification";
import { useNavigate } from "react-router-dom";

function Signup() {
  // show and hide password
  const [type, setType] = useState(null);
  const [stage, setStage] = useState("selectType");
  const [userData, setUserData] = useState(
    {
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
    }
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (stage === "completeProfile") {
      completeProfile();
    }
  }, [stage]);

  const completeProfile = async () => {
    const payload = { ...userData };
    payload.phoneNumber = "+234" + payload.phoneNumber;
    payload.dateOfBirth = "1999-19-02";
    if (payload.userType === "FARMER") {
      payload.dateOfEstablishment = payload.dateOfEstablishment + " 00:00:00";
    }else{
      payload.dateOfEstablishment =  "1979-01-01 00:00:00";
    }
    console.log(payload);
    const response = await accountServices.completeProfile(payload);
    if (response.statusCode === 200) {
      notification("Profile Updated Successfully");
      navigate("login");
    } else {
      if (response.messages) {
        const messages = Object.values(response.messages);
        messages.forEach((e) => {
          notification(e, "error");
        });
        setStage("editData");
      }
      if (response.message) {
        notification(response.message, "error");
      }
    }
  };

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
        {(stage === "form" || stage === "editData") && (
          <SignUpForm
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
