import React, { useState } from "react";
// import axios from "axios";
import "../asset/styles/forgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../asset/images/logo.svg";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
function ForgotPassword() {
  const {
    handleSubmit,
    // register,
    // reset,
    // formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    phoneNumber: "",
  });

  // const [message, setMessage] = useState(""); // To store the response message from the API

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const requestPasswordReset = async () => {
    //make service calll here
    let result = await accountServices.forgotPassword(post);
    if (result.statusCode === 200) {
      navigate("/verificationCode");
    } else {
      alert(result.message);
    }

    // Send a POST request to the API with JSON data
  };

  return (
    <div className="w-full sm:max-w-[30%] mx-auto mt-[30%] sm:mt-[3%] border-2 border-gray-100 bg-white shadow-sm p-8 rounded-3xl space-y-6">
      <div>
        <img src={Logo} alt="" className="w-[20%]" />
      </div>
      <div className="text-3xl font-medium text-gray-600">
        {" "}
        <header>Forgot Password</header>
      </div>
      <form
        method="post"
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(requestPasswordReset)}
      >
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="phoneNumber" className="">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            autoComplete="name"
            className="py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-[56px] w-full rounded-xl border border-gray-300"
            placeholder="Enter Phone Number"
            value={post.phoneNumber}
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button
            type="submit"
            className="bg-[#006838] w-full text-white px-16 py-3 rounded-xl"
          >
            Reset your password
          </button>
        </div>
        {/* <p>{message}</p> Display the response message from the API */}
        <Link to="/login" className="w-full mr-auto">
          <div className="flex flex-row items-center w-full justify-start gap-2">
            <Icon icon="ion:chevron-back-outline" /> back to Login
          </div>
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
