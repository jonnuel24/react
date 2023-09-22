import React from "react";
import "../asset/styles/resetPassword.css";
import Logo from "../asset/images/logo.svg"
import { Icon } from "@iconify/react";
function resetPassword() {
  return (
    <div className="flex justify-center align-middle rp-main-div">
      <form action="" className="flex flex-col items-center rp-form">
        <img src={Logo} alt="" />
        <h3 htmlFor="email" className="flex items-center">
        Set New Password 
        </h3>
        <p>Your new password must be different from the previously used passwords</p>
        <div className="inputs items-start">
          <label htmlFor="password" className="flex items-start">
            New Password
          </label>
          <input
            type="password"
            name="password"
            className="mt-2"
            placeholder="Enter New Password"
          />
        </div>

        <div className="inputs items-start">
          <label htmlFor="password" className="flex items-start">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="mt-2"
            placeholder="Confirm New Password"
          />
        </div>

        <div className="flex login-div4 rp-btn">
          <button type="submit">Recover Password</button>
          <div className="flex flex-row items-center gap-2 mt-4"><Icon icon="ion:chevron-back-outline" /> back to Login</div>
        </div>
      </form>
    </div>
  );
}

export default resetPassword;
