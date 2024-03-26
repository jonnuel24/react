/* eslint-disable import/no-unresolved */
import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import profileImg from "../asset/images/profile_img.png";
import "../asset/styles/profile.css";
import { Icon } from "@iconify/react";
import ProfileSidePannel from "../Components/profileSidePannel";
import WishlistCard from "../Components/wishlistCard";
// import Picon from "../Components/p-icon";
import "../asset/styles/wishlist.css";
import PasswordChange from "../Components/passwordChange";
function ChangePassword() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    border: "none",
    "&:focus": {
      outline: "none !important",
    },
  };

  const options = Array.from({ length: 900 }, (_, i) => i + 1);

  return (
    <div>
      <Navbar />
      <div className="py-4 px-32 flex flex-row">
        {/* Left-div */}
        <div className="flex flex-col flex-1 basis-2/5">
          <ProfileSidePannel />
        </div>
        {/* right-div */}
        <div className="flex flex-col flex-1 basis-3/5 gap-4 mt-24 border-[1px] rounded-[10px] ">
          <div className="flex flex-row gap-2 items-center justify-center p-[16px]">
            <div className="text-[24px] font-bold">Change Password</div>
            <Icon
              icon="teenyicons:password-outline"
              width="64"
              height="64"
              style={{ color: "#AE7A0A" }}
            />
          </div>
          <div className="flex flex-col justify-center h-[400px]">
            <form action="submit" className="flex flex-col gap-[24px]">
              <div>
                <div className="flex flex-col gap-2 items-start">
                  <label
                    htmlFor="currentPassword"
                    className="text-[16px] font-medium"
                  >
                    Current Password
                  </label>
                  <input type="password" className="w-[400px] rounded-[10px]" />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label
                    htmlFor="newPassword"
                    className="text-[16px] font-medium"
                  >
                    New Password
                  </label>
                  <input type="password" className="w-[400px] rounded-[10px]" />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <label
                    htmlFor="confirmPassword"
                    className="text-[16px] font-medium"
                  >
                    Confirm Password
                  </label>
                  <input type="password" className="w-[400px] rounded-[10px]" />
                </div>
              </div>
              <button className="font-medium text-lg border-[1px] h-[56px] w-[320px] rounded-[10px] bg-[#006838] text-white">
                Save Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
