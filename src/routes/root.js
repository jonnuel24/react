import React from "react";
import onboard from "../pages/onboard";
import signup from "../pages/signup";
import login from "../pages/login";
import createAccount from "../pages/createAccount";
import home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import productDetails from "../pages/productDetails";

import cart from "../pages/cart";
import delivery from "../pages/delivery";
import delivery2 from "../pages/delivery2";
import register from "../pages/register";

function Root() {
  return (
    <Routes>
      <Route path="/" exact Component={onboard} />
      <Route path="/signup" Component={signup} />
      <Route path="/login" Component={login} />
      <Route path="/createAccount" Component={createAccount} />

      <Route path="/home" Component={home} />

      <Route path="/productDetails" Component={productDetails} />

      <Route path="/cart" Component={cart} />

      <Route path="/delivery" Component={delivery} />

      <Route path="/delivery2" Component={delivery2} />
      <Route path="/register" Component={register} />
    </Routes>
  );
}

export default Root;
