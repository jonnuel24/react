import Checkbox from "../Components/checkbox";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { notification } from "../services/notification";
import { BeatLoader } from "react-spinners";

function SignUpForm({ type }) {
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    userType: type,
    phoneNumber: "",
    password: "",
    country: "",
    state: "",
    city: "",
    street: "",
    localGovtArea: "",
    placeId: "64cy-u8df940u-7899e6cd",
    farmName: "",
    dateOfEstablishment: "",
    noOfEmployees: 0,
    addresses: [],
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
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
              "Invalid phone number format",
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
  const {
    handleSubmit,
    register,
    reset,
    // formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    validateInput(event.target.name, event.target.value);
  };

  async function signup() {
    try {
      if(!agreed){
        notification("You need to agree to the terms", 'error')
        return
      }
      setLoading(true);
      if (post.confirmPassword !== post.password) {
        notification("Password and Confirm Password do not match.", "error");
        return;
      } else {
        if (errors.email || errors.firstName || errors.lastName) {
          notification(
            "Pleas fill out all field and in the appropriate format",
            "error"
          );
        }
        post.phoneNumber = "234" + post.phoneNumber;
        const response = await accountServices.createAccount(post);
        if (response.status === "success") {
          notification("Registration was successful", "success");
          navigate("/login");
        } else {
          if (response.messages) {
            const messages = Object.values(response.messages);
            let msg = "";
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
    <>
      <h1 className="signup-header">
        <strong>{type} Personal</strong> Information
      </h1>
      <div className="signup-divider"></div>
      <div className="w-full pr-48 signup-form-div">
        {/* formData */}
        <form action="" onSubmit={handleSubmit(signup)} className="signup-form">
          <div className="grid gap-4 grid-cols-2 grid-rows-3 signup-signup">
            {(type === "FARMER" && step === 0) || type === "USER" ? (
              <>
                <div className="flex flex-col items-start">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    name="firstName"
                    type="text"
                    className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Firstname"
                    value={post.firstName}
                    onChange={handleInput}
                    required
                  />
                  {errors.firstName && <label>{errors.firstName}</label>}{" "}
                </div>
                {/* lastname */}
                <div className="flex flex-col items-start">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    name="lastName"
                    type="text"
                    className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Lastname"
                    value={post.lastName}
                    onChange={handleInput}
                    required
                  />
                </div>
                {/* email */}
                <div className="flex flex-col items-start">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
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

                {/* gender */}

                <div className="flex flex-col items-start">
                  <label htmlFor="country">Select A Gender</label>
                  <select
                    className="form-select"
                    id="floatingSelectGrid"
                    onChange={handleInput}
                    name="gender"
                    value={post.gender}
                  >
                    <option selected>Select Gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>

                <div className="flex flex-col items-start">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <div class="relative mb-6">
                    <div class="absolute top-0 bottom-[13px] start-0 flex items-center ps-1.5 pointer-events-none">
                      234
                    </div>
                    <input
                      name="phoneNumber"
                      type="tel"
                      className="w-full border-1 border-gray-600  ps-10 p-2.5 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="80xxxxxxxx"
                      value={post.phoneNumber}
                      onChange={handleInput}
                      required
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
                    name="phoneNumber"
                    type="tel"
                    className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Phone Number"
                    value={post.userType}
                    onChange={handleInput}
                    readOnly
                  />
                </div>

                {/* password */}

                <div className="flex flex-col items-start">
                  <label htmlFor="password">Password</label>
                  <div className="relative w-full">
                    <input
                      name="password"
                      className="w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="******************"
                      value={post.password}
                      onChange={handleInput}
                      required
                    />
                    <button
                      className="absolute right-0 top-0 mt-3 mr-3 text-gray-600"
                      onClick={togglePasswordVisibility}
                      type="button"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="relative w-full">
                    <input
                      className="w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      name="confirmPassword"
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="******************"
                      value={post.confirmPassword}
                      onChange={handleInput}
                      required
                    />
                    <button
                      className="absolute right-0 top-0 mt-3 mr-3 text-gray-600"
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
                <div className="flex flex-col items-start">
                  <label htmlFor="country">Country</label>
                  <input
                    name="country"
                    type="tel"
                    className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Phone Number"
                    value={post.country}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="country">State</label>
                  <input
                    type="text"
                    className="form-select"
                    id="state"
                    onChange={handleInput}
                    name="state"
                    value={post.state}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="country">city</label>
                  <input
                    type="text"
                    className="form-select"
                    id="city"
                    onChange={handleInput}
                    name="city"
                    value={post.city}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="country">Street</label>
                  <input
                    className="form-select"
                    id="street"
                    onChange={handleInput}
                    name="street"
                    value={post.street}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="country">Local Government Area</label>
                  <input
                    className="form-select"
                    id="localGovtArea"
                    onChange={handleInput}
                    name="localGovtArea"
                    value={post.localGovtArea}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="country">Farm Name</label>
                  <input
                    className="form-select"
                    id="farmName"
                    onChange={handleInput}
                    name="farmName"
                    value={post.farmName}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="country">Date of Establishment</label>
                  <input
                    type="date"
                    className="form-select"
                    id="dateOfEstablishment"
                    onChange={handleInput}
                    name="dateOfEstablishment"
                    value={post.dateOfEstablishment}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="country">Number of Employees</label>
                  <input
                    type="number"
                    className="form-select"
                    id="noOfEmployees"
                    onChange={handleInput}
                    name="noOfEmployees"
                    value={post.noOfEmployees}
                  />
                </div>
              </>
            )}
          </div>
          {(type === "FARMER" && step === 1) || type === "USER" ? (
            <div className="cta">
              <div>
                <Checkbox  agreed={agreed} setAgreed={setAgreed}/>
              </div>

              <div className="flex flex-start">
                <button
                  disabled={loading}
                  onClick={() => setStep(0)}
                  className="mr-10 btn btn-success btn-lg button"
                  type="button"
                >
                  Previous
                </button>
                {!loading && (
                  <button
                    className="btn btn-success btn-lg button"
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
            <div className="flex flex-start mt-10">
              <button
                disabled={loading}
                onClick={() => setStep(1)}
                className="btn btn-success btn-lg button"
                type="button"
              >
                Next
              </button>
            </div>
          )}
        </form>
        {/* {response && <div>Response from API: {response}</div>} */}
      </div>
    </>
  );
}

export default SignUpForm;
