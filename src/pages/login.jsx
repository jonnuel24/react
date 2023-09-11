// import React from "react";
import LoginBg from "../asset/images/login_bg.svg";
import "../asset/styles/login.css";
import logo from "../asset/images/logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import accountServices from "../services/auth.service";

function Login(props) {
  const { handleSubmit, register } = useForm();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const login = async (data) => {
    setLoading(true);
    let response = await accountServices.login(data);
    if (response.statusCode === 200) {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("currentUser", JSON.stringify(response.data.user));
      window.location.href = "/home";
    } else {
      setMessage(response.message);
    }
    setLoading(false);
  };
  return (
    <div className="row">
      <div className="login-div1 col col-5">
        {/* <img src={LoginBg} alt="" /> */}
      </div>
      <div className="login-div2 col col-7">
        <div className="login-div20">
          <img src={logo} alt="" />
          <header>
            Sign in to <strong>Agripeller,</strong>
          </header>
          <div className="login-form">
            <div className="form-header">Welcome back!</div>
            <form action="" onSubmit={handleSubmit(login)}>
              <div className="inputs">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  {...register("email")}
                />
              </div>
              <div className="inputs">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password "
                  {...register("password")}
                />
              </div>
              <div className="forgot-password">
                <Link to={"/#"}>Forgot Password?</Link>
              </div>
              <div className="flex login-div4">
                <Link to={"/home"}>
                  <button type="submit">Continue</button>
                </Link>
                <div className="text-right items-end flex w-100">
                  Don’t have an account? <Link to={"/signup"}> Sign Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
