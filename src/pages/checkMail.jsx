import React, { useState, useEffect, useRef } from "react";
import "../asset/styles/forgotPassword.css";
// import { Link } from "react-router-dom";
import Logo from "../asset/images/logo.svg";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { notification } from "../services/notification";

function CheckMail({ type, setStage }) {
  const [email, setEmail] = useState("");

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
    setEmail(userEmail);
  }, []);

  const handleResendOTP = () => {
    const payload = {
      email: email,
      userType: type !== "undefined" ? type : "FARMER",
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
          setStage("completeProfile");
        } else {
          notification(response?.message, "error");
        }
      })
      .catch((error) => {
        console.log("error block", error);
        notification(error.message, "error");
      });
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
    <div className="flex flex-col justify-start border-2 border-gray-100 bg-white shadow-sm p-8 rounded-3xl gap-6">
      <div>
        {" "}
        <img src={Logo} alt="" className=" w-[15%]" />
      </div>
      <form
        action=""
        className="flex flex-col items-center"
        onSubmit={handleFormSubmit}
      >
        <header>Check your email</header>{" "}
        <h6 className="text-gray-500">
          We sent a verification code to{" "}
          <span className="text-[#006838] font-medium"> {email}</span>
        </h6>
        <div className="flex flex-col gap-12       ">
          <div className="space-x-4 flex">
            {Object.keys(post).map((key, index) => (
              <div className="items-start" key={key}>
                <input
                  type="text"
                  name={key}
                  maxLength="1"
                  onChange={(e) => handleInput(e, index)}
                  value={post[key]}
                  className="text-center w-14 h-14 border-2 border-gray-300 rounded-xl"
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
          <button
            type="submit"
            className="bg-[#006838] text-white px-16 py-3 rounded-xl text-lg font-medium"
          >
            Verify
          </button>
          <div className="flex items-start">
            <h5 className="text-gray-500">
              Did not get OTP?{" "}
              <span
                onClick={() => handleResendOTP()}
                className="cursor-pointer text-[#006838]"
              >
                Resend
              </span>
            </h5>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckMail;
