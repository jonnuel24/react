import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import profileImg from "../asset/images/profile_img.png";
import "../asset/styles/profile.css";
import { Icon } from "@iconify/react";
import ProfileSidePannel from "../Components/profileSidePannel";
function Profile() {
  return (
    <div>
      <Navbar />
      <div className="py-4 px-32 flex flex-row gap-4">
        <div className="flex flex-col flex-1 basis-2/5 ">
          <ProfileSidePannel />
        </div>
        {/* right div */}
        <div className="flex flex-col flex-1 basis-3/5 gap-4 mt-24">
          <div className="p-div4-right">
            {/* p-div4-right-nav */}
            <div className="flex flex-row justify-between items-center p-div4-right-nav px-8 py-3">
              <h3 className="">Customer Profile</h3>
              <Icon
                icon="fluent:edit-12-regular"
                color="#f91919"
                width="18.3"
                height="18"
              />
            </div>
            <div className="flex flex-row justify-between px-16 py-4 ">
              <table className="table-auto pdr-table">
                <tbody className="text-left">
                  <tr className="">
                    <td className=" px-4">First Name:</td>
                    <td className=" px-4 ml-2">Blessing</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Last Name:</td>
                    <td className=" px-4 ml-2">Gasgos</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Email:</td>
                    <td className=" px-4 ml-2">BlessingGeorge@gmail.com</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Birthday:</td>
                    <td className=" px-4 ml-2">19 March 1995</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Phone Number:</td>
                    <td className=" px-4 ml-2">08168134671</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Gender:</td>
                    <td className=" px-4 ml-2">Female</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col h-fit p-div4-right2 py-6 px-8 gap-2 box-border w-320">
                <figure className="flex flex-col gap-3">
                  <figcaption>Profile Image</figcaption>
                  <div className="p-pic-lg">
                    <img src={profileImg} alt="" />
                  </div>
                </figure>
                <button type="button" className="py-3 px-4">
                  Upload New
                </button>
              </div>
            </div>
          </div>

          {/* "p-div4-right-down" */}
          <div className="p-div4-right">
            <div className="flex flex-row justify-between items-center p-div4-right-nav px-8 py-3">
              <h3 className="">Shipping Address </h3>
              <Icon
                icon="fluent:edit-12-regular"
                color="#f91919"
                width="18.3"
                height="18"
              />
            </div>
            <div className="px-16 py-8">
              <table className="table-auto border-separate border-spacing-2 pdr-table">
                <tbody className="text-left gap-2 ">
                  <tr className="">
                    <td className="px-4">Address:</td>
                    <td className="px-4 ml-2 mt-2 border">River Park</td>
                  </tr>
                  <tr>
                    <td className="px-4">State:</td>
                    <td className="px-4 ml-2 mt-2 border">FCT</td>
                  </tr>
                  <tr>
                    <td className="px-4">Country:</td>
                    <td className="px-4 ml-2 border">Nigeria</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
