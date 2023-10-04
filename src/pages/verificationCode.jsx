import React, { useState } from "react";
import "../asset/styles/forgotPassword.css";
import "../asset/styles/resetPassword.css"; //styling is linked to this
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { useNavigate } from "react-router-dom";
function VerificationCode() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  async function verifyOTP() {
    if (post.otp1 === "") {
      alert("Please fill in the inputs");
      return;
    } else {
      const otp=post.otp1+post.otp2+post.otp3+post.otp4+post.otp5+post.otp6
      const response=await accountServices.verificationCode({otp:otp})
     if(response.statusCode==200){
      localStorage.setItem('resetPasswordToken', response.data)
      navigate('/resetPassword')
     }
    }
  }

  return (
    <div className="flex justify-center align-middle fp-main-div">
      <form
        action=""
        onSubmit={handleSubmit(verifyOTP)}
        className="flex flex-col vc-form items-start"
      >
        <h2>Verification Code</h2>
        <p>Enter the 5 Digit OTP sent to your phone</p>
        <div className="vc-otp">
          <div className="inputs items-start">
            <input
              type="text"
              name="otp1"
              onChange={handleInput}
              value={post.otp1}
              className="mt-2 text-center"
            />
          </div>

          <div className="inputs items-start">
            <input
              type="text"
              name="otp2"
              onChange={handleInput}
              value={post.otp2}
              className="mt-2 text-center"
            />
          </div>

          <div className="inputs items-start">
            <input
              type="text"
              name="otp3"
              onChange={handleInput}
              value={post.otp3}
              className="mt-2 text-center"
            />
          </div>

          <div className="inputs items-start">
            <input
              type="text"
              name="otp4"
              onChange={handleInput}
              value={post.otp4}
              className="mt-2 text-center"
            />
          </div>

          <div className="inputs items-start">
            <input
              type="text"
              name="otp5"
              onChange={handleInput}
              value={post.otp5}
              className="mt-2 text-center"
            />
          </div>

          <div className="inputs items-start">
            <input
              type="text"
              name="otp6"
              onChange={handleInput}
              value={post.otp6}
              className="mt-2 text-center"
            />
          </div>
        </div>
        <div className="flex login-div4 vc-div3 items-start">
          <button type="submit" className="vc-button">
            Recover Password
          </button>
          <h5 className="vc-resend mt-4">
            Did not get OTP?{" "}
            <a href="" className="text-[#006838]">
              Resend
            </a>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default VerificationCode;
