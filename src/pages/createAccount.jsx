import React from "react";
import Logo from "../asset/images/logo.svg";
import Drop from "../asset/images/drop-img.svg";
import { Link } from "react-router-dom";
import "../asset/styles/createAccount.css"

function createAccount() {
  return (
    <div className="flex flex-col items-center justify-center main-div overflow-hidden">
      <div className="flex flex-col div">
        <div className="flex flex-col items-start div-up">
          <img src={Logo} alt="" className="logo" />
        </div>

        <div className="flex flex-col cta">
          <button className="createAccount-btn2 ">
            Create Account as <strong>Farmer</strong>
          </button>

          <button className="createAccount-btn2">
            Create Account as <strong>User</strong>
          </button>
        </div>

        <div className="flex flex-col items-end">
          <h1 className="createAccount-member">
            Already a member? <Link className=" text-green-800">Login</Link>
          </h1>
        </div>
      </div>

      <img src={Drop} alt="" className="drop-img" />
    </div>
  );
}

export default createAccount;
