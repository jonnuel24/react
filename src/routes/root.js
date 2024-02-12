import React from "react";
import onboard from "../pages/onboard";
import signup from "../pages/signup";
import Login from "../pages/login";
import createAccount from "../pages/createAccount";
import home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import productDetails from "../pages/productDetails";
import Form from "../pages/form";
import forgotPassword from "../pages/forgotPassword";
import resetPassword from "../pages/resetPassword";
import verificationCode from "../pages/verificationCode";
import CheckMail from "../pages/checkMail";
import PasswordChanged from "../pages/passwordChanged";
import Profile from "../pages/profile";
import Wishlist from "../pages/wishlist";

import cart from "../pages/cart";
import delivery from "../pages/delivery";
import delivery2 from "../pages/delivery2";
import Notification from "../pages/notification";
import Website from "../pages/website";
import Dashboard from "../pages/farmers/dashboard";
import Addproduct from "../pages/farmers/addproduct";
import MyProduct from "../pages/farmers/myProduct";
import ManageOrders from "../pages/farmers/manageOrders";

function Root() {
  return (
    <Routes>
      <Route path="/" exact Component={Website} />
      <Route path="/onboard" Component={onboard} />
      <Route path="/signup" Component={signup} />
      <Route path="/login" Component={Login} />
      <Route path="/createAccount" Component={createAccount} />

      <Route path="/user" Component={home} />

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
      <Route path="/profile" Component={Profile} />
      <Route path="/wishlist" Component={Wishlist} />
      <Route path="/notification" Component={Notification} />

      {/* Farmer */}
      <Route path="/farmer" Component={Dashboard} />
      <Route path="/product/create" Component={Addproduct} />
      <Route path="/product" Component={MyProduct} />
      <Route path="/manageOrders" Component={ManageOrders} />

      {/* website */}
      <Route path="/website" Component={Website} />
    </Routes>
  );
}

export default Root;
