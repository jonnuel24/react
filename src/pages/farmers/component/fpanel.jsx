import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/reducers/userReducer";

function Fpanel() {
  const dispatch = useDispatch();
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div>
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
                <Icon icon="solar:home-2-outline" className="fd-leftdiv-icon" />
                <label
                  htmlFor=""
                  className="text-[16px] font-normal leading-normal text-black"
                >
                  <Link to={"/farmer"} style={linkStyle}>
                    Dashboard
                  </Link>
                </label>
              </div>

              <div className="flex flex-row items-center gap-[14px]">
                <Icon icon="solar:wallet-outline" className="fd-leftdiv-icon" />
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
                  <Link to={"/product/create"} style={linkStyle}>
                    Add Product
                  </Link>
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
                  <Link to={"/product"} style={linkStyle}>
                    My Products
                  </Link>
                </label>
              </div>
              {/*  */}
              <div className="flex flex-row items-center gap-[14px]">
                <Icon icon="solar:tag-outline" className="fd-leftdiv-icon" />
                <label
                  htmlFor=""
                  className="text-[16px] font-normal leading-normal text-black"
                >
                  <Link to={"/manageOrders"} style={linkStyle}>
                    Manage Orders
                  </Link>
                </label>
              </div>
              {/*  */}
              <Link to="/notifications" style={linkStyle} className="cursor-pointer">
              <div className="flex flex-row items-center gap-[14px]">
                <Icon icon="solar:bell-linear" className="fd-leftdiv-icon" />
                <label
                  htmlFor=""
                  className="text-[16px] font-normal leading-normal text-black"
                >
                  Notification
                </label>
              </div></Link>
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
              <div className="flex flex-row items-center gap-[14px] cursor-pointer">
                <Link to="/settings" className="flex gap-2 " style={linkStyle}>
                <Icon icon="carbon:settings" className="fd-leftdiv-icon" />
                <label
                  htmlFor=""
                  className="text-[16px] font-normal leading-normal text-black"
                >
                  Settings
                </label></Link>
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
              <div onClick={()=>dispatch(logOut())} className="cursor-pointer flex flex-row items-center gap-[14px]">
                <Icon
                  icon="solar:logout-2-outline"
                  className="fd-leftdiv-icon"
                />
                <label
                  htmlFor=""
                  className="cursor-pointer text-[16px] font-normal leading-normal text-black"
                >
                  Logout
                </label>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fpanel;
