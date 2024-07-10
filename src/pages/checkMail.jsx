import React, { useState, useEffect, useRef } from "react";
import "../asset/styles/forgotPassword.css";
// import { Link } from "react-router-dom";
import Logo from "../asset/images/logo.svg";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { notification } from "../services/notification";

function CheckMail() {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();
  const [post, setPost] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    const userType = localStorage.getItem("userType");

    setEmail(userEmail);
    setType(userType);
  }, []);

  const handleResendOTP = () => {
    const payload = {
      email: email,
      userType: type !=='undefined' ? type : 'FARMER',
    };
    accountServices.resendOTP(payload).then((response) => {
      if (response.statusCode && response.statusCode == 200) {
        notification("OTP resend successfully", "success");
      } else {
        notification(response?.message, "error");
      }
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const otp = Object.values(post).join("");
    const payload = {
      otp,
      email,
    };
    accountServices
      .verifyEmail(payload)
      .then((response) => {
        if (response.statusCode && response.statusCode == 200) {
          notification("Account verify successfully", "success");
          navigate("/login");
        } else {
        }
      })
      .catch((error) => {
        console.log("error block", error);
      });
    console.log(otp);
    console.log(email);
    // setShowMessage(true);
  };

  const inputRefs = useRef([]);

  const {
    handleSubmit,
    // register,
    // reset,
    // formState: { errors },
  } = useForm();

  const handleInput = (event, index) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    if (event.target.value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="flex justify-center align-middle fp-main-div">
      <form
        action=""
        className="flex flex-col fp-form"
        onSubmit={handleFormSubmit}
      >
        <img src={Logo} alt="" />
        <header>Check your email</header>{" "}
        <h6>We sent a verification code to {email}</h6>
        <div className="flex login-div4">
          <div className="vc-otp">
            {Object.keys(post).map((key, index) => (
              <div className="inputs items-start" key={key}>
                <input
                  type="text"
                  name={key}
                  maxLength="1"
                  onChange={(e) => handleInput(e, index)}
                  value={post[key]}
                  className="mt-2 text-center"
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              </div>
            ))}
            {/* <div className="inputs items-start">
              <input
                type="text"
                name="otp1"
                maxLength="1"
                onChange={handleInput}
                value={post.otp1}
                className="mt-2 text-center"
              />
            </div>

            <div className="inputs items-start">
              <input
                type="text"
                name="otp2"
                maxLength="1"
                onChange={handleInput}
                value={post.otp2}
                className="mt-2 text-center"
              />
            </div>

            <div className="inputs items-start">
              <input
                type="text"
                name="otp3"
                maxLength="1"
                onChange={handleInput}
                value={post.otp3}
                className="mt-2 text-center"
              />
            </div>

            <div className="inputs items-start">
              <input
                type="text"
                name="otp4"
                maxLength="1"
                onChange={handleInput}
                value={post.otp4}
                className="mt-2 text-center"
              />
            </div>

            <div className="inputs items-start">
              <input
                type="text"
                name="otp5"
                maxLength="1"
                onChange={handleInput}
                value={post.otp5}
                className="mt-2 text-center"
              />
            </div>

            <div className="inputs items-start">
              <input
                type="text"
                name="otp6"
                maxLength="1"
                onChange={handleInput}
                value={post.otp6}
                className="mt-2 text-center"
              />
            </div> */}
          </div>
          <div className="mt-3 flex login-div4 vc-div3 items-start">
            <button type="submit" className="vc-button">
              Recover Password
            </button>
          </div>
          <div className="flex login-div4 vc-div3 items-start">
            <h5 className="vc-resend mt-4">
              Did not get OTP?{" "}
              <button onClick={()=>handleResendOTP()} type="button" className="text-[#006838]">
                Resend
              </button>
            </h5>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckMail;
