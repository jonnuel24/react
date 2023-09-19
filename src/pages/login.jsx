// import React from "react";
import React, { useState } from "react";
import LoginBg from "../asset/images/login_bg.svg";
import "../asset/styles/login.css";
import logo from "../asset/images/logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    email: "",
    password: "",
    userType: "",
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

  async function login() {
    let result = await accountServices.login(post);
    if (result.statusCode === 200) {
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("currentUser", JSON.stringify(result.data));
      alert("login successful, click 'OK' to continue")
      navigate("/home");
    } else {
      alert(result.message);
    }

    console.log(result);
    // event.preventDefault();
    // axios
    //   .post(
    //     "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/user/login",
    //     post
    //   )
    //   .then((response) => console.log(response))
    //   .catch((error) => {
    //     console.error("AxiosError:", error);
    //     if (error.response) {
    //       console.error("Response Data:", error.response.data);
    //     }
    //   });
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
              <div className="flex flex-col items-start">
                <label htmlFor="country">User Type</label>
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  onChange={handleInput}
                  name="userType"
                  value={post.userType}
                >
                  <option selected>Select a User Type</option>
                  <option value="FARMER">FARMER</option>
                  <option value="USER">USER</option>
                </select>
                {/* <CountrySelector
                  selectedCountry={selectedCountry}
                  onChange={handleCountryChange}
                /> */}
                {/* <p>Selected Country: {selectedCountry ? selectedCountry.label : 'None'}</p> */}
              </div>
              <div className="forgot-password">
                <Link to={"/#"}>Forgot Password?</Link>
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