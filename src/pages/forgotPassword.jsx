import React, { useState } from "react";
import "../asset/styles/forgotPassword.css";
import { Link } from "react-router-dom";
import Logo from "../asset/images/logo.svg";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { useNavigate } from "react-router-dom";
function ForgotPassword() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    phoneNumber: "",
  });

  const [message, setMessage] = useState(""); // To store the response message from the API

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
    console.log(result);
    // Create a JSON object to send as the request body
    // const requestBody = {
    //   email: post.email,
    // };

    // Send a POST request to the API with JSON data
    // fetch(
    //   "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/users/forgot-password",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json", // Set the content type to JSON
    //     },
    //     body: JSON.stringify(requestBody), // Convert the object to JSON string
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMessage(data.message);

    //     if (data.statusCode === 200) {
    //       // Successful response
    //       // Handle success as needed
    //     } else {
    //       // Handle the case where the API response indicates an error
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div className="flex justify-center align-middle fp-main-div">
      <form
        action=""
        className="flex flex-col fp-form"
        onSubmit={handleSubmit(requestPasswordReset)}
      >
        <img src={Logo} alt="" />
        <header>Forgot Password</header>
        <div className="inputs items-start">
          <label htmlFor="phoneNumber" className="flex items-start mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            className="mt-2"
            placeholder="Enter Email"
            value={post.phoneNumber}
            onChange={handleInput}
          />
        </div>
        <div className="flex login-div4">
          <button type="submit">Reset your password</button>
        </div>
        <p>{message}</p> {/* Display the response message from the API */}
        <Link to="/login">
          <div className="flex flex-row items-center gap-2">
            <Icon icon="ion:chevron-back-outline" /> back to Login
          </div>
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
