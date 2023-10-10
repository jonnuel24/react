import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../asset/styles/forgotPassword.css";
import { Link } from "react-router-dom";
import Logo from "../asset/images/logo.svg";
import { Icon } from "@iconify/react";

function PasswordChanged() {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
  };

  return (
    <div className="flex justify-center align-middle fp-main-div">
      <form
        action=""
        className="flex flex-col fp-form"
        onSubmit={handleFormSubmit}
      >
        <img src={Logo} alt="" />
        <header>Password Reset</header>
        <h6>
          Your password has been successfully reset. Click below to login{" "}
        </h6>
        {/* <div className="inputs items-start">
          <label htmlFor="email" className="flex items-start mb-2">Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-2"
            placeholder="Enter Email"
            
           
          />
        </div> */}
        <div className="flex login-div4">
          <button type="submit">Ok</button>
        </div>
        <Link to={"/login"}>
          <div className="flex flex-row items-center gap-2">
            <Icon icon="ion:chevron-back-outline" /> back to Login
          </div>
        </Link>
      </form>
    </div>
  );
}

export default PasswordChanged;
