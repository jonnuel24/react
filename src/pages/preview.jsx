import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../asset/styles/delivery2.css";
import { Icon } from "@iconify/react";
// import gig from "../asset/images/gex.svg";
// import gex from "../asset/images/gig.svg";
// import axd from "../asset/images/axd_logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { notification } from "../services/notification";
import { OrderServices } from "../services/order.service";
import { userServices } from "../services/user.service";
import {
  setItems,
  setSummary,
  setDelivery,
} from "../store/reducers/cartReducer";

function Preview() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);
  const cartCount = useSelector((state) => state.cart?.count);
  const cartItems = useSelector((state) => state.cart?.items);
  const userDelivery = useSelector((state) => state.cart?.delivery);
  const cartSummary = useSelector((state) => state.cart?.summary);
  const { email, phoneNumber, lastName, firstName, id } = user;
  const [ref, setRef] = useState("");
  const [editName, setEditName] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState(userDelivery);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const handleInputChange = (event) => {
    setDeliveryAddress({
      ...deliveryAddress,
      [event.target.name]: event.target.value,
    });
    dispatch(setDelivery(deliveryAddress));
    console.log(deliveryAddress);
  };
  useEffect(() => {
    const unique_id = uuid();
    setRef(unique_id);
  }, []);
  const componentProps = {
    email,
    amount: parseFloat(cartSummary?.totalProductCost * 100), // the transaction amount in kobo.
    metadata: {
      name: `${firstName} ${lastName}`,
      phone: phoneNumber,
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
        street: "Broad street",
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
            })
            .catch((error) => {
              notification("An error occurred", "error");
              console.log(error);
            });
        })
        .catch((error) => {
          notification("An error occurred", "error");
        });
    },
    onClose: () => notification("Transaction cancelled :(", "info"),
  };
  const edit = (field) => {
    switch (field) {
      case "name":
        setEditName(true);
        nameRef?.current?.focus();
        break;
      case "phone":
        setEditPhone(true);
        phoneRef?.current?.focus();
        break;
      case "address":
        setEditAddress(true);
        addressRef?.current?.focus();
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex w-full px-12 p-6">
          {/* left div */}
          <div className="flex flex-col items-start gap-2 w-[50%]">
            <div className="text-[32px] font-medium">Contact Details</div>
            <div className="border bg-white shadow-md rounded-xl py-6 pl-8 pr-12 space-y-4 w-full">
              {/* name */}
              <div className=" flex gap-2">
                <div>
                  <label htmlFor="" className="flex flex-col items-start gap-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    readOnly={!editName}
                    ref={nameRef}
                    onChange={(event) => handleInputChange(event)}
                    name="name"
                    className="text-gray-700 text-[24px] border rounded-lg"
                    defaultValue={firstName + " " + lastName}
                  />
                </div>
                <button onClick={() => edit("name")}>
                  <Icon
                    icon="clarity:edit-line"
                    color="green"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
              {/* address */}
              <div className="flex gap-2">
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="">Address</label>
                  <input
                    ref={addressRef}
                    name="address"
                    onChange={(event) => handleInputChange(event)}
                    readonly={!editAddress}
                    className="text-gray-700 text-[24px] border rounded-lg"
                    type="text"
                    defaultValue={deliveryAddress?.address}
                  />
                </div>

                <button onClick={() => edit("address")}>
                  <Icon
                    icon="clarity:edit-line"
                    color="green"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
              {/* phone */}
              <div className="flex gap-2">
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="">Phone</label>

                  <input
                    readonly={!editPhone}
                    name="phone"
                    ref={phoneRef}
                    onChange={(event) => handleInputChange(event)}
                    className="text-gray-700 text-[24px] border rounded-lg"
                    type="text"
                    defaultValue={phoneNumber}
                  />
                </div>
                <button onClick={() => edit("phone")}>
                  <Icon
                    icon="clarity:edit-line"
                    color="green"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* right div */}
          <div className="flex flex-col px-12 items-start w-[60%]">
            <div className="text-[32px] font-medium">Items</div>
            <div className="border bg-white shadow-md rounded-xl p-2 w-full">
              <div className="bg-white p-4 rounded-lg space-y-6">
                {cartItems?.map((e) => {
                  return (
                    <div className="delivery-div40">
                      <div className="delivery-div41">
                        {/* <input type="radio" /> */}
                        <h6>
                          <img
                            style={{ width: "80px", height: "50px" }}
                            src={e.product.images[0]}
                            alt=""
                          />
                          {e.product.name}
                        </h6>
                      </div>
                      <h4>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "NGN",
                        }).format(e?.product.price)}
                      </h4>
                    </div>
                  );
                })}
              </div>
              {/* button */}
              <div className="mt-4 w-full flex flex-col gap-4">
                <div className=" border-t-2 border-b-2">
                  <div>
                    <table>
                      <tr className="flex justify-between">
                        <th className="d2-summary text-[24px] font-normal text-[#006838] ">
                          Subtotal :{" "}
                        </th>
                        <td className="text-[24px] font-medium text-[#006838]">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "NGN",
                          }).format(cartSummary?.totalProductCost)}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <Link to="/OrderConfirmation">
                  {" "}
                  <button className="bg-[#006838] h-[64px] px-8 py-2 font-medium text-white rounded-xl">
                    Proceed to pay
                    <span className="ml-2">
                      (
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "NGN",
                      }).format(cartSummary?.totalProductCost)}
                    </span>
                    )
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Preview;
