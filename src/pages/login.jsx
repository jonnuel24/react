// import React from "react";
import React, { useState } from "react";
// import LoginBg from "../asset/images/login_bg.svg";
import "../asset/styles/login.css";
import logo from "../asset/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/userActions";
import { setFarm, setToken } from "../store/reducers/userReducer";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    email: "",
  });

  const {
    handleSubmit,
    // register,
    // reset,
    // formState: { errors },
  } = useForm();

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  async function login() {
    let result = await accountServices.login(post);
    console.log("result", result);
    if (typeof result == "string" || result == null || result === "") {
      alert(result);
      return;
    }
    if (result.statusCode === 200) {
      const { farm, token, ...rest } = result.data;
      dispatch(setUser({...rest}));
      dispatch(setFarm(farm))
      dispatch(setToken(token))
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("currentUser", JSON.stringify(result.data));
      alert("login successful, click 'OK' to continue");
      if (result.data.userType === "USER") {
        navigate("/user");
      } else {
        navigate("/farmer");
      }
    } else {
      alert(result.message);
    }
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
                <button type="submit">Continue</button>
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
