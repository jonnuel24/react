import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../asset/styles/order.css";
import OrderCard from "../Components/orderCard";
import OrderPending from "../asset/images/order-pending.svg";
import OrderComplete from "../asset/images/oder-complete.svg";
import { Link } from "react-router-dom";
import { OrderServices } from "../services/order.service";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

function Order() {
  const user = useSelector((state) => state.user?.currentUser);
  const { email, phoneNumber, lastName, firstName, id } = user;
  const userDelivery = useSelector((state) => state.cart?.delivery);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [size, setSize] = useState(15);
  const [search, setSearch] = useState("");
  const [orders, setOrders] = React.useState([]);
  const [filteredOrders, setFilteredOrders] = React.useState([]);
  const [filterType, setFilterType]=React.useState("ALL")

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };



  const filterOrder=()=>{
    if(filterType == 'ALL'){
      setFilteredOrders(orders);
    }else{
      const filter=orders.find(order=>{
        return order.order.orderStatus == filterType
      })
      console.log(filter);
      setFilteredOrders(filter)
    }
  }

const handleTabSwitch=(value)=>{
  setFilterType(value)
  if(value == 'ALL'){
    setFilteredOrders(orders);
  }else{
    const filter=orders.filter(order=>{
      return order.order.orderStatus == value
    })
    console.log(filter);
    setFilteredOrders(filter)
  }
}
  useEffect(() => {
    OrderServices.orders(user.id, page, size)
      .then(async (res) => {
        console.log(res);
        setOrders(res?.data?.orderResponses);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, size]);

  useEffect(()=>{
    handleTabSwitch(filterType)
  }, [orders, filterType])

  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-[32px] px-10 pt-10 pb-[104px]">
        <header className="text-[24px] font-medium mt-8">
          Hello {firstName} {lastName}, Here are your Orders
        </header>
        <div className="flex flex-col items-center gap-8">
          <div>
            <button onClick={()=>handleTabSwitch('ALL')} className={filterType=='ALL' ? `button-active` : 'button-inactive'}>All</button>
            {/* <Link to={"/orderPending"}> */}
              {" "}
              <button onClick={()=>handleTabSwitch('PENDING')} className={filterType=='PENDING' ? `button-active` : 'button-inactive'}>Pending</button>
            {/* </Link> */}
            {/* <Link to={"/orderComplete"}> */}
              <button onClick={()=>handleTabSwitch('COMPLETED')} className={filterType=='COMPLETED' ? `button-active` : 'button-inactive'}>Completed</button>
            {/* </Link> */}
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              {filteredOrders &&
                filteredOrders?.map((order, index) => {
                  order = order?.order;
                  return (
                    <Link key={index}
                      to={`/order/track/${order.id}`}
                      className="text-decoration-none text-black"
                    >
                      <OrderCard
                        imgsrc={
                          order?.orderStatus == "PENDING"
                            ? OrderPending
                            : OrderComplete
                        }
                        orderNumber={`Order ${order?.orderNumber}`}
                        placedDate={order?.orderDate}
                        price={order?.totalCost}
                        quantity={order?.noOfItems}
                        style={{
                          color:
                            order?.orderStatus == "PENDING"
                              ? "#F91919"
                              : "#006838",
                        }}
                      />
                    </Link>
                  );
                })}

              {/* <OrderCard
                imgsrc={Ordercomplete}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#006838",
                }}
              />
              <OrderCard
                imgsrc={Ordercomplete}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#006838",
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
                imgsrc={Ordercomplete}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#006838",
                }}
              />
              <OrderCard
                imgsrc={Ordercomplete}
                orderNumber="Order #90897"
                placedDate="march 24th, 2024"
                price="30,000"
                quantity="4"
                style={{
                  color: "#006838",
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
              /> */}
            </div>
          </div>
        </div>
        <ReactPaginate
          className="justify-end flex flex-row gap-10 w-full text-black text-bold"
          pageCount={pages}
          shape="rounded"
          onPageChange={handlePageClick}
        />
      </div>
      <Footer />{" "}
    </div>
  );
}

export default Order;
