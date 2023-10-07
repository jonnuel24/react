import React, { useState } from "react";
import SignupImg from "../asset/images/signup-img.png";
import Logo from "../asset/images/logo.svg";
import "../asset/styles/signup.css";
import Checkbox from "../Components/checkbox";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    userType: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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

  async function signup() {
    try {
      if (post.confirmPassword !== post.password) {
        alert("Password and Confirm Password do not match.");
        return;
      } else {
        const response = await accountServices.createAccount(post);
        console.log(response)
        if (response.message === "Signup successful") {
          navigate("/login")
          alert("Signup successful!");
        } else {
          alert(response.message);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  // show and hide password
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className="flex h-screen overall-div">
      <div className="w-3/12 su-left">
        <img src={SignupImg} alt="" className="h-screen signup-img" />
      </div>

      <div className="flex flex-col items-start w-9/12 signup-right-div">
        <img src={Logo} alt="" />
        <h1 className="signup-header">
          <strong>Farmer Personal</strong> Information
        </h1>
        <div className="signup-divider"></div>
        <div className="w-full pr-48 signup-form-div">
          {/* formData */}
          <form
            action=""
            onSubmit={handleSubmit(signup)}
            className="signup-form"
          >
            <div className="grid gap-4 grid-cols-2 grid-rows-3 signup-signup">
              {/* firstname */}
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
                  value={post.email}
                  onChange={handleInput}
                  required
                />
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
                {/* <CountrySelector
                  selectedCountry={selectedCountry}
                  onChange={handleCountryChange}
                /> */}
                {/* <p>Selected Country: {selectedCountry ? selectedCountry.label : 'None'}</p> */}
              </div>

              {/* userType */}

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
              {/* Phone Number */}
              <div className="flex flex-col items-start">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="tel"
                  className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone Number"
                  value={post.phoneNumber}
                  onChange={handleInput}
                  required
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
            </div>

            {/* section 3 */}
            <div className="cta">
              <div>
                <Checkbox />
              </div>

              <div className="flex flex-start">
                <button className="btn btn-success btn-lg button" type="submit">
                  Signup
                </button>
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
          </form>
          {/* {response && <div>Response from API: {response}</div>} */}
        </div>
      </div>
    </div>
  );
}

export default Signup;
