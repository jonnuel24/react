import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Icon } from "@iconify/react";
import ProfileSidePannel from "../Components/profileSidePannel";

function Notification() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1 basis-2/5">
          <ProfileSidePannel />
        </div>
        <div className="flex flex-col flex-1 basis-3/5 mt-24">
          <div> Notifications</div>
          <div>
            <div className="flex flex-row">
              <div>
                <div></div>
                <h3>Livestock B is on the way!</h3>
              </div>
              <div>
                <Icon
                  icon="ion:chevron-back"
                  color="black"
                  width="12"
                  height="12"
                  rotate={2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Notification;
