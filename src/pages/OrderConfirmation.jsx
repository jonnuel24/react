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
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import { notification } from "../services/notification";
import { OrderServices } from "../services/order.service";
import { userServices } from "../services/user.service";
import { setItems, setSummary, setDelivery } from "../store/reducers/cartReducer";
import { v4 as uuid } from "uuid";

function Order_Confirmation() {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user?.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user?.currentUser);
  const userDelivery = useSelector((state) => state.cart?.delivery);
  const cartItems = useSelector((state) => state.cart?.items);
  const { email, phoneNumber, lastName, firstName, id } = user;
  const cartSummary = useSelector((state) => state.cart?.summary);
  const [ref, setRef] = useState("");
  const [editAddress, setEditAddress]=useState(false)
  const [deliveryAddress, setDeliveryAddress]=useState(userDelivery ?? {name:`${firstName} ${lastName}`, address:"", phone:phoneNumber})
  useEffect(() => {
    const unique_id = uuid();
    setRef(unique_id);
  }, []);
  const openModal = () => {
    setIsOpen(true);
  };

  const handleInput = async (event) => {
    await setDeliveryAddress({ ...deliveryAddress, [event.target.name]: event.target.value });
  };

  const toggleAddressEdit=async (value)=>{
    await setEditAddress(value)
    if(value==false){
      dispatch(setDelivery(deliveryAddress))
    }else{
      await setDeliveryAddress(userDelivery)
    }
  }
  const componentProps = {
    email,
    amount: parseFloat(cartSummary?.totalProductCost * 100), // the transaction amount in kobo.
    metadata: {
      name: userDelivery.name ?? `${firstName} ${lastName}`,
      phone: userDelivery.phone ?? phoneNumber,
    },
    reference: ref,
    // publicKey: "pk_test_02bb5629ae0de1fbd3750583af1d9e4375c78494",
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
    text:
      "Pay " +
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(cartSummary?.totalProductCost),
    onSuccess: () => {
      const orderDetails = {
        paymentType: "TRANSFER",
        deliveryCost: 200.0,
        orderDate: new Date().toISOString()?.substring(0, 10),
        orderStatus: "COMPLETED",
        reference: ref,
        totalProductCost: cartSummary?.totalProductCost,
        userId: id,
        paymentChannel: "Paystack",
        country: "Nigeria",
        state: "Lagos",
        city: "Ikeja",
        localGovtArea: "Lagos Mainland",
        street: userDelivery.address ?? "",
        placeId: "hbh9976adnbgh980bsds5r56",
      };
      OrderServices.checkout(orderDetails)
        .then((response) => {
          notification(response.message, "success");
          userServices
            .userCart(user.id)
            .then((response) => {
              dispatch(setItems(response?.data?.cartItems));
              dispatch(setSummary(response?.data?.cart));
              setIsOpen(true);
            })
            .catch((error) => {
              notification("An error occurred", "error");
            });
        })
        .catch((error) => {
          notification("An error occurred", "error");
        });
    },
    onClose: () => notification("Transaction cancelled :(", "info"),
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
                <div className="text-[20px]">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "NGN",
                  }).format(cartSummary?.totalProductCost)}
                </div>
              </div>
              {/*  */}
              <div className="flex flex-row justify-between w-full">
                <div className="text-[20px]">Shipping</div>
                <div className="text-[20px]">N0</div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="font-bold text-[30px] text-[#5A5A5A]">Total</div>
              <div className="font-bold text-[30px]">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "NGN",
                }).format(cartSummary?.totalProductCost)}
              </div>
            </div>
          </div>

          {/* address */}
          <div className="flex flex-col items-start  gap-[24px]">
            <div className="px-[200px] py-[32px] flex flex-row justify-between w-full bg-[#E0ECE0]">
              <div className="font-bold text-[30px]">Address</div>
              <button onClick={()=>toggleAddressEdit(!editAddress)} className="font-semibold text-[20px] text-[#006838]">
                {editAddress ? 'Save' : 'Change' } 
              </button>
            </div>

            <div className=" px-[200px] py-[32px] w-full flex flex-col gap-[16px]">
              <div className="flex flex-col items-start gap-[24px] w-full">
                <div className="text-[20px] font-medium flex flex-row gap-2">
    
                <Icon icon="ic:round-phone" />
                  {editAddress && (
                    <input 
                      type="text"  
                      name="name"
                      onChange={handleInput} 
                      placeholder="Name" 
                      value={deliveryAddress?.name}  
                    />
                  )}
                  {!editAddress && userDelivery?.name}
                </div>
                <div className="text-[20px] font-medium flex flex-row gap-2">
                  <Icon icon="material-symbols:my-location" />
                  {editAddress && (
                    <textarea 
                      onChange={handleInput} 
                      name="address" 
                      placeholder="Delivery Address"  
                    >
                      {deliveryAddress?.address}
                    </textarea>
                  )}
                  {!editAddress && userDelivery?.address}
                </div>
                <div className="text-[20px] font-medium flex flex-row gap-2">
                  <Icon icon="ic:round-phone" />
                  {editAddress && (
                    <input 
                      type="text" 
                      onChange={handleInput} 
                      name="phone" 
                      placeholder="234**********" 
                      value={deliveryAddress?.phone} 
                    />
                  )}
                  {!editAddress && userDelivery?.phone}
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

            {cartItems?.map((e) => {
              return (
                <div className=" px-[200px] py-[32px] w-full flex flex-col gap-[16px]">
                  <button className="font-medium flex flex-row justify-between items-center w-full hover:bg-[#E0ECE0] border hover:border-[#006838] p-[16px] rounded-[8px]">
                    <div className="text-[20px] font-medium flex flex-row gap-2 items-center">
                      <img
                        style={{ width: "80px", height: "50px" }}
                        src={e.product.images[0]}
                        alt=""
                      />
                      {e.product.name}
                    </div>
                    <Icon icon="akar-icons:radio" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="delivery-div5 mt-[48px]">
          {/* <button className="" onClick={openModal}>
            Confirm Order
          </button> */}

          {cartItems?.length && (
            <PaystackButton
              className="btn btn-success btn-lg cart-div41"
              {...componentProps}
            />
          )}

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
                    Hello {firstName} {lastName},
                  </label>
                  <img src={Cart} alt="" className="mt-4" />
                  <div className="w-[540px] mt-4">
                    <p className="text-[32px] font-bold text-[#5a5a5a]">
                      Your order on Agripeller was successful!
                    </p>
                    <p className="text-[20px] font-medium">
                      Your Transaction reference is {ref}. Please use it for
                      future reference to this transaction
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
