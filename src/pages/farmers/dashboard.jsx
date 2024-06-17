import React from "react";
import FNavbar from "./component/farmersNavbar";
import { Icon } from "@iconify/react";
import Fpanel from "./component/fpanel";
import "../../asset/styles/farmersdashboard.css";
import pic from "../../asset/images/animal_profile.png";
import BarChart from "./component/barchart";
import DoughnutChart from "./component/doughnutChart";
import Option from "./component/optionMyProduct";

function Dashboard() {
  // const YearSelector = () => {
  //   // Generate an array of years from 2001 to the current year
  //   const startYear = 2001;
  //   const currentYear = new Date().getFullYear();
  //   const years = Array.from(
  //     { length: currentYear - startYear + 1 },
  //     (_, index) => startYear + index
  //   ).reverse();
  // };
  return (
    <div className="">
      <FNavbar />

      {/* general div */}
      <div className="flex flex-row w-full space-x-16 px-[64px] overflow-clip">
        {/* left div */}

        <div className="w-1/10">
          <Fpanel />
        </div>

        {/* right div */}
        <div className="py-[64px] flex flex-col overflow-clip w-full sm:w-9/10 gap-[21px]">
          <div>
            <h4 className="text-black text-[20px] font-semibold leading-normal text-left px-[32px]">
              Dashboard Overview
            </h4>
          </div>
          {/* 01 Total */}
          <div className="fd-rightdiv-second-div-bg px-[29px] py-[37px] flex flex-col gap-[16px]">
            {/* -=======total rvenue/ livestock statistics======= */}
            <div className="flex flex-row gap-[16px]">
              <div className="dashboard-box1 w-3/5">
                {" "}
                {/* Adjusted width to 4/5 or 80% */}
                <div className="fd-overview flex flex-row justify-between px-[24px] py-[16px]">
                  <div className="flex flex-row items-center gap-[4px]">
                    <Icon icon="ant-design:appstore-outlined" width="24" />
                    <label htmlFor="">Total Revenue</label>
                  </div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <button className="fd-overview-button">2023</button>
                    <button className="fd-overview-button">Monthly</button>
                  </div>
                </div>
                <div className="p-4 w-full">
                  <BarChart />
                </div>
              </div>
              <div className="fd-right-upper-div w-1/5">
                {" "}
                {/* Adjusted width to 1/5 or 20% */}
                <div className="fd-overview-right flex flex-row justify-between px-[24px] py-[20px]">
                  <label htmlFor="">Livestocks Statistics</label>
                </div>
                <div className="p-4">
                  <DoughnutChart />
                </div>
              </div>
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
                  <table className="mb-[32px]">
                    <thead>
                      <tr className="">
                        <th className="">S/N</th>
                        <th className="">Livestock</th>
                        <th>Units</th>
                        <th className="">Delivery status</th>
                        <th>Date</th>

                        <th>Price</th>
                        <th className="">Order ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 01 */}
                      <tr className="cursor-pointer hover:bg-gray-50 w-full">
                        <td className="">1</td>
                        <td>French Cow</td>
                        <td>2</td>
                        <td>Pending</td>
                        <td>24/06/24</td>
                        <td>230,000</td>
                        
                        <td>2483829bbh8 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*Top products on demand*/}
              <div className="top-product-on-demand">
                {/* header */}
                <div className="t-p-o-d-header flex flex-row justify-center px-[24px] py-[20px]">
                  <label
                    htmlFor=""
                    className="text-[#fff] font-medium text-center text-[20px] flex content-center"
                  >
                    Top Products on Demand
                  </label>
                </div>
                {/* body */}
                <div className="p-[16px] flex flex-col gap-[8px]">
                  <div className="t-p-o-d-body-card p-[24px] flex flex-row items-center gap-[16px]">
                    <div className="t-p-o-d-body">
                      <img src={pic} alt="" className="animal" />
                    </div>
                    {/*  */}
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
                  {/* t-p-o-d card 2 */}
                  <div className="t-p-o-d-body-card p-[24px] flex flex-row items-center gap-[16px]">
                    <div className="t-p-o-d-body">
                      <img src={pic} alt="" className="animal" />
                    </div>
                    {/*  */}
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
                  {/* t-p-o-d card 3 */}
                  <div className="t-p-o-d-body-card p-[24px] flex flex-row items-center gap-[16px]">
                    <div className="t-p-o-d-body">
                      <img src={pic} alt="" className="animal" />
                    </div>
                    {/*  */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
