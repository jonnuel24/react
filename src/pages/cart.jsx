import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Card from "../Components/card";
import '../asset/styles/cart.css'
import arrow from '../asset/images/Arrow 2.svg'

function cart() {
  return (
    <div>
      <Navbar />
      <div className="cart-main-div">
        <div className="flex flex-row justify-center py-8 div1"><h4 className="">Hello Gasgos , here is your <span className="font-bold">Cost Summary</span></h4></div>

        <div className="cart-div2">
          <div>
            <h1 className="text-left">Subtotal </h1>
            <h4>Delivery Fee Not included</h4>
          </div>
          <div>

          
            <img src={arrow} alt="" />
          </div>
          <div className="price2">N 224,000</div>
        </div>

        <div className="cart-div3">
          <div className="font-medium flex items-start">Items in <span className="font-bold">cart (4)</span></div>
          <div className="  cart-items">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <button className="btn btn-success btn-lg cart-div41">Proceed</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default cart;
