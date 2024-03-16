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

        <div className="flex flex-col flex-1 basis-3/5 gap-4 mt-10 p-div4-right p-[24px]">
          <div className="flex flex-row items-end gap-[16px]">
            <div className="p-pic-edit">
              <img src={profileImg} alt="" />
            </div>
            <div>
              {" "}
              <button className="p-pic-edit-button">Change</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile_edit;
