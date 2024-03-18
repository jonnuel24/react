import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import profileImg from "../asset/images/profile_img.png";
import "../asset/styles/profile.css";
import "../asset/styles/profile_edit.css";
import { Icon } from "@iconify/react";
import ProfileSidePannel from "../Components/profileSidePannel";
import { useSelector } from "react-redux";
import Input_field from "../Components/input_field";
function Profile_edit() {
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

        <div className="flex flex-col flex-1 basis-3/5 gap-4 mt-24 p-div4-right p-[24px]">
          <div className="flex flex-row items-end gap-[16px]">
            <div className="p-pic-edit">
              <img src={profileImg} alt="" />
            </div>
            <div>
              {" "}
              <button
                className="p-pic-edit-button"
                type="file"
                accept="image/*"
              >
                Upload New
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8">
            <form action="" className="flex flex-wrap gap-16">
              <div className="w-[869px] flex flex-col items-start gap-2">
                <label htmlFor="" className="font-medium text-[24px]">
                  Personal Information
                </label>
                <div className="flex flex-wrap gap-8">
                  {/* input 1 */}
                  <Input_field
                    label="First Name"
                    placeholder={user?.firstName}
                  />

                  {/* input 2 */}
                  <Input_field label="Last Name" placeholder={user?.lastName} />

                  {/* input 3 */}
                  <Input_field label="Email" placeholder={user?.email} />

                  {/* input 4 */}
                  <Input_field
                    label="Phone Number"
                    placeholder={user?.phoneNumber}
                  />
                </div>
              </div>
              <div className="w-[869px] flex flex-col items-start gap-2">
                <label htmlFor="" className="font-medium text-[24px]">
                  Shipping Information
                </label>

                <div div className="flex flex-wrap gap-8">
                  {/* input 1 */}
                  <Input_field label="Country" placeholder={user?.country} />

                  {/* input 2 */}
                  <Input_field label="State" placeholder={user?.state} />

                  {/* input 3 */}
                  <Input_field label="Address" placeholder={user?.address} />
                </div>
              </div>
              <div className="flex justify-end w-full">
                <button className=" btn bg-black text-white py-[32px] h-[48px] px-8 w-[334px] border-[10px] font-bold" disabled>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile_edit;
