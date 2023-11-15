/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import Webnav from "../Components/webnav";
import Webfooter from "../Components/webfooter";
import HeroImg1 from "../asset/images/website_hero_img1.svg";
import HeroImg2 from "../asset/images/website_hero_img2.png";
import HeroImg3 from "../asset/images/website_hero_img2.svg";
import HeroImg4 from "../asset/images/website_hero_img4.png";
import "../asset/styles/website.css";
import { Icon } from "@iconify/react";
// import Ws4Img from "../asset/images/website_s4.svg";
// import ProfileImg from "../asset/images/profile_img.png";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
// import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import S2ldimg from "../asset/images/s2-ld-img.svg";
import WebsiteS4Icon1 from "../asset/images/website-s4-icon1.svg";
import WebsiteS4Icon2 from "../asset/images/website-s4-icon2.svg";
import WebsiteS4Icon3 from "../asset/images/website-s4-icon3.svg";
import WebsiteS4Icon4 from "../asset/images/website-s4-icon4.svg";
// import WebsiteS6FormImg from "../asset/images/website-s6-form-img.svg";
import WebsiteS7Img1 from "../asset/images/website-s7-img1.svg";
import WebsiteS7Img2 from "../asset/images/website-s7-img2.svg";
import WebsiteS8Founder from "../asset/images/website-s8-founder.jpeg";
// const animatedComponents = makeAnimated();
// function Website() {
//   // const navigate = useNavigate();
//   const [selected, setSelected] = useState([]);
//   const options = [
//     { label: "Goat ", value: "goat" },
//     { label: "Fish", value: "fish" },
//     { label: "Pig", value: "pig" },
//     { label: "Cow", value: "cow" },
//     { label: "Chicken", value: "chicken" },
//     { label: "Sheep", value: "sheep" },
//     {label: "Snail", value: "snail"}
//   ];
//   const [post, setPost] = useState({
//     email: "",
//     fullName: "",
//     farmName: "",
//     location: "",
//     productCategory: "",
//     typesOfLivestock: [""],
//   });

//   const {
//     handleSubmit,
//     register,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const handleInput = (event) => {

//       setPost({ ...post, [event.target.name]: event.target.value });
//     // }
//   };

