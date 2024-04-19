// import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../asset/styles/delivery2.css";
import "../asset/styles/payment.css";
import "../asset/styles/orderConfirmation.css";
// import { useDispatch, useSelector } from "react-redux";
// import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Cart from "../asset/images/cart.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";



function Order_Confirmation() {
  // const user = useSelector((state) => state.user?.currentUser);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <header className="text-left px-[64px] pt-[32px]">
          <label htmlFor="" className="">
            Hello Rabi, here's your cost summary
          </label>
        </header>
        <div className="">
          <div className="delivery-div1 mb-[48px]">
            <div className="delivery-button-active">
              <button>Delivery</button>
            </div>
            <div className="delivery-button-active">
              <button>Payment</button>
            </div>
            <div className="delivery-button-active">
              <button>Summary</button>
            </div>
          </div>

          {/* order summary */}
          <div className="flex flex-col items-start px-[200px] py-[32px] gap-[24px]">
            <header className="font-bold text-[30px]">Order Summary</header>
            <div className="w-full flex flex-col gap-[16px]">
              <div className="flex flex-row justify-between w-full">
                <div className="text-[20px]">Subtotal</div>
                <div className="text-[20px]">N200,000</div>
              </div>
              {/*  */}
              <div className="flex flex-row justify-between w-full">
                <div className="text-[20px]">Shipping</div>
                <div className="text-[20px]">N3,000</div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="font-bold text-[30px] text-[#5A5A5A]">Total</div>
              <div className="font-bold text-[30px]">N203,000</div>
            </div>
          </div>

          {/* address */}
          <div className="flex flex-col items-start  gap-[24px]">
            <div className="px-[200px] py-[32px] flex flex-row justify-between w-full bg-[#E0ECE0]">
              <div className="font-bold text-[30px]">Address</div>
              <button className="font-semibold text-[20px] text-[#006838]">
                Change
              </button>
            </div>

            <div className=" px-[200px] py-[32px] w-full flex flex-col gap-[16px]">
              <div className="flex flex-col items-start gap-[24px] w-full">
                <div className="text-[20px] font-medium">
                  Gasgos Gbenga Koiki
                </div>
                <div className="text-[20px] font-medium flex flex-row gap-2">
                  <Icon icon="material-symbols:my-location" />
                  44 Commerical Avenue
                </div>
                <div className="text-[20px] font-medium flex flex-row gap-2">
                  <Icon icon="ic:round-phone" />
                  +234 816 813 4671
                </div>
              </div>
            </div>
          </div>

          {/* payment method */}
          <div className="flex flex-col items-start  gap-[24px]">
            <div className="px-[200px] py-[32px] flex flex-row justify-between w-full bg-[#E0ECE0]">
              <div className="font-bold text-[30px]">Payment Method</div>
              <button className="font-semibold text-[20px] text-[#006838]">
                Change
              </button>
            </div>

            <div className=" px-[200px] py-[32px] w-full flex flex-col gap-[16px]">
              <button className="font-medium flex flex-row justify-between items-center w-full hover:bg-[#E0ECE0] border hover:border-[#006838] p-[16px] rounded-[8px]">
                <div className="text-[20px] font-medium flex flex-row gap-2 items-center">
                  <Icon
                    icon="mdi:bank-outline"
                    style={{ width: "32px", height: "32px" }}
                  />
                  Paystack
                </div>
                <Icon icon="akar-icons:radio" />
              </button>
            </div>
          </div>

          {/* Logistics */}
          <div className="flex flex-col items-start  gap-[24px]">
            <div className="px-[200px] py-[32px] flex flex-row justify-between w-full bg-[#E0ECE0]">
              <div className="font-bold text-[30px]">Logistics</div>
              <button className="font-semibold text-[20px] text-[#006838]">
                Change
              </button>
            </div>

            <div className=" px-[200px] py-[32px] w-full flex flex-col gap-[16px]">
              <button className="font-medium flex flex-row justify-between items-center w-full hover:bg-[#E0ECE0] border hover:border-[#006838] p-[16px] rounded-[8px]">
                <div className="text-[20px] font-medium flex flex-row gap-2 items-center">
                  <Icon
                    icon="iconamoon:delivery"
                    style={{ width: "32px", height: "32px" }}
                  />
                  GIG Logistics
                </div>
                <Icon icon="akar-icons:radio" />
              </button>
            </div>
          </div>
        </div>

        <div className="delivery-div5 mt-[48px]">
          <button className="" onClick={openModal}>
            Confirm Order
          </button>

          {/* {cartItems?.length && (
              <PaystackButton
                className="btn btn-success btn-lg cart-div41"
                {...componentProps}
              />
            )} */}

          {/* success modal */}
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative w-[900px] h-fit py-[32px] flex flex-col items-center bg-white rounded-md">
                {/* Close icon */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 custom-close-button"
                >
                  <Icon
                    icon="carbon:close-filled"
                    width="48px"
                    height="48px"
                    style={{ color: "#5a5a5a" }}
                  />
                </button>

                {/* Modal content */}
                <div className="p-6 flex flex-col items-center">
                  <label htmlFor="" className="font-medium text-[24px]">
                    Hello Gasgos,
                  </label>
                  <img src={Cart} alt="" className="mt-4" />
                  <div className="w-[540px] mt-4">
                    <p className="text-[32px] font-bold text-[#5a5a5a]">
                      Your order on Agripeller was successful!
                    </p>
                    <p className="text-[20px] font-medium">
                      You'll get a response within a few minutes.
                    </p>
                  </div>
                  <Link to="/order">
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-400 custom-order-button">
                      Track Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Order_Confirmation;
