import React from "react";
import Logo from "../../../asset/images/Logo (white).svg";
import "../../../asset/styles/farmersNabar.css";
import { Icon } from "@iconify/react";
import pic from '../../../asset/images/animal_profile.png';

function FNavbar() {
  return (
    <div>
      <div className="fnav bg-[#000000] px-32 py-6 w-full flex flex-row justify-between">
        <img src={Logo} alt="" />
        <div className="flex flex-row items-center">
          <Icon icon="uil:comment-message" />
          <Icon icon="solar:bell-linear" />
          <div>
            <div className="image">
              <figure>
                <img src={pic} alt="" className="animal" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FNavbar;
