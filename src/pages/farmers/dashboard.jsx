import React, { useEffect, useState } from "react";
import FNavbar from "./component/farmersNavbar";
import { Icon } from "@iconify/react";
import Fpanel from "./component/fpanel";
import "../../asset/styles/farmersdashboard.css";
import pic from "../../asset/images/animal_profile.png";
import BarChart from "./component/barchart";
import DoughnutChart from "./component/doughnutChart";
import { OrderServices } from "../../services/order.service";
import Option from "./component/optionMyProduct";
import { useSelector } from "react-redux";
import OrderTable from "../../Components/order.table";
import dashboardService from "../../services/dashboard.service";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user?.currentUser);
  const farm = useSelector((state) => state.user?.farm);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [year, setYear] = useState(new Date().getFullYear());
  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  useEffect(() => {
    fetchFarmOrder();
    dashboardChart();
  }, []);

  const fetchFarmOrder = async () => {
    try {
      const response = await OrderServices.farmOrders(
        { page: page, size: size },
        farm.id
      );
      console.log(response.totalOrders);
      if (response.statusCode == 200) {
        setOrders(response.totalOrders);
      }
      // setOrders(response.orders);
    } catch (error) {
      console.log("error from fetch product", error);
    }
  };

  const dashboardChart = async () => {
    try {
      const response = await dashboardService.dashboardData(farm.id);
      const dataMapped = response?.totalOrderValuePerMonth?.map(
        (orderValues) => {
          return orderValues.totalOrderValue;
        }
      );
      const labelMapped = response?.totalOrderValuePerMonth?.map(
        (orderValues) => {
          return orderValues.month;
        }
      );
      setData(dataMapped);
      setLabels(labelMapped);
      setYear(response?.totalOrderValuePerMonth[0].year);
      console.log("dash board data charts", response.totalOrderValuePerMonth);
    } catch (error) {
      console.log("error from fetch dashboard chart", error);
    }
  };
  return (
    <div className="">
      <FNavbar />

      {/* general div */}
      <div className="flex flex-row w-full space-x-16 px-[64px] overflow-clip">
        {/* left div */}

        <div className="w-[15%]">
          <Fpanel />
        </div>

        {/* right div */}
        <div className="py-[64px] pr-[32px] flex flex-col overflow-clip w-full sm:w-[85%] gap-[21px]">
          <div className="w-full">
            <div>
              <h4 className="text-black text-[20px] font-semibold leading-normal text-left px-[32px]">
                Dashboard Overview
              </h4>
            </div>
            {/* 01 Total */}
            <div className="fd-rightdiv-second-div-bg px-[29px] py-[37px] flex flex-col gap-[16px]">
              {/* -=======total rvenue/ livestock statistics======= */}
              <div className="flex flex-row gap-[16px] w-full">
                <div className="dashboard-box1 w-[100%]">
                  {" "}
                  {/* Adjusted width to 4/5 or 80% */}
                  <div className="fd-overview flex flex-row justify-between px-[24px] py-[16px]">
                    <div className="flex flex-row items-center gap-[4px]">
                      <Icon icon="ant-design:appstore-outlined" width="24" />
                      <label htmlFor="">Total Revenue</label>
                    </div>
                    <div className="flex flex-row items-center gap-[8px]">
                      <button className="fd-overview-button">{year}</button>
                      <button className="fd-overview-button">Monthly</button>
                    </div>
                  </div>
                  <div className="p-4 w-full">
                    <BarChart data={data} labels={labels} />
                  </div>
                </div>{" "}
                {/* Adjusted width to 1/5 or 20% */}
                {/* <div className="fd-right-upper-div w-[30%]">
                <div className="fd-overview-right flex flex-row justify-between px-[24px] py-[20px]">
                  <label htmlFor="">Livestocks Statistics</label>
                </div>
                <div className="p-4">
                  <DoughnutChart />
                </div>
              </div> */}
              </div>

              {/* -=======sales history/ top productproduct deman======= */}
              <div className="flex flex-row gap-[16px]">
                {" "}
                {/* =====Sales history =========== */}
                <div className="dashboard-box1 w-full">
                  {/* 01 left */}
                  <div className="s-h-header flex flex-row justify-center px-[24px] py-[16px]">
                    {/*  */}
                    <h4>Sales History</h4>
                  </div>
                  <div>
                    <OrderTable orders={orders} />
                  </div>
                </div>
                {/*Top products on demand*/}
                {/* <div className="top-product-on-demand"> */}
                  {/* header */}
                  {/* <div className="t-p-o-d-header flex flex-row justify-center px-[24px] py-[20px]">
                    <label
                      htmlFor=""
                      className="text-[#fff] font-medium text-center text-[20px] flex content-center"
                    >
                      Top Products on Demand
                    </label>
                  </div> */}
                  {/* body */}
                  {/* <div className="p-[16px] flex flex-col gap-[8px]">
                    <div className="t-p-o-d-body-card p-[24px] flex flex-row items-center gap-[16px]">
                      <div className="t-p-o-d-body">
                        <img src={pic} alt="" className="animal" />
                      </div>
                      
                      <div>
                        <h4 className="text-[16px] m-0 text-left font-medium">
                          French Chicken
                        </h4>
                        <span className="text-[14px] font-medium text-[#6ABD45] flex flex-row items-center gap-[8px]">
                          <Icon
                            icon="ph:trend-up"
                            color="#6abd45"
                            width="16"
                            height="16"
                          />
                          5% increase this week
                        </span>
                      </div>
                    </div>
                   
                    <div className="t-p-o-d-body-card p-[24px] flex flex-row items-center gap-[16px]">
                      <div className="t-p-o-d-body">
                        <img src={pic} alt="" className="animal" />
                      </div>
                     
                      <div>
                        <h4 className="text-[16px] m-0 text-left font-medium">
                          French Chicken
                        </h4>
                        <span className="text-[14px] font-medium text-[#6ABD45] flex flex-row items-center gap-[8px]">
                          <Icon
                            icon="ph:trend-up"
                            color="#6abd45"
                            width="16"
                            height="16"
                          />
                          5% increase this week
                        </span>
                      </div>
                    </div>
                   
                    <div className="t-p-o-d-body-card p-[24px] flex flex-row items-center gap-[16px]">
                      <div className="t-p-o-d-body">
                        <img src={pic} alt="" className="animal" />
                      </div>
                    
                      <div>
                        <h4 className="text-[16px] m-0 text-left font-medium">
                          French Chicken
                        </h4>
                        <span className="text-[14px] font-medium text-[#6ABD45] flex flex-row items-center gap-[8px]">
                          <Icon
                            icon="ph:trend-up"
                            color="#6abd45"
                            width="16"
                            height="16"
                          />
                          5% increase this week
                        </span>
                      </div>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
