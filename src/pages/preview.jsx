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
        {/* <div className="delivery-div1">
          <div className="delivery-button-active">
            <button>Delivery</button>
          </div>
          <div className="delivery-button">
            <button>Payment</button>
          </div>
          <div className="delivery-button">
            <button>Summary</button>
          </div>
        </div> */}

        <div className="row delivery2-div">
          <div className="col col-7 delivery-div2">
            <div className="delivery-div2-label">Contact Details</div>
            <div className="delivery-div3">
              <div className="delivery-name">
                <input
                  type="text"
                  readOnly={!editName}
                  ref={nameRef}
                  onChange={(event) => handleInputChange(event)}
                  name="name"
                  className="text-white delivery-name bg-green-700"
                  defaultValue={firstName + " " + lastName}
                />
                <button onClick={() => edit("name")}>
                  <Icon
                    icon="clarity:edit-line"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
              <div className="delivery-address">
                <h4>
                  <Icon
                    icon="material-symbols:location-searching"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                  <input
                    ref={addressRef}
                    name="address"
                    onChange={(event) => handleInputChange(event)}
                    readonly={!editAddress}
                    className="text-white bg-green-700"
                    type="text"
                    defaultValue={deliveryAddress?.address}
                  />
                </h4>
                <button onClick={() => edit("address")}>
                  <Icon
                    icon="clarity:edit-line"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
              <div className="delivery-number">
                <h4>
                  <Icon
                    icon="mingcute:phone-line"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                  <input
                    readonly={!editPhone}
                    name="phone"
                    ref={phoneRef}
                    onChange={(event) => handleInputChange(event)}
                    className="text-white bg-green-700"
                    type="text"
                    defaultValue={phoneNumber}
                  />
                </h4>
                <button onClick={() => edit("phone")}>
                  <Icon
                    icon="clarity:edit-line"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="col col-5 delivery-div2">
            <div className="delivery2-div2">Total Cost</div>
            <div className="delivery2-details">
              <div>
                <table>
                  <tr>
                    <th className="d2-summary text-[24px] font-normal text-white ">
                      Subtotal :{" "}
                    </th>
                    <td className="text-[24px] font-medium text-white">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "NGN",
                      }).format(cartSummary?.totalProductCost)}
                    </td>
                  </tr>
                  <tr>
                    <th className="d2-summary text-[24px] font-normal text-white">
                      Shipping :{" "}
                    </th>
                    <td className="text-[24px] font-medium text-white">N0</td>
                  </tr>
                </table>
              </div>
              <div className="delivery2-total">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "NGN",
                }).format(cartSummary?.totalProductCost)}
              </div>
            </div>
          </div>
        </div>
        <div className="delivery-div04">
          <div className="delivery-div04-label">Items</div>
          <div className="delivery-div4">
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
        </div>

        <div className="delivery-div5">
          <Link to="/OrderConfirmation">
            {" "}
            <button>Proceed to payment</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Preview;
