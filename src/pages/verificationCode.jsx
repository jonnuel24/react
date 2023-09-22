import React from "react";
import "../asset/styles/forgotPassword.css";
import "../asset/styles/resetPassword.css"; //styling is linked to this
import { Link } from "react-router-dom";

function verificationCode() {
  return (
    <div className="flex justify-center align-middle fp-main-div">
      <form action="" className="flex flex-col vc-form items-start">
        <h2>Verification Code</h2>
        <p>Enter the 5 Digit OTP sent to your email</p>
        <div className="vc-otp">
          <div className="inputs items-start">
            
            <input
              type="text"
              name="otp"
              className="mt-2 text-center"
            />
          </div>

          <div className="inputs items-start">
            
            <input
              type="text"
              name="otp"
              className="mt-2 text-center"
            />
          </div>

          <div className="inputs items-start">
            
            <input
              type="text"
              name="otp"
              className="mt-2 text-center"
            />
          </div>


          <div className="inputs items-start">
            
            <input
              type="text"
              name="otp"
              className="mt-2 text-center"
            />
          </div>

          <div className="inputs items-start">
           
            <input
              type="text"
              name="otp"
              className="mt-2 text-center"
            />
          </div>
        </div>
        <div className="flex login-div4 vc-div3 items-start">
          <button type="submit" className="vc-button">Recover Password</button>
          <h5 className="vc-resend mt-4">Did not get OTP? <a href="" className="text-[#006838]">Resend</a></h5>
        </div>
      </form>
    </div>
  );
}

export default verificationCode;
