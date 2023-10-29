import React from "react";
import "../asset/styles/forgotPassword.css";
// import { Link } from "react-router-dom";
import Logo from '../asset/images/logo.svg'
import { Icon } from '@iconify/react';

function CheckMail() {
  // const [email, setEmail] = useState("");
  // const [showMessage, setShowMessage] = useState(false);

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);

    
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setShowMessage(true);
  }

 
  return (
    <div className="flex justify-center align-middle fp-main-div">
      <form
        action=""
        className="flex flex-col fp-form"
        onSubmit={handleFormSubmit}
        
      >
        <img src={Logo} alt="" />
        <header>Check your email</header> <h6>We sent a password reset link to ekachikw9@gmail.com</h6>

        {/* <div className="inputs items-start">
          <label htmlFor="email" className="flex items-start mb-2">Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-2"
            placeholder="Enter Email"
            
           
          />
        </div> */}

        <div className="flex login-div4">
          <button type="submit">Ok</button>
        </div>
        <div>Didn’t receive the email ? Click to resend</div>
        <div className="flex flex-row items-center gap-2"><Icon icon="ion:chevron-back-outline" /> back to Login</div>
      </form>
    </div>
  );
}

export default CheckMail;
