import React from "react";
import Logo from "../asset/images/logo_light.svg";
import { Icon } from "@iconify/react";
import '../asset/styles/webfooter.css'

function Webfooter() {
  return (
    <div className="bg-black py-4 px-32 gap-24  flex flex-col sm:flex-row items-center">
      <div className="flex flex-col basis-4/5  items-start">
        <img src={Logo} alt="" className="mb-8" />
        <h4 className="text-white text-left wf-text">
          Agripeller is committed to simplifying the process of livestock
          orders, enabling users to conveniently place orders from the comfort
          of their homes. Our devotion to farming drives us to empower farmers,
          ensuring their sales success.
        </h4>
      </div>
      <div className="flex flex-col basis-1/5  items-end ">
        <h4 className="text-white mb-4 wf-text">©Agripeller 2023</h4>
        <div className="flex gap-4">
          <Icon icon="ri:linkedin-fill" width={32} height={32} color="white" />
          <Icon icon="lucide:twitter" color="white" width="32" height="32" />
        </div>
      </div>
    </div>
  );
}

export default Webfooter;