//   const handleWaitingList = async () => {
//     try {
//       setPost({...post, typesOfLivestock: selected.map(e=>e.value)})
//       // console.log(post)
//       // return;
//       const result = await accountServices.waitingList(post);
//       setPost({
//         email: "",
//         fullName: "",
//         farmName: "",
//         location: "",
//         productCategory: "",
//         typesOfLivestock: [""],
//       })
//       setSelected([])
//       alert("You have successfully joined the waitlist");
//       return;;
//     } catch (e) {
//       alert(e.message);
//     }
//   };

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
      console.log(result);

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
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <div className="h-full website w-full overflow-x-hidden">
      <Webnav />
      <div className="py-0 sm:py-16  pb-32 h-fit  flex flex-col gap-8 sm:gap-24 website-body">
        {/* hero-section */}
        <div className="flex flex-col py-12 lg:flex-row justify-between website-hero px-[16px] lg:px-[64px]">
          {/* hero-left-div */}
          <div className="flex flex-col items-start w-full  gap-4 sm:gap-8 website-hld">
            <h6 className="text-[12px] sm:text-[16px]">
              Creating Farming Solutions, One Byte at a Time
            </h6>
            <h2 className="text-left w-fit text-[32px] sm:text-[64px] ">
              <span className="text-[#145C3F] text-[32px] sm:text-[64px]">
                AGRIPELLER -
              </span>
              <br />
              Agric E-commerce & Farm Management Software
            </h2>
            <h4 className="text-left text-[20px] sm:text-[30px] w-full">
              Gain access to a wholesome suite of livestock management,
              e-commerce and B2B solutions—specifically designed for the
              agricultural industry.
            </h4>
            <button
              className="text-white bg-[#006838] hover:bg-[#145C3F] py-3 px-16 w-full md:w-fit mb-[24px] md:mb-[24px] sm:mb-[0]"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Get Early Access
            </button>
          </div>

          {/* hero-right-div */}
          <div className="flex flex-row sm:flex-col  gap-4 sm:gap-8 justify-center w-full ">
            <div className="flex flex-col gap-8">
              <div className="heroImg1 w-[185px] sm:w-[301.995px] h-[209px] sm:h-[340.126px]">
                <img src={HeroImg1} alt="" className="w-full" />
              </div>
              <div className="heroImg2 w-[185px] sm:w-[312.394px] h-[140px] sm:h-[236.662px]">
                <img src={HeroImg2} alt="" className="w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-8 heroimgRight mt-0 sm:mt-[-44px]">
              <div className="heroImg2 w-[185px] sm:w-[312.394px] h-[140px] sm:h-[236.662px]">
                <img
                  src={HeroImg3}
                  classN
                  className="w-full"
                  ame="w-full"
                  alt=""
                />
              </div>
              <div className="heroImg1 w-[185px] sm:w-[301.995px] h-[209px] sm:h-[340.126px]">
                <img src={HeroImg4} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>

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
                      <option value="ogun">Ogun</option>
                      <option value="ibadan">Ibadan</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
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

        {/* section 2 */}
        <div
          className="flex flex-col md:flex-row px-[16px] sm:px-[64px] w-full items-center sm:items-start gap-[132px] sm:gap-[64px}] "
          id="websiteAbout"
        >
          {/* section2-left-div*/}
          <div className="w-full  flex flex-col gap-32 sm:gap-64 items-center ">
            <div className="w-full sm:w-[440px] flex flex-col items-start sm:items-center">
              <h4 className="website-s2-about-h4 sm:text-left text-[32px] sm:text-[40px]">
                About Us
              </h4>
              <p className="website-s2-about-p text-left sm:text-center text-[16px] sm:text-[20px] w-full">
                “Empowering Livestock Industry with <br /> Transparency,
                Sustainability, and Innovation”
              </p>
            </div>
            <div className="s4-bg1 w-[397px] sm:w-[505px] h-[397px] sm:h-[505px] grid justify-center content-center">
              <div className="s4-bg2 w-[340px] sm:w-[433px] h-[340px] sm:h-[433px] grid justify-center content-center">
                <div className="s4-bg3 w-[300px] sm:w-[363px] h-[300px] sm:h-[363px] grid justify-center content-center px-[16px]">
                  <img src={S2ldimg} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* section2-right-div*/}

          <div className="flex flex-col gap-8 sm:gap-8 w-full items-center">
            <div className="flex flex-row section2-card p-4 ">
              <div className="h-auto">
                <Icon
                  icon="mdi:eye-outline"
                  color="black"
                  width="24"
                  height="24"
                  className="website-s2-card-icon mt-0 sm:mt-2 mr-0 sm:mr-4"
                />
              </div>
              <div className="flex flex-col items-start gap-2 s4-c-text ">
                <h2 className="text-[20px] sm:text-[40px]">Vision</h2>
                <h5 className="text-left text-[16px] sm:text-[20px]">
                  We are dedicated to streamlining the day-to-day farmer tasks
                  and connecting buyers with quality farm produce through our
                  one-stop-shop  e-commerce and livestock record keeping
                  software.
                </h5>
              </div>
            </div>
            <div className="flex flex-row section2-card p-4">
              <div className="w-[48px] h-auto">
                <Icon
                  icon="tabler:target"
                  color="black"
                  width="26"
                  height="26"
                  className="website-s2-card-icon mt-0 sm:mt-2 mr-0 sm:mr-4"
                />
              </div>
              <div className="flex flex-col items-start gap-2 s4-c-text">
                <h2 className="text-[20px] sm:text-[40px]">Mission</h2>
                <h5 className="text-left text-[20px]">
                  Our mission is to make the livestock industry more efficient,
                  sustainable, and transparent. To help livestock farmers
                  connect with buyers, manage their inventory, and track their
                  shipments. We aim to help business owners and end users
                  procure fresh, healthy, high-quality livestock..
                </h5>
              </div>
            </div>
            <div className="flex flex-row section2-card p-4">
              <div className="flex  w-[48px] h-auto">
                <Icon
                  icon="ri:coreos-line"
                  color="black"
                  width="24"
                  height="24"
                  className="website-s2-card-icon mt-0 sm:mt-2 mr-0 sm:mr-4"
                />
              </div>
              <div className="flex flex-col items-start gap-2 s4-c-text">
                <h2 className="text-[20px] sm:text-[40px]">Core Values</h2>
                <div>
                  <div>
                    <h6 className="text-left font-[Clash Display] text-[#4D4D4D] font-medium text-[20px] leading-normal">
                      -Transparency
                    </h6>
                    <p className="text-left text-[#4D4D4D] font-normal text-[20px] leading-normal">
                      We’re committed to making the livestock retail process a
                      transparent one.
                    </p>
                  </div>
                  <div>
                    <h6 className="text-left font-[Clash Display] text-[#4D4D4D] font-medium text-[20px] leading-normal">
                      -Sustainability
                    </h6>
                    <p className="text-left text-[#4D4D4D] font-normal text-[20px] leading-normal">
                       We strongly believe in promoting sustainable practices in
                      the livestock industry.
                    </p>
                  </div>
                  <div>
                    <h6 className="text-left font-[Clash Display] text-[#4D4D4D] font-medium text-[20px] leading-normal">
                      -Quality
                    </h6>
                    <p className="text-left text-[#4D4D4D] font-normal text-[20px] leading-normal">
                      We are dedicated to providing businesses and end users the
                      highest quality of livestock.
                    </p>
                  </div>
                  <div>
                    <h6 className="text-left font-[Clash Display] text-[#4D4D4D] font-medium text-[20px] leading-normal">
                      -Innovation
                    </h6>
                    <p className="text-left text-[#4D4D4D] font-normal text-[20px] leading-normal">
                      We are constantly looking for ways to improve the
                      livestock sector in Nigeria through technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end of section 2 */}

        {/* section 3 */}
        <div className="website-s3 py-8 px-[0px] sm:px-16 flex flex-col items-center gap-12 h-fit rounded-none ">
          <div className="hidden sm:block s3-img"></div>
          <div className="sm:hidden block s3-img-sm rounded-none"></div>
        </div>
        {/* end of section 3 */}

        {/* section 4 */}
        <div className="flex flex-col items-center gap-[2px] sm:gap-[64px] website-s4 px-[16px] sm:px-[64px]">
          <div className="items-start sm:items-center">
            <h4 className="text-[#000000] font-medium text-[40px] text-left sm:text-center">
              Services
            </h4>
            <p className=" text-[#145C3F] font-medium text-[20px]">
              How Agripeller Makes Your Life Easier
            </p>
          </div>

          {/* section 4 div2 */}
          <div className="flex flex-col sm:flex-row gap-[0px] sm:gap-[45px] w-full items-start">
            <div className="flex flex-col items-start sm:items-center w-[375px] px=12 py-4 gap-[2px] sm:gap-[20px]">
              <div>
                <img src={WebsiteS4Icon1} alt="" />
              </div>
              <h4 className="text-black  font-medium text-[24px] leading-normal text-left sm:text-center">
                Livestock Inventory <br /> Management
              </h4>
              <p className="text-[#4D4D4D] leading-normal font-medium text-[18px] text-left sm:text-center">
                At Agripeller, we help farmers manage their inventory more
                effectively with our software management system
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-center w-[375px] px=12 py-4 gap-[2px] sm:gap-[20px]">
              <div>
                <img src={WebsiteS4Icon2} alt="" />
              </div>
              <h4 className="text-black  font-medium text-[24px] leading-normal text-left sm:text-center">
                Shipment Tracking
              </h4>
              <p className="text-[#4D4D4D] leading-normal font-medium text-[18px] text-left sm:text-center">
                We help farmers and buyers with shipment tracking to ensure that
                products are delivered on time and in optimal condition.
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-center w-[375px] px=12 py-4 gap-[2px] sm:gap-[20px]">
              <div>
                <img src={WebsiteS4Icon3} alt="" />
              </div>
              <h4 className="text-black  font-medium text-[24px] leading-normal text-left sm:text-center">
                E-commerce for Farmers & Livestock lovers
              </h4>
              <p className="text-[#4D4D4D] leading-normal font-medium text-[18px] text-left sm:text-center">
                Our online farmers market software connects farmers with
                potential customers, thereby reducing promotional expenses and
                increasing revenue.
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-center w-[375px] px=12 py-4 gap-[2px] sm:gap-[20px]">
              <div>
                <img src={WebsiteS4Icon4} alt="" />
              </div>
              <h4 className="text-black  font-medium text-[24px] leading-normal text-left sm:text-center">
                Farming Reources
              </h4>
              <p className="text-[#4D4D4D] leading-normal font-medium text-[18px] text-left sm:text-center">
                Our online farmers market software connects farmers with
                potential customers, thereby reducing promotional expenses and
                increasing revenue.
              </p>
            </div>
          </div>
          <div>
            <h4 className=" leading-normal text-[#145C3F] font-medium text-left sm:text-center text-[30px] sm:text-[50px] mb-64 sm:mb0">
              "Empower Your Livestock Sales with our Ongoing <br /> Growth –
              Your Business Prospers as Expertise Expands."
            </h4>
          </div>
        </div>

        {/* section 5 */}

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

        {/* section 6 */}

        <div className="px-4 sm:px-32 flex flex-col gap-[24px] sm:gap-[64px]">
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
                      Agripeller is a cutting-edge platform in the Nigerian
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
                      available for sale. Once you’ve created an account, you
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
                  Can I order from anywhere in Nigeria ?
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
                      No, we’re currently only operating within Lagos, Ogun,
                      Ibadan and Abuja. We’re working on expansion very soon, so
                      keep your fingers crossed.
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

        {/* section 7 */}

        <div className="website-s7 py-24 px-32 gap-[24px] hidden lg:flex flex-col items-center ">
          <h6 className="w-[1143px] font-medium leading-normal text-[40px] text-white">
            Agripeller Overview
          </h6>
          <div className="flex flex-col gap-32 items-start">
            <h3 className="w-[1143px] font-bold leading-normal text-[64px] text-white text-start">
              "NIGERIA’s TRUSTED  DIGITAL LIVESTOCK MARKETPLACE."
            </h3>

            <p className="w-[1130px] font-normal leading-[60px] text-left text-[32px] text-white">
              Agripeller is a digital marketplace that helps automate and
              simplify the retailing process of livestock. We are the first
              innovative, user-friendly web app that helps farmers to double
              their sales and reduce cost while connecting with thousands of
              buyers who get quality livestock in return. 
              <br />
              <br /> Our team of experts are dedicated to revolutionizing the
              Nigerian livestock sector with data analytics. By closely
              monitoring livestock production, consumption, and market trends,
              we aim to generate comprehensive data that can empower farmers,
              buyers, and policymakers with valuable insights. 
              <br />
              <br /> With our online farmers market tool, we're confident that
              we can build a thriving tech solution for agriculture in Nigeria.
              We're thrilled at the potential of our platform to make a positive
              impact on the agricultural industry in Nigeria and look forward to
              working with stakeholders to drive this ambitious goal forward.
            </p>
          </div>
        </div>

        {/* mobile */}
        <div className="lg:hidden  website-s7-mobile py-[32px] px-[16px] gap-[8px] flex flex-col items-start ">
          <h6 className="font-medium leading-normal text-[32px] text-white">
            Agripeller Overview
          </h6>
          <div className="flex flex-col gap-4 items-start w-full">
            <h3 className="w-full font-normal leading-normal text-[18px] text-white text-left">
              "NIGERIA’s TRUSTED  DIGITAL LIVESTOCK MARKETPLACE."
            </h3>

            <p className="w-full font-normal leading-normal text-left text-[16px] text-white">
              Agripeller is a digital marketplace that helps automate and
              simplify the retailing process of livestock. We are the first
              innovative, user-friendly web app that helps farmers to double
              their sales and reduce cost while connecting with thousands of
              buyers who get quality livestock in return. 
              <br />
              <br /> Our team of experts are dedicated to revolutionizing the
              Nigerian livestock sector with data analytics. By closely
              monitoring livestock production, consumption, and market trends,
              we aim to generate comprehensive data that can empower farmers,
              buyers, and policymakers with valuable insights. 
              <br />
              <br /> With our online farmers market tool, we're confident that
              we can build a thriving tech solution for agriculture in Nigeria.
              We're thrilled at the potential of our platform to make a positive
              impact on the agricultural industry in Nigeria and look forward to
              working with stakeholders to drive this ambitious goal forward.
            </p>
          </div>
        </div>

        {/* end mobile */}

        {/* section 7 b */}
        <div className="p-[16px] sm:px-16 flex flex-col gap-[8px] sm:gap-[32px] items-center">
          <div className="flex flex-col gap-[16px] sm:gap-[48px] w-full">
            <h4 className="text-[#4d4d4d] text-[24px] sm:text-[40px] font-medium leading-normal sm:w-full text-left sm:text-center">
              Farmers Value Proposition
            </h4>
            <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[160px]">
              {/* =================== */}
              <div className="flex flex-col gap-[48px] website-s7-div2">
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="grommet-icons:connect"
                    color="#48A928"
                    width="48"
                    height="48"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Connect with a wide range of prospective buyers
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="material-symbols:folder-managed-outline"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Manage your inventory more effectively
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="material-symbols:my-location"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Track your shipment, from farm to buyer
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="academicons:open-access"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Get access to market information and trends.
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="grommet-icons:navigate"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Easily navigated website
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="ic:baseline-support-agent"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Exemplary customer support team.
                  </h6>
                </div>
              </div>
              {/* ======== */}
              <div className="flex flex-col items-start">
                <img src={WebsiteS7Img1} alt="" />
                <label
                  htmlFor=""
                  className="text-left text-[20px] sm:text-[32px] font-medium leading-normal text-[#4d4d4d] w-[512px]"
                >
                  Join our community of vibrant, like-minded farmers today
                </label>
              </div>
            </div>
          </div>
          {/* section 7 - div 3 */}

          <div className="flex flex-col gap-[48px] w-full">
            <h4 className="text-[#4d4d4d] text-[24px] sm:text-[40px] font-medium leading-normal sm:w-full text-left sm:text-center">
              Users Value Proposition
            </h4>
            <div className="flex flex-col sm:flex-row gap-[160px]">
              {/* ======== */}
              <div className="flex flex-col order-last sm:order-first items-start">
                <img src={WebsiteS7Img2} alt="" />
                <label
                  htmlFor=""
                  className="text-left text-[32px] font-medium leading-normal text-[#4d4d4d] w-[512px]"
                >
                  Join our community of vibrant, like-minded farmers today
                </label>
              </div>
              {/* =================== */}
              <div className="flex flex-col order-first sm:order-last gap-[48px] website-s7-div2">
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="cil:find-in-page"
                    color="#48A928"
                    width="48"
                    height="48"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Find fresh, high-quality meat at great prices
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="material-symbols:my-location"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Fast, trackable delivery of your order
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="simple-icons:easyeda"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Stress-free and easy shopping experience
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="grommet-icons:navigate"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Easily Navigated Website
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="grommet-icons:secure"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Quick, secure, and convenient online payments
                  </h6>
                </div>
                <div className="flex flex-row justify-start items-center gap-[16px]">
                  <Icon
                    icon="ic:baseline-support-agent"
                    color="#48A928"
                    className="website-s7-div2-icon"
                  />
                  <h6 className="text-[24px] font-normal text-[#4d4d4d] leading-normal text-left">
                    Exemplary customer support team.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end of section 7 */}

        {/* start section 8 */}
        <div className="website-s8-bg flex flex-col gap-24 items-center py-24 px- first-letter:48">
          <h3 className="text-[40px] text-white font-medium leading-normal">
            About Our Founder
          </h3>
          <div className="flex flex-row items-center justify-between w-[1470px]">
            <div>
              <div className="website-s8-pic">
                <img src={WebsiteS8Founder} alt="" className="h-auto w-full" />
              </div>
              <div>
                <h4 className="font-semibold text-[32px] text-white leading-normal">
                  Founder
                </h4>
                <label
                  htmlFor=""
                  className="font-normal text-[24px] text-white leading-normal"
                >
                  Paul Anyaorha
                </label>
              </div>
            </div>
            <div>
              <h6 className="text-white text-[24px] font-normal italic leading-[64px] text-left w-[960px]">
                Paul Nnadalu is the CEO and founder of Agripeller. He is a
                passionate advocate for the livestock sector in Nigeria and is
                committed to using technology to improve the lives of farmers in
                Nigeria. Paul Nnadalu is a visionary leader with an in-depth
                understanding of the challenges and opportunities in the
                livestock sector in Nigeria. He is committed to improving the
                livestock industry, one technological solution at a time.{" "}
              </h6>
            </div>
          </div>
        </div>
        {/* end section 8 */}

        {/* start section 9 */}
        <div className="flex items-center justify-center website-s9">
          <div className="website-s9-div px-[101px] pt-[54px] pb-[90px]">
            <div className="w-[570px] flex flex-col gap-[19px]">
              <h3 className="text-white text-[40px] font-medium">
                News Letter
              </h3>
              <h6 className="text-white text-[20px] font-normal">
                Join our vibrant community of users and be a part of the future
                of livestock farming today!
              </h6>
            </div>
            <div className="w-full">
              <form action="">
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
        {/* end section 9 */}
      </div>
      <Webfooter />
    </div>
  );
}

export default Website;
