import React from "react";
import onboard from "../pages/onboard";
import signup from "../pages/signup";
import Login from "../pages/login";
import createAccount from "../pages/createAccount";
import home from "../pages/home";
import {
  Route,
  Routes,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import productDetails from "../pages/productDetails";
import Form from "../pages/form";
import forgotPassword from "../pages/forgotPassword";
import resetPassword from "../pages/resetPassword";
import verificationCode from "../pages/verificationCode";
import CheckMail from "../pages/checkMail";
import PasswordChanged from "../pages/passwordChanged";

import cart from "../pages/cart";
import delivery from "../pages/delivery";
import delivery2 from "../pages/delivery2";

function Root() {
  return (
    <Routes>
      <Route path="/" exact Component={onboard} />
      <Route path="/signup" Component={signup} />
      <Route path="/login" Component={Login} />
      <Route path="/createAccount" Component={createAccount} />

      <Route path="/home" Component={home} />

      <Route path="/productDetails" Component={productDetails} />

      <Route path="/cart" Component={cart} />

      <Route path="/delivery" Component={delivery} />

      <Route path="/delivery2" Component={delivery2} />

      <Route path="/form" Component={Form} />
      <Route path="/forgotPassword" Component={forgotPassword} />
      <Route path="/resetPassword" Component={resetPassword} />
      <Route path="/verificationCode" Component={verificationCode} />
      <Route path="/checkMail" Component={CheckMail} />
      <Route path="/passwordChanged" Component={PasswordChanged} />

    </Routes>
  );
}

export default Root;
