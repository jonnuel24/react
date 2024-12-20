import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../asset/styles/order.css";
import OrderCard from "../Components/orderCard";
import { Link } from "react-router-dom";
import Orderpending from "../asset/images/order-pending.svg";

function OrderPending() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-[32px] px-10 pt-10 pb-[104px]">
        <header className="text-[24px] font-medium mt-8">
          Hello Gasgos, Here are your Orders
        </header>
        <div className="flex flex-col items-center gap-8">
          <div>
            <Link to={"/order"}>
              <button className="button-inactive">All</button>
            </Link>
            <Link to={"/orderPending"}>
              <button className="button-active">Pending</button>
            </Link>
            <Link to={"/orderComplete"}><button className="button-inactive">Completed</button></Link>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <OrderCard
                imgsrc={Orderpending}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#F91919",
                }}
              />
              <OrderCard
                imgsrc={Orderpending}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#F91919",
                }}
              />
              <OrderCard
                imgsrc={Orderpending}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#F91919",
                }}
              />
              <OrderCard
                imgsrc={Orderpending}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#F91919",
                }}
              />
              <OrderCard
                imgsrc={Orderpending}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#F91919",
                }}
              />
              <OrderCard
                imgsrc={Orderpending}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#F91919",
                }}
              />
              <OrderCard
                imgsrc={Orderpending}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#F91919",
                }}
              />
              <OrderCard
                imgsrc={Orderpending}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#F91919",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </div>
  );
}

export default OrderPending;
