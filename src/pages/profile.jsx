import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import profileImg from "../asset/images/profile_img.png";
import "../asset/styles/profile.css";

function profile() {
  return (
    <div>
      <Navbar />
      <div className="py-4 px-32">
        <h1 className="text-left mb-4">Customer Profile</h1>
        <div className="flex gap-8">
          {/* left div */}
          <div className="flex flex-col basis-2/5 gap-4">
            <div className="flex h-fit items-center gap-2 p-div4">
              <div className="p-pic">
                <img src={profileImg} alt="" />
              </div>
              <h3>Blessing Gasgos</h3>
            </div>
            <div className="profileSettings flex h-fit flex-col items-start py-4 gap-4">
              <div className="pl-16 flex flex-col items-start gap-4 ">
                <div>My Orders</div>
                <div>Wishlist</div>
                <div>Notifications</div>
                <div>Security</div>
              </div>
              <div className="p-logout pl-16 py-3 flex flex-1 w-full">
                Log out
              </div>
            </div>
          </div>

          {/* right div */}
          <div className="flex flex-col flex-1 basis-3/5 gap-4">
            <div className="p-div4-right">
              {/* p-div4-right-nav */}
              <div className="flex flex-row justify-between items-center p-div4-right-nav px-8 py-3">
                <h3 className="">Customer Profile</h3>
                <i>icon</i>
              </div>
              <div className="flex flex-row justify-between px-16 py-4 ">
                <table className="table-auto">
                  <tbody className="text-left">
                    <tr className="">
                      <td className="py-2 px-4">First Name:</td>
                      <td className="py-2 px-4 ml-2">Blessing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Last Name:</td>
                      <td className="py-2 px-4 ml-2">Gasgos</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Email:</td>
                      <td className="py-2 px-4 ml-2">
                        BlessingGeorge@gmail.com
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Birthday:</td>
                      <td className="py-2 px-4 ml-2">19 March 1995</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Phone Number:</td>
                      <td className="py-2 px-4 ml-2">08168134671</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Gender:</td>
                      <td className="py-2 px-4 ml-2">Female</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-col p-div4-right2 py-6 px-8 gap-2 box-border w-320">
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
                <i>icon</i>
              </div>
              <div className="px-16 py-8">
                <table className="table-auto border-separate border-spacing-2">
                  <tbody className="text-left gap-2 ">
                    <tr className="">
                      <td className="py-2 px-4">Address:</td>
                      <td className="py-2 px-4 ml-2 mt-2 border">River Park</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">State:</td>
                      <td className="py-2 px-4 ml-2 mt-2 border">FCT</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Country:</td>
                      <td className="py-2 px-4 ml-2 border">
                        Nigeria
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default profile;
