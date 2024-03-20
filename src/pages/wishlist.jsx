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
        <div className="flex flex-col flex-1 basis-3/5 gap-4 mt-24 border-[1px] rounded-[10px] p-[16px]">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-[24px] font-bold">Wishlist</div>
            <Icon
              icon="flat-color-icons:like"
              color="black"
              width="16"
              height="16"
            />
          </div>
          <div>
            <div className="flex flex-col gap-[16px]">
              {/* Table Header */}
              <div className="flex flex-row border-[1px] rounded-[10px] py-[8px] items-center">
                <div className="w-[30%] py-2 text-center text-[18px] font-medium">
                  Product
                </div>
                <div className="w-[20%] py-2 text-center text-[18px] font-medium">
                  Date Added
                </div>
                <div className="w-[15%] py-2 text-center text-[18px] font-medium">
                  Price
                </div>
                <div className="w-[15%] py-2 text-center text-[18px] font-medium">
                  Status
                </div>
                <div className="w-[20%] py-2 text-center text-[18px] font-medium">
                  Action
                </div>
              </div>

              {/* Table Body */}
              <div className="flex flex-col gap-[16px]">
                {/* tb row1 */}
                <div className="flex flex-row border-[1px] rounded-[10px] py-[8px] items-center">
                  <div className="w-[30%] py-2 flex item justify-center">
                    <WishlistCard />
                  </div>
                  <div className="w-[20%] py-2 text-center">
                    March 24th, 2024
                  </div>
                  <div className="w-[15%] py-2 text-center">N30,000</div>
                  <div className="w-[15%] py-2 text-center">
                    <div className="wishlist-status-active">In Stock</div>
                  </div>
                  <div className="w-[20%] py-2 flex justify-center">
                    <div className="flex flex-row gap-[16px] items-center">
                      <button>
                        <Icon
                          icon="fa-solid:cart-plus"
                          width="64"
                          height="64"
                          style={{ color: "green" }}
                        />
                      </button>
                      <button>
                        <Icon
                          icon="fluent:delete-32-regular"
                          width="64"
                          height="64"
                          style={{ color: "red" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                {/* tb row2 */}
                <div className="flex flex-row border-[1px] rounded-[10px] py-[8px] items-center">
                  <div className="w-[30%] py-2 flex item justify-center">
                    <WishlistCard />
                  </div>
                  <div className="w-[20%] py-2 text-center">
                    March 24th, 2024
                  </div>
                  <div className="w-[15%] py-2 text-center">N30,000</div>
                  <div className="w-[15%] py-2 text-center">
                    <div className="wishlist-status-active">In Stock</div>
                  </div>
                  <div className="w-[20%] py-2 flex justify-center">
                    <div className="flex flex-row gap-[16px] items-center">
                      <button>
                        <Icon
                          icon="fa-solid:cart-plus"
                          width="64"
                          height="64"
                          style={{ color: "green" }}
                        />
                      </button>
                      <button>
                        <Icon
                          icon="fluent:delete-32-regular"
                          width="64"
                          height="64"
                          style={{ color: "red" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
