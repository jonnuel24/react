import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import profileImg from "../asset/images/profile_img.png";
import "../asset/styles/profile.css";
import { Icon } from "@iconify/react";
import ProfileSidePannel from "../Components/profileSidePannel";
import WishlistCard from "../Components/wishlistCard"

function Wishlist() {
  return (
    <div>
      <Navbar />
      <div className="py-4 px-32 flex flex-row">
        {/* Left-div */}
        <div className="flex flex-col flex-1 basis-2/5">
          <ProfileSidePannel />
        </div>
        {/* right-div */}
        <div className="flex flex-col flex-1 basis-3/5 gap-4 mt-24">
          <div className="flex flex-row gap-3 items-center">
            <div className="p-pic">
              <img src={profileImg} alt="" />
            </div>
            <Icon
              icon="icon-park-outline:like"
              color="black"
              width="16"
              height="16"
            />
            <h3>Wishlist</h3>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Date Added</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <WishlistCard />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
