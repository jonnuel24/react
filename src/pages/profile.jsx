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
  const user = useSelector((state) => state.user?.currentUser);

  console.log(user);
  return (
    <div>
      <Navbar />
      <div className="py-4 px-32 flex flex-row gap-4">
        <div className="flex flex-col flex-1 basis-2/5 ">
          <ProfileSidePannel user={user} />
        </div>
        {/* right div */}

        <div className="flex flex-col flex-1 basis-3/5 gap-4 mt-10">
          <div className="w-100 text-right">
          <button>
            <Icon
              icon="fluent:edit-12-regular"
              color="#f91919"
              width="18.3"
              height="18"
            />
          </button>
          </div>

          <div className="p-div4-right">
            {/* p-div4-right-nav */}
            <div className="flex flex-row justify-between items-center p-div4-right-nav px-8 py-3">
              <h3 className="">Customer Profile</h3>
            </div>
            <div className="flex flex-row justify-between px-16 py-4 ">
              <div className="flex flex-col items-start gap-2 user-profile">
                <div className="flex flex-col items-start">
                  <label htmlFor="">First name</label>
                  <div className="text-[20px] font-semibold">
                    {user?.firstName}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="">Last name</label>
                  <div className="text-[20px] font-semibold">
                    {user?.lastName}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="">Email</label>
                  <div className="text-[20px] font-semibold">{user?.email}</div>
                </div>
                {/* <div className="flex flex-col items-start">
                  <label htmlFor="">Birthday</label>
                  <div className="text-[20px] font-semibold">{user?.dateOfBirth}</div>
                </div> */}
                <div className="flex flex-col items-start">
                  <label htmlFor="">Phone number</label>
                  <div className="text-[20px] font-semibold">
                    {user?.phoneNumber}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="">Gender</label>
                  <div className="text-[20px] font-semibold">
                    {user?.gender}
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-fit p-div4-right2 py-6 px-8 gap-2 box-border w-320">
                <figure className="flex flex-col gap-3">
                  <figcaption>Profile Image</figcaption>
                  <div className="p-pic-lg">
                    <img src={profileImg} alt="" />
                  </div>
                </figure>
                {/* <button type="button" className="py-3 px-4">
                  Upload New
                </button> */}
              </div>
            </div>
          </div>

          {/* "p-div4-right-down" */}
          <div className="p-div4-right">
            <div className="flex flex-row justify-between items-center p-div4-right-nav px-8 py-3">
              <h3 className="">Shipping Address </h3>
            </div>
            <div className="px-16 py-8">
              <div className="flex flex-col items-start">
                <label htmlFor="">Address</label>
                <div className="text-[20px] font-semibold">{user?.address}</div>
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="">State</label>
                <div className="text-[20px] font-semibold">{user?.state}</div>
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="">Country</label>
                <div className="text-[20px] font-semibold">{user?.country}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
