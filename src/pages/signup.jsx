import React, { useState } from "react";
import SignupImg from "../asset/images/signup-img.png";
import Logo from "../asset/images/logo.svg";
import "../asset/styles/signup.css";
import Checkbox from "../Components/checkbox";
import Button from "../Components/button";
import CountrySelector from "../Components/country";
import DropImg from "../asset/images/drop-img.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

// to handle the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    address: "",
    farmName: "",
  });

  const [response, setResponse] = useState(null);

// to handle the input change

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

// handle submit

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/users/signup",
        formData
      );
      setResponse(response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex h-screen overall-div">
      <div className="w-3/12">
        <img src={SignupImg} alt="" className="h-screen signup-img" />
      </div>

      <div className="flex flex-col items-start w-9/12 signup-right-div">
        <img src={Logo} alt="" />
        <h1 className="signup-header">
          <strong>Farmer Personal</strong> Information
        </h1>
        <div className="signup-divider"></div>
        <div className="w-full pr-48 signup-form-div">
          <form onSubmit={handleFormSubmit} action="" className="signup-form">
            <div className="grid gap-4 grid-cols-2 grid-rows-3 signup-signup">
              <div className="flex flex-col items-start">
                <label htmlFor="firstname">Firstname</label>
                <input
                  name="firstName"
                  type="text"
                  className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Firstname"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="lastname">Lastname</label>
                <input
                  name="lastName"
                  type="text"
                  className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Lastname"
                  value={formData.lasttName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="tel"
                  className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
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
                    value={formData.password}
                    onChange={handleInputChange}
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
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******************"
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

            {/* section 2         */}

            <div className="signup-divider2"></div>
            <div className="grid gap-4 grid-cols-2 grid-rows-2 signup">
              <div className="flex flex-col items-start">
                <label htmlFor="companyRegisteredName">
                  Company Registered Name
                </label>
                <input
                  name="companyName"
                  type="text"
                  className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Company Name"
                  value={formData.conpmanyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="country">Select A Country</label>
                <CountrySelector
                  selectedCountry={selectedCountry}
                  onChange={handleCountryChange}
                />
                {/* <p>Selected Country: {selectedCountry ? selectedCountry.label : 'None'}</p> */}
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="address">Address (Residential)</label>
                <input
                  name="address"
                  type="text"
                  className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="farmName">Farm Name</label>
                <input
                  name="farmName"
                  type="text"
                  className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Farm Name"
                  value={formData.farmName}
                  onChange={handleInputChange}
                  required
                />
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
            </div>
          </form>
          {response && <div>Response from API: {response}</div>}
        </div>
      </div>
    </div>
  );
}

export default Signup;
