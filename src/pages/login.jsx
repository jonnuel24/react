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
  const [errors, setErrors] = useState({
    email: "",
  });
  const {
    handleSubmit,
    register,
    reset,
    // formState: { errors },
  } = useForm();

  const validateInput = (name, value) => {
    switch (name) {
      case "email":
        // Email validation regex pattern
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.match(emailRegex)) {
          setErrors({
            ...errors,
            [name]: "Invalid email format",
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
        break;
      case "age":
        const minAge = 18;
        const maxAge = 120;
        if (value < minAge || value > maxAge) {
          setErrors({
            ...errors,
            [name]: `Age must be between ${minAge} and ${maxAge}`,
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
        break;
      case "firstName":
      case "lastName":
        const minLength = 2; // Change as per requirement
        if (value.length < minLength) {
          setErrors({
            ...errors,
            [name]: `${
              name.charAt(0).toUpperCase() + name.slice(1)
            } must be at least ${minLength} characters long`,
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
        break;
      case "phoneNumber":
        const phoneRegex = /^(7|8|9)[01]\d{8}$/;
        if (!value.match(phoneRegex)) {
          setErrors({
            ...errors,
            [name]:
              "Invalid phone number format valid formats (80xxxxxxxx and 70xxxxxxxx and 90xxxxxxxx)",
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
        break;
      default:
        break;
    }
  };

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    validateInput(event.target.name, event.target.value);
  };

  async function login() {
    setLoading(true);
    try {
      if (errors.email) {
        notification("Please fill out the form appropriately", "error");
        return;
      }
      let result = await accountServices.login(post);
      if (typeof result == "string" || result == null || result === "") {
        console.log("execution to this length");
        console.log(result);
        notification(result, "error");
      } else if (result.statusCode === 200) {
        console.log("login response", result);
        if (result.data) {
          const { farm, token, ...rest } = result.data;
          dispatch(setCurrentUser(rest));
          dispatch(setFarm(farm));
          dispatch(setToken(token));
          dispatch(setIsAuthenticated(true));
          localStorage.setItem("token", token);
          localStorage.setItem("currentUser", JSON.stringify(result.data));
          notification("login successful", "success");
          if (result.data.userType === "USER") {
            navigate("/user");
          } else {
            navigate("/farmer");
          }
        } else {
          const { farm, token, ...rest } = result;
          dispatch(setCurrentUser(rest));
          dispatch(setFarm(farm));
          dispatch(setToken(token));
          dispatch(setIsAuthenticated(true));
          localStorage.setItem("token", token);
          localStorage.setItem("currentUser", JSON.stringify(result));
          notification("login successful", "success");
          if (result.data.userType === "USER") {
            navigate("/user");
          } else {
            navigate("/farmer");
          }
        }
      } else {
        // console.log(result);

        notification(result?.message, "error");
      }
    } catch (e) {
      notification(e.message, "info");
      console.log(e);
    }
    setLoading(false);
  }

  return (
    <div className="border-2 border-gray-100 bg-white shadow-sm p-8 rounded-3xl w-full sm:w-[30%] max-w-[95%] sm:max-w-[35%] mt-[30%] sm:mt-[3%] mx-auto space-y-6">
      <div className="">
        <img src={logo} alt="" className="w-[20%]" />
      </div>
      <div className="">
        <header className="text-3xl font-medium text-gray-600">
          Login to Agripeller{" "}
        </header>
        <div className="flex flex-col gap-4">
          <div className="text-[#055E35]">Welcome back!</div>
          <form
            action=""
            onSubmit={handleSubmit(login)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleInput}
                value={post.email}
                className="py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-[56px] w-full rounded-xl border border-gray-300"
              />
              {errors.email && (
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                placeholder="Enter Password "
                value={post.password}
                className="py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-[56px] w-full rounded-xl border border-gray-300"
              />
            </div>

            <div className="w-full">
              <Link to={"/forgotPassword"} className="w-full mr-auto">
                Forgot Password?
              </Link>
            </div>
            <div className="flex flex-col gap-2 w-full">
              {/* <Link to={"/home"}> */}
              {!loading && (
                <button
                  type="submit"
                  className="bg-[#006838] w-full text-white px-16 py-3 rounded-xl"
                >
                  Continue
                </button>
              )}
              {loading && <BeatLoader color="#36d7b7" />}
              {/* </Link> */}
              <div className="text-right justify-end items-end flex w-full">
                Don’t have an account? <Link to={"/signup"}> Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
