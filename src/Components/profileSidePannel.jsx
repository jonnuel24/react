import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import profileImg from "../asset/images/profile_img.png";
import "../asset/styles/profileSidePannel.css";
import { Icon } from "@iconify/react";

function ProfileSidePannel() {
  // Initialize state to track whether the dropdown is open or closed
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropDown = (event) => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className="ps-maindiv p-2">
      <div className="flex flex-col basis-2/5 gap-4">
        <div className="text-left">
          <h3 className="sp-head">Customer Profile</h3>
        </div>
        <div className="flex h-fit items-center gap-2 p-div4">
          <div className="p-pic">
            <img src={profileImg} alt="" />
          </div>
          <h3>Blessing Gasgos</h3>
        </div>
        <div className="profileSettings flex h-fit flex-col items-start py-4 gap-4">
          <div className="pl-16 flex flex-col items-start gap-4 profileSetting-div1 w-full">
            <div className="">
              <Icon
                icon="majesticons:tag-line"
                color="black"
                width="32"
                height="32"
                className="ps-div-icon"
              />
              My Orders
            </div>
            <div>
              <Icon
                icon="mingcute:map-pin-fill"
                color="black"
                width="32"
                height="32"
                className="ps-div-icon"
              />{" "}
              Wishlist
            </div>
            <div>
              <Icon
                icon="iconamoon:notification"
                color="black"
                width="32"
                height="32"
                className="ps-div-icon"
              />{" "}
              Notifications
            </div>

            {/*toggle dropdown*/}
            <div className="toggle-dropdown">
              <button
                className="ps-security"
                type="button"
                id="dropDownDefaultButton"
                onClick={(event) => toggleDropDown(event)}
              >
                <div>
                  <Icon
                    icon="ic:outline-lock"
                    color="black"
                    width="32"
                    height="32"
                    className="ps-div-icon"
                  />{" "}
                  Security
                </div>
                <Icon
                  icon="ion:chevron-back"
                  color="black"
                  width="12"
                  height="12"
                  rotate={2}
                />
              </button>

              {/* drop down menu */}
              {isDropDownOpen && (
                <ul
                  aria-labelledby="dropDownDefaultButton"
                  className="py-1
                      flex flex-col items-end dropDownMenu"
                >
                  <li>
                    <a href="#">Change Password</a>
                  </li>
                  <li>
                    <a href="#">Pin Settings</a>
                  </li>
                  <li>
                    <a href="#">Delete Account</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="p-logout pl-16 py-3 flex flex-1 w-full">
            <Icon
              icon="ion:return-down-back-outline"
              color="black"
              width="32"
              height="32"
              className="ps-div-icon"
            />
            Log out
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidePannel;
