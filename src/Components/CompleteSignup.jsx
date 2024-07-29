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

function CompleteSignup({ type, setStage, setUserData, stage, userData }) {
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [lgas, setLGAs] = useState([]);
  const [post, setPost] = useState({ ...userData, userType: type });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    terms: "",
  });

  const completeProfile = async () => {
    const payload = { ...post };
    payload.phoneNumber = "+234" + payload.phoneNumber;
    // payload.dateOfBirth = "1999-01-01";
    if (payload.userType === "FARMER") {
      
    } else {
      delete payload.dateOfEstablishment;
    }
    console.log(payload);
    const response = await accountServices.completeProfile(payload);
    if (response.statusCode === 200) {
      notification("Profile Updated Successfully");
      navigate("/login");
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
  };
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

  useEffect(() => {
    const result = data.find((c) => c.name == "Nigeria");
    setStates(result.states);
  }, []);
  const today = new Date().toISOString().split("T")[0];
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    validateInput(event.target.name, event.target.value);
  };

  async function signup() {
    try {
      if (!agreed) {
        notification("You need to agree to the terms", "error");
        setLoading(false);
        return;
      }
      if (post.confirmPassword !== post.password) {
        notification("Password and Confirm Password do not match.", "error");
        setLoading(false);
        return;
      } else {
        if (
          errors.email ||
          errors.firstName ||
          errors.lastName ||
          errors.phoneNumber
        ) {
          notification(
            "Pleas fill out all field and in the appropriate format",
            "error"
          );
          setLoading(false);
          return;
        }
        setLoading(true);
        completeProfile(post);
        // console.log("backend response data", response);
      }
    } catch (e) {
      notification(e.message, "info");
      console.log(e);
    }
    setLoading(false);
  }
  return (
    <div className="flex flex-col justify-center w-full max-w-[40%] items-center border-2 border-gray-100 bg-white shadow-sm p-8 rounded-3xl gap-6">
      <div className="w-full mr-auto">
        <img src={Logo} alt="" className=" w-[15%]" />
      </div>

      <div className="w-full space-y-12">
        <h1 className="text-3xl font-medium text-gray-900">
          {type}'s Personal Information
        </h1>
        {/* formData */}
        <form action="" onSubmit={handleSubmit(signup)} className="w-full flex flex-col">
          <div className="grid grid-cols-2 gap-3 w-full">
            {(type === "FARMER" && step === 0) || type === "USER" ? (
              <>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl border border-gray-300 h-[56px]"
                    placeholder="Firstname"
                    value={post.firstName}
                    onChange={handleInput}
                    pattern="[a-zA-Z\s']{1,45}"
                    required
                  />
                  {errors.firstName && <label>{errors.firstName}</label>}{" "}
                </div>
                {/* lastname */}
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl border border-gray-300 h-[56px]"
                    placeholder="Lastname"
                    value={post.lastName}
                    onChange={handleInput}
                    required
                    pattern="[a-zA-Z\s']{1,45}"
                  />
                </div>

                {/* email */}
                <div className="flex flex-col items-start gap-2 max-w-[720px">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    type="email"
                    className="w-full py-2 px-3 h-[56px] leading-tight focus:outline-none focus:shadow-outline rounded-xl border border-gray-300"
                    placeholder="Email"
                    onChange={handleInput}
                    value={post.email}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.email}
                    </p>
                  )}{" "}
                  {/* Error message */}
                </div>

                {/* gender */}

                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="country">Select A Gender</label>
                  <select
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                    id="floatingSelectGrid"
                    onChange={handleInput}
                    name="gender"
                    value={post.gender}
                  >
                    <option>Select Gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>

                <div className="flex flex-col items-start">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <div className="flex w-full leading-tight focus:outline-none focus:shadow-outline h-[56px] overflow-clip rounded-xl border border-gray-300">
                    <div className="flex items-center pointer-events-none px-3 border-r bg-gray-100">
                      234
                    </div>
                    <input
                      name="phoneNumber"
                      type="text"
                      className="w-full border-none"
                      placeholder="80xxxxxxxx"
                      value={post.phoneNumber}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                      pattern="^(7|8|9)[01]\d{8}$"
                    />
                  </div>
                  <div className="w-full">
                    {errors.phoneNumber && (
                      <p className="mt-4 text-sm text-red-600 dark:text-red-500">
                        {errors.phoneNumber}
                      </p>
                    )}{" "}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="phoneNumber">User Type</label>
                  <input
                    name="userType"
                    type="text"
                    className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl border border-gray-300  h-[56px]"
                    placeholder="User Type"
                    value={post.userType}
                    readOnly
                  />
                </div>

                {/* password */}

                <div className="flex flex-col items-start">
                  <label htmlFor="password">Password</label>
                  <div className="w-full flex items-center h-[56px] rounded-xl border border-gray-300 ">
                    <input
                      name="password"
                      className="w-full border-none"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="******************"
                      value={post.password}
                      onChange={handleInput}
                      required
                    />
                    <button
                      className="text-gray-600 flex bg-gray-100 items-center h-full px-2"
                      onClick={togglePasswordVisibility}
                      type="button"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="w-full flex items-center h-[56px] rounded-xl border border-gray-300">
                    <input
                      className="w-full border-none"
                      name="confirmPassword"
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="******************"
                      value={post.confirmPassword}
                      onChange={handleInput}
                      required
                    />
                    <button
                      className="text-gray-600 flex bg-gray-100 items-center h-full px-2"
                      onClick={togglePasswordVisibility}
                      type="button"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </>
            ) : null}

            {type === "FARMER" && step === 1 && (
              <>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="country">Country</label>

                  <select
                    name="country"
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                    onChange={handleCountryChange}
                    required
                    value={post.country || ""}
                    disabled
                  >
                    <option disabled hidden>
                      Select a country...
                    </option>
                    {data?.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="country">State</label>
                  <select
                    type="text"
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                    id="state"
                    onChange={handleCountryChange}
                    name="state"
                    value={post.state || ""}
                  >
                    <option defaultValue>
                      Choose State/Province/Region...
                    </option>
                    {states.map((state) => (
                      <option key={state.id} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="country">city</label>
                  <select
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                    id="city"
                    onChange={handleCountryChange}
                    name="city"
                    value={post.city}
                  >
                    <option defaultValue>
                      Choose State/Province/Region...
                    </option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="country">Street</label>
                  <input
                    id="street"
                    onChange={handleInput}
                    name="street"
                    value={post.street}
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="country">Local Government Area</label>
                  <select
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                    id="localGovtArea"
                    onChange={handleInput}
                    name="localGovtArea"
                    value={post.localGovtArea}
                  >
                    <option value="">Select Local Government Area</option>
                    {lgas &&
                      lgas.map((lga) => (
                        <option key={lga} value={lga}>
                          {lga}
                        </option>
                      ))}
                  </select>
                  {/* <input
                    className=""
                    id="localGovtArea"
                    onChange={handleInput}
                    name="localGovtArea"
                    value={post.localGovtArea}
                  /> */}
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="country">Farm Name</label>
                  <input
                    id="farmName"
                    onChange={handleInput}
                    name="farmName"
                    value={post.farmName}
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                  />

                </div>
                <div className="flex flex-col gap-2  items-start">
                  <label htmlFor="country">Date of Establishment</label>
                  <input
                    type="date"
                    id="dateOfEstablishment"
                    onChange={handleInput}
                    name="dateOfEstablishment"
                    value={post.dateOfEstablishment}
                    max={today}
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label htmlFor="country">Number of Employees</label>
                  <input
                    type="number"
                    id="noOfEmployees"
                    onChange={handleInput}
                    name="noOfEmployees"
                    value={post.noOfEmployees}
                    className="h-[56px] w-full rounded-xl border border-gray-300"
                  />
                </div>
              </>
            )}
          </div>
          {(type === "FARMER" && step === 1) || type === "USER" ? (
            <div className="flex flex-col justify-center w-full gap-6">
              <div fle className="w-full justify-start">
                <Checkbox agreed={agreed} setAgreed={setAgreed} />
              </div>

              <div className="flex flex-start gap-4 ">
                {type === "FARMER" && (
                  <button
                    disabled={loading}
                    onClick={() => setStep(0)}
                    className="border-gray-300 border rounded-xl w-full py-3 px-4 h-[56px]"
                    type="button"
                  >
                    Previous
                  </button>
                )}
                {!loading && (
                  <button
                    className="text-white bg-[#006838] hover:bg-[055E35] border rounded-xl h-[56px] w-full px-4"
                    type="submit"
                  >
                    Signup
                  </button>
                )}
                {loading && <BeatLoader color="#36d7b7" />}
              </div>
              <div className="flex flex-row w-full items-center justify-end">
                <h5>
                  Already have an Account?{" "}
                  <Link to="/login" className="text-[green]">
                    Login.
                  </Link>
                </h5>
              </div>
            </div>
          ) : null}
          {type === "FARMER" && step === 0 && (
            <div className="flex flex-start w-full mt-6">
              <button
                disabled={loading}
                onClick={() => setStep(1)}
                className="text-white bg-[#006838] hover:bg-[055E35] h-[56px] border rounded-xl w-full px-4"
                type="button"
              >
                Next
              </button>
            </div>
          )}
        </form>
        {/* {response && <div>Response from API: {response}</div>} */}
      </div>
    </div>
  );
}

export default CompleteSignup;
