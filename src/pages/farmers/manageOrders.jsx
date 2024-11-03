import React, { useEffect, useState } from "react";
import Fpanel from "./component/fpanel";
import { Icon } from "@iconify/react";
import FNavbar from "./component/farmersNavbar";
import Searchbar from "./component/searchbar";
import Sortby from "./component/sortBy";
import "../../asset/styles/manageOrders.css";
import Option from "./component/optionMyProduct";
import OrderTable from "../../Components/order.table";
import { useSelector } from "react-redux";
import { OrderServices } from "../../services/order.service";

function ManageOrders() {

  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user?.currentUser);
  const farm = useSelector((state) => state.user?.farm);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  useEffect(() => {
    fetchFarmOrder();
  }, []);

  const fetchFarmOrder = async () => {
    try {
      const response = await OrderServices.farmOrders(
        { page: page, size: size },
        farm.id
      );
      console.log(response.totalOrders);
      if (response.statusCode == 200) {
        console.log('INSIDE THE IF BLOCK ',response.totalOrders);
        setOrders(response.totalOrders);
      }
      // setOrders(response.orders);
    } catch (error) {
      console.log("error from fetch product", error);
    }
  };



  return (
    <div>
      <FNavbar />
      <div className="pl-[64px] pr-[32px] flex flex-row">
        {/* side panel */}
        <div>
          <Fpanel />
        </div>

        {/* divider */}
        <div className="fd-divider ml-4 h-full"></div>
        {/* body */}
        <div className="p-[24px] flex flex-col items-start w-full gap-[64px]">
          <h2 className="text-left">Manage Orders</h2>
          <div className="w-full h-fit">
            <h5 className="text-left">1 order</h5>
            <div className="addProduct-rd w-full h-full">
              <div className="flex gap-[16px] p-[16px]">
                {/* search bar */}
                <Searchbar />
                {/* sortby */}
                <Sortby />
              </div>

              <div>
                <OrderTable  orders={orders} />
                
                {/*  */}
                <div className="flex flex-row justify-between items-center p-[24px] mp-pagination">
                  <div className="">Page 1 of 10</div>
                  <div className="flex gap-[8px]">
                    <button>Previous</button>
                    <button>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageOrders;
