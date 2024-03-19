import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../asset/styles/delivery2.css";
import "../asset/styles/payment.css";
import "../asset/styles/orderConfirmation.css";
import "../asset/styles/trackOrder.css";
// import { useDispatch, useSelector } from "react-redux";
// import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import OrderPlaced from "../asset/images/order-placed.svg";
import OrderConfirmed from "../asset/images/order-confirmed.svg";
import OrderShipped from "../asset/images/order-shipped.svg";
import OutforDelivery from "../asset/images/order-out-for-delivery.svg";
import OrderDelivered from "../asset/images/order-delivered.svg";

function TrackOrder() {
  // const user = useSelector((state) => state.user?.currentUser);
  return (
    <div>
      <Navbar />
      <div className="track-details-body">
        <header>Product Details</header>
        {/* 1 */}
        <div className="track-order-div1">
          <label
            htmlFor=""
            className="text-[24px] text-[#F93636] font-semibold"
          >
            Order #90897
          </label>
          {/*  */}
          <div className="track-order-div1-details">
            <div className="flex flex-col items-start gap-6 ">
              <div className="font-semibold">Placed on July 16th 2023</div>
              <div className="flex flex-row gap-4">
                <label htmlFor="">Items :</label>
                <div className="font-semibold">3</div>
              </div>
              <div className="flex flex-row gap-4">
                <label htmlFor="">Price:</label>
                <div className="font-semibold">N400,000</div>
              </div>
              <div className="flex flex-row gap-4">
                <label htmlFor="">Estimated Delivery Time:</label>
                <div className="font-semibold">
                  Mar 24th, 2024 - Mar 30th, 2024
                </div>
              </div>
              <div>
                <a href="#">Invoice</a>
              </div>
            </div>
            <div>
              <button className="mt-4 bg-[#006838] text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-400 custom-order-button">
                Re-order
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="track-order-div3">
          <div className="text-[24px] text-[#F93636] font-semibold">
            Order #483894 Cycle
          </div>
          <div className="flex flex-row justify-between w-full py-[32px] px-[240px]">
            {/* 1.1 */}
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="" className="text-[24px] font-normal">
                Order Placed
              </label>
              <img src={OrderPlaced} alt="" />
              <div className="px-[16px] py-[10px] border-2 border-green-500 rounded-xl bg-green-100 text-black font-medium">
                {" "}
                July 10, 2024
              </div>
            </div>
            {/* 1.2 */}
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="" className="text-[24px] font-normal">
                Order Confimed
              </label>
              <img src={OrderConfirmed} alt="" />
              <div className="px-[16px] py-[10px] border-2 border-green-500 rounded-xl bg-green-100 text-black font-medium">
                {" "}
                July 10, 2024
              </div>
            </div>
            {/* 1.3 */}
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="" className="text-[24px] font-normal">
                Shipped
              </label>
              <img src={OrderShipped} alt="" />
              <div className="px-[16px] py-[10px] border-2 border-[#FF0000] rounded-xl bg-[#FFF1F1] text-black font-medium">
                {" "}
                Pending
              </div>
            </div>
           {/* 1.4 */}
           <div className="flex flex-col items-center gap-4">
              <label htmlFor="" className="text-[24px] font-normal">
                Out for delivery
              </label>
              <img src={OutforDelivery} alt="" />
              <div className="px-[16px] py-[10px] border-2 border-[#FF0000] rounded-xl bg-[#FFF1F1] text-black font-medium">
                {" "}
                Pending
              </div>
            </div>
            {/* 1.5 */}
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="" className="text-[24px] font-normal">
                Order Delivered
              </label>
              <img src={OrderDelivered} alt="" />
              <div className="px-[16px] py-[10px] border-2 border-[#FF0000] rounded-xl bg-[#FFF1F1] text-black font-medium">
                {" "}
                Pending
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="track-order-div3">
          <label
            htmlFor=""
            className="text-[24px] text-[#F93636] font-semibold"
          >
            Order #90897 Summary
          </label>
          {/*  */}
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col items-start gap-6 w-full ">
              <div className="flex flex-row justify-between w-full">
                <label htmlFor="">Product Name</label>
                <div className="font-semibold">The Main Large Cow</div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <label htmlFor="">Price</label>
                <div className="font-semibold">N400,000</div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <label htmlFor="">Discount</label>
                <div className="font-semibold">NIL</div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <label htmlFor="">Shipping</label>
                <div className="font-semibold">N3,000</div>
              </div>
            </div>
            {/* line */}
            <div className="h-[1.5px] bg-[#00000017]"></div>
            <div className="flex flex-row justify-between w-full items-end">
              <label htmlFor="" className="text-[32px] font-semibold">
                Total
              </label>
              <div className=" text-[32px] font-semibold">N400,000</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TrackOrder;
