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
            <h5 className="text-left">800 Orders</h5>
            <div className="addProduct-rd w-full h-full">
              <div className="flex gap-[16px] p-[16px]">
                {/* search bar */}
                <Searchbar />
                {/* sortby */}
                <Sortby />
              </div>

              <div>
                <OrderTable  orders={orders} />
                {/* <table className="mb-[32px]">
                  <thead>
                    <tr className="">
                      <th className="">Order no</th>
                      <th className="">Customer name</th>
                      <th className="">Order status</th>
                      <th>Delivery</th>
                      <th>Date</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="">102938</td>
                      <td>
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                        Sarah Johnson
                      </td>
                      <td>Processing</td>
                      <td>pending</td>
                      <td>In transit</td>
                      <td>24-01-24</td>
                      <td>
                        <Option />
                      </td>
                    </tr>
                  
                    <tr>
                      <td className="">102938</td>
                      <td>
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                        Sarah Johnson
                      </td>
                      <td>Processing</td>
                      <td>pending</td>
                      <td>In transit</td>
                      <td>24-01-24</td>
                      <td>
                        <Option />
                      </td>
                    </tr>
                    <tr>
                      <td className="">102938</td>
                      <td>
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                        Sarah Johnson
                      </td>
                      <td>Processing</td>
                      <td>pending</td>
                      <td>In transit</td>
                      <td>24-01-24</td>
                      <td>
                        <Option />
                      </td>
                    </tr>
                    <tr>
                      <td className="">102938</td>
                      <td>
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                        Sarah Johnson
                      </td>
                      <td>Processing</td>
                      <td>pending</td>
                      <td>In transit</td>
                      <td>24-01-24</td>
                      <td>
                        <Option />
                      </td>
                    </tr>
                    <tr>
                      <td className="">102938</td>
                      <td>
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                        Sarah Johnson
                      </td>
                      <td>Processing</td>
                      <td>pending</td>
                      <td>In transit</td>
                      <td>24-01-24</td>
                      <td>
                        <Option />
                      </td>
                    </tr>
                    <tr>
                      <td className="">102938</td>
                      <td>
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                        Sarah Johnson
                      </td>
                      <td>Processing</td>
                      <td className="">pending</td>
                      <td>In transit</td>
                      <td>24-01-24</td>
                      <td>
                        <Option />
                      </td>
                    </tr>
                  </tbody>
                </table> */}
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
