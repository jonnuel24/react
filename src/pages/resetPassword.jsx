import React, { useState } from "react";
import "../asset/styles/resetPassword.css";
import Logo from "../asset/images/logo.svg";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { useNavigate } from "react-router-dom";
function ResetPassword() {
  const {
    handleSubmit,
    // register,
    // reset,
    // formState: { errors },
  } = useForm();
  const [post, setPost] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  async function resetPass() {
    try {
      if (post.confirmPassword === post.newPassword) {
        const response = await accountServices.resetPassword(post);
        if (response.statusCode === 200) {
          navigate("/passwordChanged");
        } else {
          alert(response.message);
        }
      } else {
        alert("password and confirm password most match");
      }
    } catch (e) {}
  }
  const navigate = useNavigate();
  return (
    <div className="border-2 border-gray-100 bg-white shadow-sm p-8 rounded-3xl w-full sm:w-[30%] max-w-[95%] sm:max-w-[35%] mt-[30%] sm:mt-[3%] mx-auto space-y-6">
      <div>
        <img src={Logo} alt="" className="w-[20%]" />
      </div>
      <div className="flex flex-col items-center">
        <h3 htmlFor="email" className="flex items-center">
          Set New Password
        </h3>
        <p>
          Your new password must be different from the previously used passwords
        </p>
      </div>
      <form onSubmit={handleSubmit(resetPass)} className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="password" className="">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            className="py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-[56px] w-full rounded-xl border border-gray-300"
            onChange={handleInput}
            value={post.newPassword}
            placeholder="Enter New Password"
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="password" className="">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-[56px] w-full rounded-xl border border-gray-300"
            onChange={handleInput}
            value={post.confirmPassword}
            placeholder="Confirm New Password"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <button
            type="submit"
            className="bg-[#006838] w-full text-white px-16 py-3 rounded-xl"
          >
            Recover Password
          </button>
          <div className="flex flex-row items-center w-full justify-start gap-2">
            <Icon icon="ion:chevron-back-outline" /> back to Login
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
