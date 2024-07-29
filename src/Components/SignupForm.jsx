import Checkbox from "../Components/checkbox";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { notification } from "../services/notification";
import { BeatLoader } from "react-spinners";
import "react-country-state-city/dist/react-country-state-city.css";
import data from "../asset/countries+states+cities.json";
import stateLgas from "../asset/state_lgas.json";
import Logo from "../asset/images/logo.svg";

function SignUpForm({ type, setStage, setUserData, stage, userData }) {
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [lgas, setLGAs] = useState([]);
  const [post, setPost] = useState({ email: "", userType: type });
  const [errors, setErrors] = useState({
    email: "",
  });
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
        const phoneRegex = /^(7|8|9)[01]\d{8}$/;
        if (!value.match(phoneRegex)) {
          setErrors({
            ...errors,
            [name]: "Invalid phone number format",
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
  const handleCountryChange = (event) => {
    const { value, name } = event.target;
    if (name == "country") {
      const result = data.find((c) => c.name == value);
      setStates(result.states);
    }
    if (name == "state") {
      const result = states.find((s) => s.name == value);
      const lgaList = stateLgas.find((s) => s.state === value);
      lgaList.lgas ? setLGAs(lgaList.lgas) : console.log(lgaList);
      setCities(result.cities);
    }

    setPost({ ...post, [name]: value });
    // validateInput(event.target.name, event.target.value);
  };

  const {
    handleSubmit,
    // register,
    // reset,
    // formState: { errors },
  } = useForm();

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    validateInput(event.target.name, event.target.value);
  };

  async function signup() {
    try {
      setUserData(post);
      if (stage === "editData") {
        setStage("completeProfile");
        return;
      }
      if (!agreed) {
        notification("You need to agree to the terms", "error");
        setLoading(false);
        return;
      } else {
        if (errors.email) {
          notification(
            "Pleas fill out all field and in the appropriate format",
            "error"
          );
          setLoading(false);
          return;
        }
        setLoading(true);
        const payload = {
          email: post.email,
          userType: post.userType,
        };
        const response = await accountServices.createAccount(payload);
        console.log("backend response data", response);
        if (response.status == "success") {
          notification(
            "Registration was successful and OTP was sent to " + post.email,
            "success"
          );
          localStorage.setItem("email", post.email);
          localStorage.setItem("userType", post.userType);
          setStage("OTP");
          // navigate("/verify-account");
        } else {
          if (response.messages) {
            const messages = Object.values(response.messages);
            messages.forEach((e) => {
              notification(e, "error");
            });
          }
          if (response.message) {
            notification(response.message, "error");
          }
        }
      }
    } catch (e) {
      notification(e.message, "info");
      console.log(e);
    }
    setLoading(false);
  }
  return (
    <div className="border-2 border-gray-100 bg-white shadow-sm p-8 rounded-3xl max-w-[95%] sm:max-w-[35%] mt-[30%] sm:mt-[3%]">
      <div className="w-full space-y-6">
        <img src={Logo} alt="" className="w-[20%]" />
        <div>
          <h1 className="text-3xl font-medium text-gray-600 text-left ">
            Signup as a {type}{" "}
          </h1>
          <p className="text-left text-lg text-gray-400 break-words">
            <span className="text-red-600 text-lg font-extrabold">* </span>{" "}
            Before signing up on Agripeller, please provide your email so we can
            verify it.
            <span className="text-red-600 text-lg font-extrabold">* </span>
          </p>
        </div>
      </div>
      <div className="w-full">
        {/* formData */}
        <form
          action=""
          onSubmit={handleSubmit(signup)}
          className="flex flex-col w-full gap-8"
        >
          <div className="grid gap-4 grid-cols-1 w-full">
            {/* email */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                type="email"
                className="py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-[56px] w-full rounded-xl border border-gray-300"
                placeholder="enter a valid email address"
                onChange={handleInput}
                value={post.email}
              />
              {errors.email && (
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.email}
                </p>
              )}{" "}
              {/* Error message */}
            </div>
          </div>

          <div className="w-full space-y-6">
            <div>
              <Checkbox agreed={agreed} setAgreed={setAgreed} />
            </div>
            <div className="flex flex-start w-full">
              <button
                className="bg-[#006838] w-full text-white px-16 py-3 rounded-xl"
                type="submit"
              >
                Signup
              </button>
              {loading && <BeatLoader color="#36d7b7" />}
            </div>
            <div className="w-full ml-auto">
              <h5 className="text-right">
                Already have an Account?{" "}
                <Link to="/login" className="text-[green]">
                  Login.
                </Link>
              </h5>
            </div>
          </div>
        </form>
        {/* {response && <div>Response from API: {response}</div>} */}
      </div>
    </div>
  );
}

export default SignUpForm;
