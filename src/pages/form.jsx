import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [post, setPost] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    userType: "",
    phoneNumber: "",
    password: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  //function for submit
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/users/signup", post)

      .then((response) => console.log(response))
      .catch((error) => {
        console.error("AxiosError:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
        }
      });
  }
  return (
    <div className="mt-10">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1>Fill in your details</h1>

        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={post.firstName}
            onChange={handleInput}
            placeholder="Enter first name"
            autoComplete="given-name" // Add autocomplete attribute
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={post.lastName}
            onChange={handleInput}
            placeholder="Enter last name"
            autoComplete="family-name" // Add autocomplete attribute
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={post.email}
            onChange={handleInput}
            placeholder="Enter email"
            autoComplete="email" // Add autocomplete attribute
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={post.gender}
            onChange={handleInput}
            placeholder="Enter gender"
            autoComplete="sex" // Add autocomplete attribute
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="userType">User Type</label>
          <input
            type="text"
            id="userType"
            name="userType"
            value={post.userType}
            onChange={handleInput}
            placeholder="Enter user type"
            autoComplete="organization-title" // Add autocomplete attribute
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={post.phoneNumber}
            onChange={handleInput}
            placeholder="Enter phone number"
            autoComplete="tel" // Add autocomplete attribute
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={post.password}
            onChange={handleInput}
            placeholder="*********"
            autoComplete="new-password" // Add autocomplete attribute
          />
        </div>
        <br />

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Form;