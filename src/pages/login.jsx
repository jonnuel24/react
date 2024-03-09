// import React from "react";
import React, { useState } from "react";
// import LoginBg from "../asset/images/login_bg.svg";
import "../asset/styles/login.css";
import logo from "../asset/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { useDispatch } from "react-redux";
import {
  setFarm,
  setToken,
  setCurrentUser,
  setIsAuthenticated,
} from "../store/reducers/userReducer";
import { notification } from "../services/notification";
import { BeatLoader } from "react-spinners";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  async function login() {
    setLoading(true)
    try{
      let result = await accountServices.login(post);
      if (typeof result == "string" || result == null || result === "") {
        notification(result, "error");
      } else if (result.statusCode === 200) {
        const { farm, token, ...rest } = result.data;
        dispatch(setCurrentUser(rest));
        dispatch(setFarm(farm));
        dispatch(setToken(token));
        dispatch(setIsAuthenticated(true));
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("currentUser", JSON.stringify(result.data));
        notification("login successful, click 'OK' to continue", "success");
        if (result.data.userType === "USER") {
          navigate("/user");
        } else {
          navigate("/farmer");
        }
      } else {
        // console.log(result);
        notification(result?.message, "error");
      }

    }catch(e){
      notification(e.message, 'info')
      console.log(e);
    }
    setLoading(false)
  }

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
                  onChange={handleInput}
                  value={post.email}
                />
              </div>

              <div className="inputs">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInput}
                  placeholder="Enter Password "
                  value={post.password}
                />
              </div>

              <div className="forgot-password">
                <Link to={"/forgotPassword"}>Forgot Password?</Link>
              </div>
              <div className="flex login-div4">
                {/* <Link to={"/home"}> */}
                {!loading && <button type="submit">Continue</button>}
                {loading && <BeatLoader color="#36d7b7" />}
                {/* </Link> */}
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
