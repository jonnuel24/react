import React from "react";
import Logo from "../asset/images/logo_light.svg";
import { Icon } from "@iconify/react";
import "../asset/styles/webfooter.css";
import { Link } from "react-router-dom";

function Webfooter() {
  return (
    <div className="bg-black py-[125px] px-[16px] sm:px-[148px] gap-16 sm:gap-24  h-auto  flex flex-col justify-start">
      <div className="flex flex-col sm:flex-row gap-8 sm:justify-between w-full ">
        <div className="flex flex-col  items-start w-full sm:w-[960px]">
          <img src={Logo} alt="" className="mb-8" />
          <h4 className="text-white text-left text-[20px] font-normal sm:font-medium sm:text-[24px] w-full">
            Agripeller is committed to simplifying the process of livestock
            orders, enabling users to conveniently place orders from the comfort
            of their homes. Our devotion to farming drives us to empower
            farmers, ensuring their sales success.
          </h4>
        </div>
        <div className="flex flex-col  gap3 sm:gap-6 items-start">
          <h4 className="text-white text-[24px] font-medium leading-normal">
            Company
          </h4>

          <ul className="decoration-none flex flex-col items-start leading-medium gap-2 m-0 p-0">
            <a href="#websiteHeroSection" className="wl-link">
              <li className="text-white">Home</li>
            </a>
            <a href="#websiteAbout" className="wl-link">
              <li className="text-white">About Us</li>
            </a>
            <a href="#services" className="wl-link">
              <li className="text-white">Services</li>
            </a>
            <a href="#faqs" className="wl-link">
              <li className="text-white">FAQ</li>
            </a>
          </ul>

          {/* <Link className="no-underline text-white text-[20px] font-normal leading-normal">
            About
          </Link>
          <Link className="no-underline text-white text-[20px] font-normal leading-normal">
            Services
          </Link>
          <Link className="no-underline text-white text-[20px] font-normal leading-normal">
            FAQ
          </Link> */}
        </div>
        <div className="flex flex-col gap-3 sm:gap-6 items-start">
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
