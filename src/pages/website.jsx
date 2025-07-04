/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
//import Logo from "../asset/images/logo.svg";
import Webnav from "../Components/webnav";
import Webfooter from "../Components/webfooter";
import HeroImg1 from "../asset/images/mobile-hero-img.png";
import HeroImg from "../asset/images/new-hero-img.png";
import "../asset/styles/website.css";
import { Icon } from "@iconify/react";

import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import S2ldimg from "../asset/images/s2-ld-img.svg";
import WebsiteS4Icon1 from "../asset/images/website-s4-icon1.svg";
import WebsiteS4Icon2 from "../asset/images/website-s4-icon2.svg";
import WebsiteS4Icon3 from "../asset/images/website-s4-icon3.svg";
import WebsiteS4Icon4 from "../asset/images/website-s4-icon4.svg";

import WebsiteS7Img1 from "../asset/images/Mask group.png";
import WebsiteS7Img2 from "../asset/images/mask group 2.png";

const animatedComponents = makeAnimated();

function Website() {
  const [selected, setSelected] = useState([]);
  const options = [
    { label: "Goat", value: "goat" },
    { label: "Fish", value: "fish" },
    { label: "Pig", value: "pig" },
    { label: "Cow", value: "cow" },
    { label: "Chicken", value: "chicken" },
    { label: "Sheep", value: "sheep" },
    { label: "Snail", value: "snail" },
  ];

  const [post, setPost] = useState({
    email: "",
    fullName: "",
    farmName: "",
    location: "",
    productCategory: "",
    typesOfLivestock: [""],
  });

  const {
    handleSubmit,
    // register,
    // reset,
    // formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleWaitingList = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      // Set the typesOfLivestock field with selected values
      setPost({ ...post, typesOfLivestock: selected.map((e) => e.value) });

      const result = await accountServices.waitingList(post);

      setPost({
        email: "",
        fullName: "",
        farmName: "",
        location: "",
        productCategory: "",
        typesOfLivestock: [""],
      });
      setSelected([]);
      setTimeout(() => {
        setLoading(false);
        alert(result.message);
      }, 1000);

      //comment
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
    document.getElementById("btn-close").click(true);
    // document.getElementById('exampleModal').classList.remove("show")
    // document.click()
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  //const [menuOpen, setMenuOpen] = useState(false);

  // Ref to the menu button for detecting clicks outside the menu
  //const menuButtonRef = useRef(null);

  //const toggleMenu = () => {
  //  setMenuOpen(!menuOpen);
  //};

  return (
    <div className="h-full website w-full overflow-x-hidden">
      {/* ==================start of navbar============== */}

      <Webnav />
      {/* =========end of navbar================ */}
      <div className="py-0 sm:py-16  pb-32 h-fit  flex flex-col gap-8 sm:gap-24 website-body mt-24">
        {/* hero-section */}
        <div
          className="flex flex-col py-12 lg:flex-row gap-2 website-hero px-[16px] lg:px-[128px]  pt-[120px] mt-[-145px]"
          id="websiteHeroSection"
        >
          {/* <img src={Websitebgdrop} alt="" className=" absolute inset-0 z-0 websitebgdrop" /> */}
          {/* hero-left-div */}
          <div className=" flex flex-col items-start w-full lg:w-1/2  gap-4 sm:gap-8 website-hld">
            <h6 className="text-[12px] sm:text-[16px]">
              Creating Farming Solutions, One Byte at a Time
            </h6>
            <h2 className="text-left w-fit text-[32px] sm:text-[48px] ">
              <span className="text-[#145C3F] text-[32px] sm:text-[48px]">
                AGRIPELLER -
              </span>
              <br />
              Get Clean, Farm-Fresh Meat and Protein Without Leaving Home.
            </h2>
            <h4 className="text-left text-[20px] sm:text-[24px] w-full">
              Order goat, chicken, ram, snails, eggs and more — delivered
              straight from the farm hygienically, fast, and cold to your
              doorstep.
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <button
                className="text-white bg-[#006838] hover:bg-[#145C3F] py-3 px-8 mb-[24px] md:mb-[24px] sm:mb-[0]"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                I want to order
              </button>
              <button
                className="
                text-[#006838] 
                bg-white 
                hover:bg-[#145C3F] 
                border 
                border-[#006838] 
                py-3 
                px-16 
                border-4 
                mb-[24px] md:mb-[24px] sm:mb-[0]"
              >
                Join The Healthy Eating Community
              </button>
            </div>
          </div>

          {/* hero-right-div desktop */}

          <div className=" w-full p-8 lg:w-1/2 ">
            <div className="website-rh-bg  w-[100%] ml-[107px] mt-[-40px] hidden lg:block ">
              <img src={HeroImg} alt="" className="website-rh-img" />
              <div className="wrhi-shadow"></div>
            </div>

            {/* mobile */}
            <div className="lg:hidden grid place-content-center ">
              <img
                src={HeroImg1}
                alt=""
                className="website-rh-img-mobile w-[400px] h-auto"
              />
            </div>
          </div>
        </div>{" "}
        {/* modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Join Agripeler Waitlist
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  id="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  action="#"
                  method="post"
                  id="waitingListForm"
                  className="flex flex-col p-4"
                  onSubmit={handleSubmit(handleWaitingList)}
                >
                  <div className="mb-3 text-left w-full">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      placeholder="e.g. John Doe"
                      required
                      onChange={handleInput}
                      value={post.fullName}
                    />
                  </div>
                  <div className="mb-3 text-left w-full">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="e.g. john.doe@example.com"
                      required
                      onChange={handleInput}
                      value={post.email}
                    />
                  </div>

                  <div className="mb-3 text-left w-full">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="e.g. +1 234 567 890"
                    />
                  </div>

                  <div className="mb-3 text-left w-full">
                    <label htmlFor="farm name" className="form-label">
                      Farm Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="farmName"
                      name="farmName"
                      placeholder="e.g. paul's farm"
                      required
                      onChange={handleInput}
                      value={post.farmName}
                    />
                  </div>

                  <div className="mb-3 text-left w-full">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <select
                      className="form-control"
                      id="location"
                      name="location"
                      required
                      onChange={handleInput}
                      value={post.location}
                    >
                      <option value="">Select a location</option>
                      <option value="ontario">Ontario</option>
                      <option value="quebec">Quebec</option>
                      <option value="british-columbia">British Columbia</option>
                      <option value="alberta">Alberta</option>
                    </select>
                  </div>

                  {/* <div className="mb-3 text-left w-full">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="e.g. +1 234 567 890"
                      required
                      onChange={handleInput}
                    />
                  </div> */}
                  <div className="mb-3 text-left w-full">
                    <label htmlFor="Product Category" className="form-label">
                      Product Category
                    </label>
                    <select
                      className="form-control"
                      id="productCategory"
                      name="productCategory"
                      required
                      onChange={handleInput}
                      value={post.productCategory}
                    >
                      <option value="">Select a category</option>
                      <option value="goat">Goat</option>
                      <option value="cattle">Cattle</option>
                      <option value="snail">Snail</option>
                      <option value="pig">Pig</option>
                      <option value="poultry">Poultry</option>
                      <option value="fish">Fish</option>
                    </select>
                  </div>

                  <div className="mb-3 text-left w-full">
                    <label htmlFor="Product Category" className="form-label">
                      Type of Livestock
                    </label>
                    {/* <MultiSelect
                      options={options}
                      // selected={selected}
                      onChange={setSelected}
                      labelledBy={"Select"}
                    /> */}
                    <Select
                      options={options}
                      defaultValue={post.typesOfLivestock}
                      components={animatedComponents}
                      onChange={setSelected}
                      name="typesOfLivestock"
                      isMulti
                    />
                    {/* <select
                      className="form-control"
                      id="typesOfLivestock"
                      name="typesOfLivestock"
                      required
                      onChange={handleInput}
                      value={post.typesOfLivestock}
                      multiple={true}
                    >
                      <option value="">Type of Livestock</option>
                      <option value="goat">Goat</option>
                      <option value="cattle">Cattle</option>
                      <option value="snail">Snail</option>
                      <option value="pig">Pig</option>
                      <option value="poultry">Poultry</option>
                      <option value="fish">Fish</option>
                    </select> */}
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={loading}
                    >
                      {loading ? "Joining..." : "Join Waitlist"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*Start of section 2  About us Section*/}
        {/* <div
          className="flex flex-col  px-[16px] sm:px-[64px] w-full items-center sm:items-start gap-[16px] sm:gap-[32px] pt-[40px] sm:pt-[120px] mt-[-120px]"
          id="websiteAbout"
          data-scroll-index="1"
        >
          <div className="w-full h-fit sm:h-[700px]  flex flex-col-reverse sm:flex-row gap-16 sm:gap-32 items-center  ">
            <div className="mt-[48px] sm:mt-0">
              <div className="s4-bg1 w-[397px] sm:w-[505px] h-[397px] sm:h-[505px] grid justify-center content-center sm:order-2">
                <div className="s4-bg2 w-[340px] sm:w-[433px] h-[340px] sm:h-[433px] grid justify-center content-center">
                  <div className="s4-bg3 w-[300px] sm:w-[363px] h-[300px] sm:h-[363px] grid justify-center content-center px-[16px]">
                    <img src={S2ldimg} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-8 w-full items-start mt-[8px] lg:mb-24">
              <h5 className="text-[32px] sm:text-[40px] text-[#4D4D4D] leading-normal font-medium ">
                About Us
              </h5>
              <h3 className="text-left text-[#690D00] text-[24px] sm:text-[48px] font-semibold sm:font-bold leading-normal">
                "CANADA'S TRUSTED  DIGITAL LIVESTOCK MARKETPLACE."
              </h3>
              <p className="text-left text-[16px] sm:text-[20px]">
                Agripeller is a digital marketplace that helps automate and
                simplify the retailing process of livestock. We are the first
                innovative, user-friendly web app that helps farmers to double
                their sales and reduce cost while connecting with thousands of
                buyers who get quality livestock in return. 
                <br />
                Our team of experts are dedicated to revolutionizing the
                Canadian livestock sector with data analytics. By closely
                monitoring livestock production, consumption, and market trends,
                we aim to generate comprehensive data that can empower farmers,
                buyers, and policymakers with valuable insights. 
                <br />
                With our online farmers market tool, we're confident that we can
                build a thriving tech solution for agriculture in Canada. We're
                thrilled at the potential of our platform to make a positive
                impact on the agricultural industry in Canada and look forward
                to working with stakeholders to drive this ambitious goal
                forward.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-[32px] justify-center w-full mt-24 sm:mt-4">
            <div>
              <h5 className="text-[#006838] text-[24px] sm:text-[32px] lg:font-normal text-left">
                Our Mission
              </h5>
              <p className="w-full sm:w-[600px] text-left">
                Our mission is to make the livestock industry more efficient,
                sustainable, and transparent. To help livestock farmers connect
                with buyers, manage their inventory, and track their shipments.
                We aim to help business owners and end users procure fresh,
                healthy, high-quality livestock.
              </p>
            </div>
            <div className="w-[0.5px] h-[143px] bg-black hidden lg:block"></div>
            <div className="">
              <h5 className="text-[#006838] text-[24px] sm:text-[32px] lg:font-normal text-left">
                Company's Vision
              </h5>
              <p className="w-full sm:w-[600px] text-left">
                We are dedicated to streamlining the day-to-day farmer tasks and
                connecting buyers with quality farm produce through our
                one-stop-shop  e-commerce and livestock record keeping software
              </p>
            </div>
          </div>
        </div> */}
        <div className=" flex flex-col px-[32px] sm:px-[105px] pt-[113px] pb-[96px] bg-[#235628] gap-[32px] sm:gap-[113px] website-s3">
          <div>
            <h4 className="text-white text-[32px] ">
              Why Buying From Agripeller is Safer
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row gap-[50px] ">
            {/* 01 */}
            <div className="flex flex-col gap-[18px] items-center justify-start w-[345px] h-[296px] px-[24px] py-[38px] ws3-card">
              <Icon
                icon="heroicons:cube-transparent-solid"
                color="#6ABD45"
                className="ws3-icon"
              />
              <h5 className="">No Market Wahala:</h5>
              <p>
                You don’t have to worry about unclean meat and unsafe livestock
                or inflated prices.
              </p>
            </div>
            {/* 02 */}
            <div className="flex flex-col justify-start w-[345px] h-[296px] px-[24px] py-[38px] gap-[8px] items-center ws3-card">
              <Icon
                icon="carbon:sustainability"
                color="#5591EB"
                className="ws3-icon"
              />
              <h5>Farm-Sourced Only: </h5>
              <p>
                Every item comes directly from verified farms we partner with
              </p>
            </div>
            {/* 03 */}
            <div className="flex flex-col items-center justify-start w-[345px] h-[296px] px-[24px] py-[38px] gap-[18px] ws3-card">
              <Icon icon="lucide:focus" color="#C0764B" className="ws3-icon" />
              <h5>Hygienically Handled: </h5>
              <p>Animals are processed in clean, safe environments.</p>
            </div>
            {/* 04 */}
            <div className="flex flex-col items-center justify-start w-[345px] h-[296px] px-[24px] py-[38px] gap-[8px] ws3-card">
              <Icon
                icon="ri:edge-new-line"
                color="#EAEE22AA"
                className="ws3-icon"
              />
              <h5>Cold-Chain Delivery:</h5>
              <p>
                Your order arrives fresh, not frozen or spoiled. We make sure
                what you order is what you get — clean, safe, and ready for your
                pot.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center gap-[2px] sm:gap-[64px] website-s4 px-[16px] sm:px-[64px] pt-[120px] mt-[-120px]"
          id="services"
        >
          <div className="items-start sm:items-center">
            <h4 className="text-[#000000] font-medium text-[40px] text-left sm:text-center">
              How Ordering Works
            </h4>
            <p className=" text-[#145C3F] font-medium text-[20px]">
              No stories. No surprises. Just healthy, fresh and safe meat and
              livestock
            </p>
          </div>

          {/* section 4 div2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 sm:flex-row gap-[0px] sm:gap-[45px] w-full items-start">
            <div className="flex flex-col items-start sm:items-center px=12 py-4 gap-[2px] sm:gap-[20px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 3h16a1 1 0 011 1v4H3V4a1 1 0 011-1zM3 9h18v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9zm5 4h2v2H8v-2z" />
                </svg>
              </div>
              <h4 className="text-black  font-medium text-[24px] leading-normal text-left sm:text-center">
                Choose Your Pack
              </h4>
              <p className="text-[#4D4D4D] leading-normal font-medium text-[18px] text-left sm:text-center">
                Browse available livestock cuts or combo bundles.
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-center  px=12 py-4 gap-[2px] sm:gap-[20px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                </svg>
              </div>
              <h4 className="text-black  font-medium text-[24px] leading-normal text-left sm:text-center">
                Place Your Order:
              </h4>
              <p className="text-[#4D4D4D] leading-normal font-medium text-[18px] text-left sm:text-center">
                Fill the order form or chat with our team via WhatsApp.
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-center px=12 py-4 gap-[2px] sm:gap-[20px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 17h1a3 3 0 006 0h4a3 3 0 006 0h1v-5a2 2 0 00-2-2h-2V6a1 1 0 00-1-1H3v12zm13-5h3a1 1 0 011 1v2h-4v-3z" />
                </svg>
              </div>
              <h4 className="text-black  font-medium text-[24px] leading-normal text-left sm:text-center">
                Receive Your Delivery
              </h4>
              <p className="text-[#4D4D4D] leading-normal font-medium text-[18px] text-left sm:text-center">
                We deliver clean, fresh meat to your home or store — fast and
                cold.
              </p>
            </div>

            {/* <div className="flex flex-col items-start sm:items-center w-[375px] px=12 py-4 gap-[2px] sm:gap-[20px]">
              <div>
                <img src={WebsiteS4Icon4} alt="" />
              </div>
              <h4 className="text-black  font-medium text-[24px] leading-normal text-left sm:text-center">
                Farming Resources
              </h4>
              <p className="text-[#4D4D4D] leading-normal font-medium text-[18px] text-left sm:text-center">
                Our online farmers market software connects farmers with
                potential customers, thereby reducing promotional expenses and
                increasing revenue.
              </p>
            </div> */}
          </div>
          <div>
            <h4 className=" leading-normal text-[#145C3F] font-medium text-left sm:text-center text-[30px] sm:text-[50px] mb-64 sm:mb0">
              "Empower Your Livestock Sales with our Ongoing <br /> Growth –
              Your Business Prospers as Expertise Expands."
            </h4>
          </div>
        </div>
        {/* End of section 4 Services */}
        {/* Start of section 5 */}
        <div className="flex justify-center items-center mt-[-220px] sm:mt-[-280px] ">
          <div className="website-s5 flex justify-center item-center w-[392px] sm:w-[1335px] h-[293px] sm:h-[293px]">
            <div className="flex items-center justify-center flex-col">
              <div>
                <h4 className="text-white">Join Our Waitlist.</h4>
                <p className="text-white w-full sm:w-[500px]">
                  Join our waitlist today and be the first to revolutionize your
                  livestock business with our innovative platform!
                </p>
              </div>
              <button
                className="flex flex-row items-center justify-center p-4 gap-4 bg-white hover:bg-[#f9f9f9] wn-btn text-black"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Get Early Access
                <Icon icon="ic:round-arrow-back-ios" color="black" rotate={2} />
              </button>
            </div>
          </div>
        </div>
        <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800">Who We Serve</h2>
            <p class="mt-2 text-gray-600">
              Our solutions cater to everyone in the meat supply chain.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div class="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 mx-auto">
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a4 4 0 00-4-4h-1M7 20H2v-2a4 4 0 014-4h1m10-6a4 4 0 11-8 0 4 4 0 018 0zm-10 0a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">
                Families
              </h3>
              <p class="text-gray-600 text-center">
                Feed your loved ones with quality meat you can trust.
              </p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div class="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">
                Busy Individuals
              </h3>
              <p class="text-gray-600 text-center">
                Don’t have time to visit the market? We bring the protein to
                your door.
              </p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div class="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 mx-auto">
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM3 5h13v11H3zM16 13h3.586a1 1 0 00.707-.293l1.414-1.414A1 1 0 0021 10.586V10a1 1 0 00-1-1h-4v4z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">
                Vendors & Caterers
              </h3>
              <p class="text-gray-600 text-center">
                Whether you're a supermarket, caterer or reseller, we’ve got you
                covered with consistent supply and quality assurance.
              </p>
            </div>
          </div>
        </section>
        {/* End of section 5 */}
        {/* Start of section 6 FAQ */}
        <div
          className="px-4 sm:px-32 flex flex-col gap-[24px] sm:gap-[64px] pt-[120px] mt-[-120px]"
          id="faqs"
        >
          <div className="flex flex-col items-start sm:items-center">
            <h4 className="text-[40px] font-medium leading-normal text-black">
              FAQ
            </h4>
            <h5 className="text-[#145C3F] text-[20px] font-medium leading-normal ">
              Frequently Asked Questions
            </h5>
          </div>

          <div className="flex flex-col sm:mx-auto sm:flex-row gap-[64px] sm:gap-[64px] sm:justify-center w-full">
            <div className="flex flex-col items-start gap-[24px] justify-start">
              {/* 01 */}
              <div className="w-full">
                <button
                  className="flex flex-row justify-between items-center w-full sm:w-[705px] py-[16px] pr-[32px] text-[#4D4D4D] leading-normal font-medium text-[20px] website-s6-dropdown text-left"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  What is Agripeller ?
                  <Icon
                    icon="ic:round-arrow-back-ios"
                    color="black"
                    rotate={isOpen ? 1 : 3}
                  />
                </button>

                {/* modal */}
                {isOpen && (
                  <div className="w-full sm:w-[705px] py-[16px] pr-[32px]">
                    <p className="text-left text-[#4D4D4D] font-normal leading-normal text-[16px]">
                      Agripeller is a cutting-edge platform in the Canadian
                      livestock industry. It is a digital marketplace for
                      livestock farmers and buyers.
                    </p>
                  </div>
                )}
              </div>
              {/* 02 */}
              <div className="w-full">
                <button
                  className="flex flex-row justify-between items-center w-full sm:w-[705px] py-[16px] pr-[32px] text-[#4D4D4D] leading-normal font-medium text-[20px] website-s6-dropdown"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setIsOpen1(!isOpen1)}
                >
                  Why should I use Agripeller ?
                  <Icon
                    icon="ic:round-arrow-back-ios"
                    color="black"
                    rotate={isOpen1 ? 1 : 3}
                  />
                </button>

                {/* modal */}
                {isOpen1 && (
                  <div className="w-full sm:w-[705px] py-[16px] pr-[32px]">
                    <p className="text-left text-[#4D4D4D] font-normal leading-normal text-[16px]">
                      You should use Agripeller if you want to automate the
                      livestock buying and selling process. You get to save time
                      and money and have your livestock delivered to your
                      doorstep in no time.
                    </p>
                  </div>
                )}
              </div>

              {/* 03 */}
              <div className="w-full">
                <button
                  className="flex flex-row justify-between items-center w-full sm:w-[705px] py-[16px] pr-[32px] text-[#4D4D4D] leading-normal font-medium text-[20px] website-s6-dropdown text-left"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setIsOpen2(!isOpen2)}
                >
                  How does the Agripeller platform work ?
                  <Icon
                    icon="ic:round-arrow-back-ios"
                    color="black"
                    rotate={isOpen2 ? 1 : 3}
                  />
                </button>

                {/* modal */}
                {isOpen2 && (
                  <div className="w-full sm:w-[705px] py-[16px] pr-[32px]">
                    <p className="text-left text-[#4D4D4D] font-normal leading-normal text-[16px]">
                      Farmers create a profile and an online stall on the
                      website to showcase the variety of livestock they have
                      available for sale. Once you've created an account, you
                      can start using the platform to connect with buyers,
                      manage inventory, track your shipment, and more.
                    </p>
                  </div>
                )}
              </div>

              {/* 04 */}
              <div className="w-full">
                <button
                  className="flex flex-row justify-between items-center w-full sm:w-[705px] py-[16px] pr-[32px] text-[#4D4D4D] leading-normal font-medium text-[20px] website-s6-dropdown text-left"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setIsOpen3(!isOpen3)}
                >
                  Is the platform secure ?
                  <Icon
                    icon="ic:round-arrow-back-ios"
                    color="black"
                    rotate={isOpen3 ? 1 : 3}
                  />
                </button>

                {/* modal */}
                {isOpen3 && (
                  <div className="w-full sm:w-[705px] py-[16px] pr-[32px]">
                    <p className="text-left text-[#4D4D4D] font-normal leading-normal text-[16px]">
                      Yes, the platform is secure. We use a variety of security
                      measures to protect the data of our users.
                    </p>
                  </div>
                )}
              </div>

              {/* 05 */}

              <div className="w-full">
                <button
                  className="flex flex-row justify-between items-center w-full sm:w-[705px] py-[16px] pr-[32px] text-[#4D4D4D] leading-normal font-medium text-[20px] website-s6-dropdown text-left"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setIsOpen4(!isOpen4)}
                >
                  How do I signup as a farmer ?
                  <Icon
                    icon="ic:round-arrow-back-ios"
                    color="black"
                    rotate={isOpen4 ? 1 : 3}
                  />
                </button>

                {/* modal */}
                {isOpen4 && (
                  <div className="w-full sm:w-[705px] py-[16px] pr-[32px]">
                    <p className="text-left text-[#4D4D4D] font-normal leading-normal text-[16px]">
                      To get started, simply join the waitlist.
                    </p>
                  </div>
                )}
              </div>

              {/* 06 */}
              <div className="w-full">
                <button
                  className="flex flex-row justify-between items-center w-full sm:w-[705px] py-[16px] pr-[32px] text-[#4D4D4D] leading-normal font-medium text-[20px] website-s6-dropdown text-left"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setIsOpen5(!isOpen5)}
                >
                  Do I need to pay to join the waitlist ?
                  <Icon
                    icon="ic:round-arrow-back-ios"
                    color="black"
                    rotate={isOpen5 ? 1 : 3}
                  />
                </button>

                {/* modal */}
                {isOpen5 && (
                  <div className="w-full sm:w-[705px] py-[16px] pr-[32px]">
                    <p className="text-left text-[#4D4D4D] font-normal leading-normal text-[16px]">
                      No, it's free to join the waitlist. You do not have to pay
                      any fee.
                    </p>
                  </div>
                )}
              </div>

              {/* 07 */}
              <div className="w-full">
                <button
                  className="flex flex-row justify-between items-center w-full sm:w-[705px] py-[16px] pr-[32px] text-[#4D4D4D] leading-normal font-medium text-[20px] website-s6-dropdown text-left"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setIsOpen6(!isOpen6)}
                >
                  Can I order from anywhere in Canada ?
                  <Icon
                    icon="ic:round-arrow-back-ios"
                    color="black"
                    rotate={isOpen6 ? 1 : 3}
                  />
                </button>

                {/* modal */}
                {isOpen6 && (
                  <div className="w-full sm:w-[705px] py-[16px] pr-[32px]">
                    <p className="text-left text-[#4D4D4D] font-normal leading-normal text-[16px]">
                      No, we're currently only operating within Ontario, Quebec,
                      British Columbia and Alberta. We're working on expansion
                      very soon, so keep your fingers crossed.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-[16px] w-fit ">
              <div>
                <h5 className="text-left text-[30px] sm:text-[32px] text-[#145C3F] font-medium leading-normal">
                  Ask a different question
                </h5>
              </div>
              <form
                action=""
                className="flex flex-col items-start website-form-faq w-full sm:w-[538px]"
              >
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor=""
                    className="text-[#4d4d4d] font-medium text-[20px] leading-normal"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="enter your name"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor=""
                    className="text-[#4d4d4d] font-medium text-[20px] leading-normal"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="example@mail.com"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor=""
                    className="text-[#4d4d4d] font-medium text-[20px] leading-normal"
                  >
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="h-[200px] w-full"
                  ></textarea>
                </div>

                <div className=" w-full flex justify-end">
                  <button
                    className="text-white bg-[#006838] hover:bg-[#145C3F] py-3 px-16"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* <div>
                <img src={WebsiteS6FormImg} alt="" />
              </div> */}
            </div>
          </div>
        </div>
        {/* End of section 6 FAQ */}
        {/* section 7 Value Proposition*/}
        {/* <div className="p-[16px] sm:px-16 flex  flex-col sm:flex-row gap-[48px] sm:gap-[32px] items-start">
          <div className="flex flex-col gap-[32px] sm:gap-[48px] w-full">
            <div className="flex flex-col-reverse sm:flex-col  gap-[8px] sm:gap-[40px]">
           
              <div className="flex flex-col gap-[16px] sm:gap-[48px] website-s7-div2 items-start bg-[#00683826] px-[46px] py-[64px]">
                <h4>Farmers Value Proposition</h4>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="grommet-icons:connect"
                    color="#48A928"
                    width="48"
                    height="48"
                    className="website-s7-div2-icon w-[24px] sm:w-[48px] h-[24px] sm:h-[24px]"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Connect with a wide range of prospective buyers
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="material-symbols:folder-managed-outline"
                    color="#48A928"
                    className="website-s7-div2-icon w-[24px] sm:w-[48px] h-[24px] sm:h-[24px]"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Manage your inventory more effectively
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="material-symbols:my-location"
                    color="#48A928"
                    className="website-s7-div2-icon w-[24px] sm:w-[48px] h-[24px] sm:h-[24px]"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Track your shipment, from farm to buyer
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="academicons:open-access"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Get access to market information and trends.
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="grommet-icons:navigate"
                    color="#48A928"
                    className="website-s7-div2-icon w-[24px] sm:w-[48px] h-[24px] sm:h-[24px]"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Easily navigated website
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="ic:baseline-support-agent"
                    color="#48A928"
                    className="website-s7-div2-icon w-[32px] sm:w-[48px] h-[32px] sm:h-[48px]"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Exemplary customer support team.
                  </h6>
                </div>
              </div>
              <div className="flex flex-col items-start lg:mb-4">
                <img src={WebsiteS7Img1} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[8px] sm:gap-[32px] w-full">
            <div className="flex flex-col gap-[8px] sm:gap-[40px]">
              <div className="flex flex-col order-first items-start">
                <img src={WebsiteS7Img2} alt="" />
              </div>
              <div className="flex flex-col order-first sm:order-last gap-[16px] sm:gap-[48px] website-s7-div2 items-start px-[46px] py-[64px] bg-[#F25C0526]">
                <h4>User Value Proposition</h4>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="cil:find-in-page"
                    color="#F25C05"
                    width="48"
                    height="48"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Find fresh, high-quality meat at great prices
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="material-symbols:my-location"
                    color="#F25C05"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Fast, trackable delivery of your order
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="simple-icons:easyeda"
                    color="#F25C05"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Stress-free and easy shopping experience
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="grommet-icons:navigate"
                    color="#F25C05"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Easily Navigated Website
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="grommet-icons:secure"
                    color="#F25C05"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Quick, secure, and convenient online payments
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="ic:baseline-support-agent"
                    color="#F25C05"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[18px] sm:text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Exemplary customer support team.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* end of section 7 */}
        {/* start section 8 */}
        <div className="flex items-center justify-center px-4 sm:px-[128px] website-s9 mb-8 sm:mb-24">
          <div className="website-s9-div px-[16px]  sm:px-[101px] pt-[54px] pb-[90px] w-full sm:w-[1000px]">
            <div className="sm:w-[570px] flex flex-col gap-[19px] w-full">
              <h3 className="text-white text-[40px] font-medium">
                News Letter
              </h3>
              <h6 className="text-white text-[20px] font-normal w-full">
                Join our vibrant community of users and be a part of the future
                of livestock farming today!
              </h6>
            </div>
            <div className="w-full">
              <form
                action=""
                className="w-full flex flex-col sm:flex-row items-end sm:items-center"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full website-newsletter-input"
                  placeholder="enter your email"
                />
                <button
                  type="submit"
                  className="w-[167px] website-newsletter-btn text-[20px] font-medium text-black leadinf-normal"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* end section 8 */}
      </div>
      <Webfooter />
    </div>
  );
}

export default Website;
