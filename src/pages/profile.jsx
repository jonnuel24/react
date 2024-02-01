import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import profileImg from "../asset/images/profile_img.png";
import "../asset/styles/profile.css";
import { Icon } from "@iconify/react";
import ProfileSidePannel from "../Components/profileSidePannel";
import { useSelector } from "react-redux";
function Profile() {
  const user=useSelector(state=>state.user?.currentUser)

  console.log(user);
  return (
    <div>
      <Navbar />
      <div className="py-4 px-32 flex flex-row gap-4">
        <div className="flex flex-col flex-1 basis-2/5 ">
          <ProfileSidePannel user={user}/>
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
                    <td className=" px-4 ml-2">{user?.firstName}</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Last Name:</td>
                    <td className=" px-4 ml-2">{user?.lastName}</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Email:</td>
                    <td className=" px-4 ml-2">{user?.email}</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Birthday:</td>
                    <td className=" px-4 ml-2">{user?.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Phone Number:</td>
                    <td className=" px-4 ml-2">{user?.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td className=" px-4">Gender:</td>
                    <td className=" px-4 ml-2">{user?.gender}</td>
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
