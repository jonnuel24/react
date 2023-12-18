import React from "react";
import FNavbar from "./component/farmersNavbar";
import { Icon } from "@iconify/react";
import Fpanel from "./component/fpanel";
import "../../asset/styles/farmersdashboard.css";

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
    <div>
      <FNavbar />

      {/* general div */}
      <div className="flex flex-row gap-[27px] px-[64px]">
        {/* left div */}

        <Fpanel className="" />

        {/* divider */}
        <div className="fd-divider"></div>

        {/* right div */}
        <div className="py-[64px] w-full flex flex-col dap-[21px]">
          <div>
            <h4 className="text-black text-[20px] font-semibold leading-normal text-left px-[32px]">
              Dashboard Overview
            </h4>
          </div>
          {/* 01 */}
          <div className="fd-rightdiv-second-div-bg px-[29px] py-[37px]">
            <div>
              {/*  */}
              <div>
                <Icon icon="ant-design:appstore-outlined" width="24" />
                <label htmlFor="">Total Revenue</label>
              </div>
              {/*  */}
              <div>
                <div>
                  <label htmlFor="yearSelector">Select Year:</label>
                  <select id="yearSelect">
                    {/* {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))} */}
                  </select>
                </div>
                <div></div>
              </div>
            </div>
            {/*01.2 */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
