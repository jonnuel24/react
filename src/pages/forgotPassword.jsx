import React, { useState } from "react";
import axios from "axios";
import "../asset/styles/forgotPassword.css";
import { Link } from "react-router-dom";
import Logo from "../asset/images/logo.svg";
import { Icon } from "@iconify/react";

function ForgotPassword() {
  const [post, setPost] = useState({
    email: "",
  });

  const [message, setMessage] = useState(""); // To store the response message from the API

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/users/forgot-password",
        post
      )
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          setMessage("A password reset link has been sent to your email.");
          alert(response.message)
        } else {
          setMessage("Failed to send the password reset link.");
          alert(response.message)
        }
      })
      .catch((error) => {
        console.error("AxiosError:", error);

        if (error.response) {
          setMessage("Error: " + error.response.data.message);
        } else {
          setMessage("An error occurred while sending the request.");
        }
      });
  };

  return (
    <div className="flex justify-center align-middle fp-main-div">
      <form
        action=""
        className="flex flex-col fp-form"
        onSubmit={handleFormSubmit}
      >
        <img src={Logo} alt="" />
        <header>Forgot Password</header>
        <div className="inputs items-start">
          <label htmlFor="email" className="flex items-start mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-2"
            placeholder="Enter Email"
            value={post.email}
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
