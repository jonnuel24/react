import React from "react";
import onboard from "../pages/onboard";
import signup from "../pages/signup";
import Login from "../pages/login";
import createAccount from "../pages/createAccount";
import home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/productDetails";
import Form from "../pages/form";
import forgotPassword from "../pages/forgotPassword";
import resetPassword from "../pages/resetPassword";
import verificationCode from "../pages/verificationCode";
import CheckMail from "../pages/checkMail";
import PasswordChanged from "../pages/passwordChanged";
import Profile from "../pages/profile";
import Profile_edit from "../pages/profile_edit";
import Wishlist from "../pages/wishlist";
import Order_Confirmation from "../pages/OrderConfirmation"
import TrackOrder from "../pages/trackOrder";
import Order from "../pages/order";
import OrderPending from "../pages/orderPending"
import OrderComplete from "../pages/orderComplete"
import ChangePassword from "../pages/changePassword"
import Faq from "../pages/faq"

import cart from "../pages/cart";
import delivery from "../pages/delivery";
import preview from "../pages/preview";
import Notification from "../pages/notification";
import Website from "../pages/website";
import Dashboard from "../pages/farmers/dashboard";
import Addproduct from "../pages/farmers/addproduct";
import MyProduct from "../pages/farmers/myProduct";
import ManageOrders from "../pages/farmers/manageOrders";
import Payment from "../pages/payment";



function Root() {
  return (
    <Routes>
      <Route path="/" exact Component={Website} />
      <Route path="/onboard" Component={onboard} />
      <Route path="/signup" Component={signup} />
      <Route path="/login" Component={Login} />
      <Route path="/createAccount" Component={createAccount} />

      <Route path="/user" Component={home} />

      <Route path="/user/product/:id" Component={ProductDetails} />

      <Route path="/cart" Component={cart} />

      <Route path="/delivery" Component={delivery} />

      <Route path="/preview" Component={preview} />

      <Route path="/form" Component={Form} />
      <Route path="/forgotPassword" Component={forgotPassword} />
      <Route path="/resetPassword" Component={resetPassword} />
      <Route path="/verificationCode" Component={verificationCode} />
      <Route path="/checkMail" Component={CheckMail} />
      <Route path="/passwordChanged" Component={PasswordChanged} />
      <Route path="/profile" Component={Profile} />
      <Route path="/profile_edit" Component={Profile_edit} />
      <Route path="/wishlist" Component={Wishlist} />
      <Route path="/notification" Component={Notification} />
      <Route path="/payment" Component={Payment} />
      <Route path="/OrderConfirmation" Component={Order_Confirmation} /> 
      <Route path="/order/track/:id" Component={TrackOrder} /> 
      <Route path="/order" Component={Order} />
      <Route path="/orderPending" Component={OrderPending} />
      <Route path="/orderComplete" Component={OrderComplete} />
      <Route path="/changePassword" Component={ChangePassword} />
      <Route path="/faq" Component={Faq} />

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
