import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Icon } from "@iconify/react";
import ProfileSidePannel from "../Components/profileSidePannel";
import "../asset/styles/notification.css";
import Picon from "../Components/p-icon";

function Notification() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row gap-32 py-4 px-32">
        <div className="flex flex-col basis-2/5">
          <ProfileSidePannel />
        </div>
        <div className="flex flex-col mt-24 n-right-div py-2">
          <div className="n-rd-head px-8 py-2">
            <h3 className="text-start">Notifications</h3>
          </div>
          <div className="flex flex-col py-2 px-8 n-body">
            <div className="flex flex-row items-center justify-between pt-4 n-body-child">
              <div className="flex flex-row gap-4 items-center">
                <Picon width={11} height={11} color="#FFC029" />
                <h3 className="n-body-text mt-2">Livestock B is on the way!</h3>
              </div>
              <div>
                <Icon
                  icon="ion:chevron-back"
                  color="black"
                  width="12"
                  height="12"
                  rotate={3}
                />
              </div>
            </div>

            

            <div className="flex flex-row items-center justify-between pt-4 n-body-child">
              <div className="flex flex-row gap-4 items-center">
                <Picon width={11} height={11} color="#F91919" />
                <h3 className="n-body-text mt-2">Livestock A has  Arrived!</h3>
              </div>
              <div>
                <Icon
                  icon="ion:chevron-back"
                  color="black"
                  width="12"
                  height="12"
                  rotate={3}
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-between pt-4 n-body-child">
              <div className="flex flex-row gap-4 items-center">
                <Picon width={11} height={11} color="#3DB54A" />
                <h3 className="n-body-text mt-2">Livestock A Order is  Confirmed</h3>
              </div>
              <div>
                <Icon
                  icon="ion:chevron-back"
                  color="black"
                  width="12"
                  height="12"
                  rotate={3}
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-between pt-4 n-body-child">
              <div className="flex flex-row gap-4 items-center">
                <Picon width={11} height={11} color="#FFC029" />
                <h3 className="n-body-text mt-2">Livestock A is out of Stock !</h3>
              </div>
              <div>
                <Icon
                  icon="ion:chevron-back"
                  color="black"
                  width="12"
                  height="12"
                  rotate={3}
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
