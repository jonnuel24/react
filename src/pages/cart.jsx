import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Card from "../Components/card";
import "../asset/styles/cart.css";
import arrow from "../asset/images/Arrow 2.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const user = useSelector((state) => state.user?.currentUser);
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);
  const cartCount = useSelector((state) => state.cart?.count);
  const cartItems = useSelector((state) => state.cart?.items);
  const cartSummary = useSelector((state) => state.cart?.summary);

  return (
    <div>
      <Navbar />
      <div className="cart-main-div">
        <div className="flex flex-row justify-center py-8 div1">
          <h4 className="">
            Hello {user?.firstName} {user?.lastName} , here is your{" "}
            <span className="font-bold">Cost Summary</span>
          </h4>
        </div>

        <div className="cart-div2">
          <div>
            <h1 className="text-left">Subtotal </h1>
            <h4>Delivery Fee Not included</h4>
          </div>
          <div>
            <img src={arrow} alt="" />
          </div>
          <div className="price2">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "NGN",
            }).format(cartSummary?.totalProductCost)}
          </div>
        </div>

        <div className="px-16 py-8 space-y-6">
          <div className="font-medium flex items-start">
            Items in{" "}
            <span className="font-bold ml-2">
              cart ({cartSummary?.overallQuantity})
            </span>
          </div>
          <div className="  cart-items grid grid-cols-3 ">
            {cartItems?.map((e) => {
              return <Card cartId={e.id} product={e.product} />;
            })}
            {/* <Card />
          
            <Card />
            <Card /> */}
          </div>
          <div>
            {/* paystack button */}
            {/* {cartItems?.length && (
              <PaystackButton
                className="btn btn-success btn-lg cart-div41"
                {...componentProps}
              />
            )} */}

            {/* proceed button */}
            <Link to="/preview">
              <button className="btn btn-success btn-lg cart-div41">
                Proceed
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
