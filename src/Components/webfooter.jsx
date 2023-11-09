import React from "react";
import Logo from "../asset/images/logo_light.svg";
import { Icon } from "@iconify/react";
import "../asset/styles/webfooter.css";
import { Link } from "react-router-dom";

function Webfooter() {
  return (
    <div className="bg-black py-[125px] px-[148px] gap-24  h-auto  flex flex-col sm:flex-col justify-start">
      <div className="flex flex-row justify-between w-full ">
        <div className="flex flex-col  items-start w-[960px]">
          <img src={Logo} alt="" className="mb-8" />
          <h4 className="text-white text-left wf-text">
            Agripeller is committed to simplifying the process of livestock
            orders, enabling users to conveniently place orders from the comfort
            of their homes. Our devotion to farming drives us to empower
            farmers, ensuring their sales success.
          </h4>
        </div>
        <div className="flex flex-col  gap-6 items-start">
          <h4 className="text-white text-[24px] font-medium leading-normal">
            Company
          </h4>
          <Link className="no-underline text-white text-[20px] font-normal leading-normal">
            About
          </Link>
          <Link className="no-underline text-white text-[20px] font-normal leading-normal">
            Services
          </Link>
          <Link className="no-underline text-white text-[20px] font-normal leading-normal">
            FAQ
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <h4 className="text-white text-[24px] font-medium leading-normal">
            Socials
          </h4>
          <Link className="flex flex-row gap-2 items-center no-underline text-white text-[20px] font-normal leading-normal">
            {" "}
            <Icon icon="lucide:twitter" color="white" width="48" height="48" />
            Twitter
          </Link>
          <Link className="flex flex-row gap-2 items-center no-underline text-white text-[20px] font-normal leading-normal">
            {" "}
            <Icon icon="bi:instagram" color="white" width="48" height="48" />
            Instagram
          </Link>
          <Link className="flex flex-row gap-2 items-center no-underline text-white text-[20px] font-normal leading-normal">
            {" "}
            <Icon icon="mingcute:facebook-line" color="white" />
            Facebook
          </Link>
        </div>
      </div>
      <div className="webfooter-divider w-full"></div>
      <div className="flex flex-col  items-start ">
        <h4 className="text-white mb-4 wf-text">©Agripeller 2023</h4>
      </div>
    </div>
  );
}

export default Webfooter;
