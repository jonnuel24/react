import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Card from "../Components/card";
import "../asset/styles/cart.css";
import arrow from "../asset/images/Arrow 2.svg";
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import { v4 as uuid } from "uuid";
import { notification } from "../services/notification";
import { OrderServices } from "../services/order.service";

function Cart() {
  const user = useSelector((state) => state.user?.currentUser);
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);
  const cartCount = useSelector((state) => state.cart?.count);
  const cartItems = useSelector((state) => state.cart?.items);
  const cartSummary = useSelector((state) => state.cart?.summary);
  const { email, phoneNumber, lastName, firstName, id } = user;
  const [ref, setRef] = useState("");

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
    onSuccess: async () => {
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
      const response=await OrderServices.checkout(orderDetails)
      console.log(response);
      notification("Thanks for doing business with us! Come back soon!!", 'success');
    },
    onClose: () => notification("Transaction cancelled :(", 'info'),
  };
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

        <div className="cart-div3">
          <div className="font-medium flex items-start">
            Items in{" "}
            <span className="font-bold">
              cart ({cartSummary?.overallQuantity})
            </span>
          </div>
          <div className="  cart-items">
            {cartItems?.map((e) => {
              return <Card cartId={e.id} product={e.product} />;
            })}
            {/* <Card />
          
            <Card />
            <Card /> */}
          </div>
          <div>
            <PaystackButton
              className="btn btn-success btn-lg cart-div41"
              {...componentProps}
            />
            {/* <button className="btn btn-success btn-lg cart-div41">Proceed</button> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
