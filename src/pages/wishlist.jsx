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

function Wishlist() {
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
            <table class="w-full table-fixed border border-spacing-y-4">
              <thead className="text-left">
                <tr className="border border-slate-600 ...">
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Date Added</th>
                  <th className="px-6 py-4">Unit Price</th>
                  <th className="px-6 py-4">Quantity</th>
                  <th className="px-6 py-4">Stock</th>
                </tr>
              </thead>
              <tbody className="text-left ">
                <tr className="border border-slate-600 ...">
                  <td className="px-6 py-4">
                    <WishlistCard />{" "}
                  </td>
                  <td className="px-6 py-4">March 20,2013</td>
                  <td className="px-6 py-4">#240,000</td>
                  <td className="px-6 py-4">
                    <select name="" id="num" className="" style={linkStyle}>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                      {/* <option value="1" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option> */}
                    </select>
                  </td>
                  <td className="px-6 py-4">#240,000</td>
                </tr>
              </tbody>
            </table>
            {/* <table className="table-auto pdr-table">
              <thead className="text-left">
                <tr className="gap-4">
                  <th>Product</th>
                  <th>Date Added</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody className="text-left">
                <tr className="flex items-center gap-16">
                  <td>
                    <WishlistCard />
                  </td>
                  <td>March 20,2013</td>
                  <td>#240,000</td>
                  <td className="items-center flex"><Picon width={11} height={11} color="#3DB54A" />
                  in stock</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
