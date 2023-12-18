import React from "react";
import Logo from "../../../asset/images/Logo (white).svg";
import "../../../asset/styles/farmersNabar.css";
import { Icon } from "@iconify/react";
import pic from '../../../asset/images/animal_profile.png';

function FNavbar() {
  return (
    <div>
      <div className="fnav bg-[#000000] px-16 py-6 w-full flex flex-row justify-between">
        <img src={Logo} alt="" />
        <div className="flex flex-row items-center gap-[21px]">
          <Icon icon="uil:comment-message" className="fn-icon" />
          <Icon icon="solar:bell-linear" className="fn-icon" />
          <div className="flex flex-row items-center gap-[21px]">
            <div className="fn-profile">
                <img src={pic} alt="" className="animal" />
            </div>
            <div className="flex flex-row items-center gap-[4px]">
              <label htmlFor="" className="text-white text-[20px] font-medium leading-normal">Paul</label>
              <Icon icon="majesticons:chevron-down" color="white" width="24px" height="21px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FNavbar;
