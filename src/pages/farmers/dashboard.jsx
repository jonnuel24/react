import React from "react";
import FNavbar from "./component/farmersNavbar";
import { Icon } from "@iconify/react";
import "../../asset/styles/farmersdashboard.css";

function Dashboard() {

  const YearSelector = () => {
    // Generate an array of years from 2001 to the current year
    const startYear = 2001;
    const currentYear = new Date().getFullYear();
    const years = Array.from(
      { length: currentYear - startYear + 1 },
      (_, index) => startYear + index
    ).reverse();
  };
  return (
    <div>
      <FNavbar />

      {/* general div */}
      <div className="flex flex-row gap-[27px] px-[64px]">
        {/* left div */}

        <div className="py-[64px]">
          {/* left div : child */}
          <div className="flex flex-col  gap-[30px]">
            {/*start account */}
            <div className="flex flex-col items-start">
              <h4 className="text-[18px] font-bold leading-normal text-black">
                ACCOUNT
              </h4>

              <div className="fd-account flex flex-col gap-[20px] px-[24px] py-[26px]">
                {/*  */}
                <div className="flex flex-row items-center gap-[14px]">
                  <Icon
                    icon="solar:home-2-outline"
                    className="fd-leftdiv-icon"
                  />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    Dashboard
                  </label>
                </div>

                <div className="flex flex-row items-center gap-[14px]">
                  <Icon
                    icon="solar:wallet-outline"
                    className="fd-leftdiv-icon"
                  />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    Finances
                  </label>
                </div>
              </div>
            </div>
            {/* end account */}

            {/*start product */}
            <div className="flex flex-col items-start">
              <h4 className="text-[18px] font-bold leading-normal text-black">
                PRODUCT
              </h4>

              <div className="fd-account flex flex-col gap-[20px] px-[24px] py-[26px]">
                {/*  */}
                <div className="flex flex-row items-center gap-[14px]">
                  <Icon icon="lucide:plus" className="fd-leftdiv-icon" />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    Add Product
                  </label>
                </div>
                {/*  */}

                <div className="flex flex-row items-center gap-[14px]">
                  <Icon
                    icon="solar:chat-round-dots-linear"
                    className="fd-leftdiv-icon"
                  />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    My Products
                  </label>
                </div>
                {/*  */}
                <div className="flex flex-row items-center gap-[14px]">
                  <Icon icon="solar:tag-outline" className="fd-leftdiv-icon" />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    Manage Orders
                  </label>
                </div>
                {/*  */}
                <div className="flex flex-row items-center gap-[14px]">
                  <Icon icon="solar:bell-linear" className="fd-leftdiv-icon" />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    Notification
                  </label>
                </div>
              </div>
            </div>
            {/* end product */}

            {/*start admin */}
            <div className="flex flex-col items-start">
              <h4 className="text-[18px] font-bold leading-normal text-black">
                ADMIN
              </h4>

              <div className="fd-account flex flex-col gap-[20px] px-[24px] py-[26px]">
                {/*  */}
                <div className="flex flex-row items-center gap-[14px]">
                  <Icon icon="carbon:settings" className="fd-leftdiv-icon" />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    Settings
                  </label>
                </div>
                {/*  */}

                <div className="flex flex-row items-center gap-[14px]">
                  <Icon icon="ph:phone-outgoing" className="fd-leftdiv-icon" />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    Support
                  </label>
                </div>
                {/*  */}
                <div className="flex flex-row items-center gap-[14px]">
                  <Icon
                    icon="solar:logout-2-outline"
                    className="fd-leftdiv-icon"
                  />
                  <label
                    htmlFor=""
                    className="text-[16px] font-normal leading-normal text-black"
                  >
                    Logout
                  </label>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>

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
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
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
