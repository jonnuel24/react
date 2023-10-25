import React from "react";
import Webnav from "../Components/webnav";
import Webfooter from "../Components/webfooter";
import HeroImg1 from "../asset/images/Farmers-at-Work-in-their-Various-Farms.png";
import HeroImg2 from "../asset/images/website_hero_img2.png";
import HeroImg3 from "../asset/images/website_hero_img3.png";
import HeroImg4 from "../asset/images/website_hero_img4.png";
import "../asset/styles/website.css";
import { Icon } from "@iconify/react";
import Ws4Img from "../asset/images/website_s4.svg";
import S5img1 from "../asset/images/s5-img1.png";
import S5img2 from "../asset/images/s5-img2.png";
import S5img3 from "../asset/images/s5-img3.png";
import S5img4 from "../asset/images/s5-img4.png";
import S5img5 from "../asset/images/s5-img5.png";
import S5img6 from "../asset/images/s5-img6.png";
import ProfileImg from "../asset/images/profile_img.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Website() {
  return (
    <div className="h-full website">
      <Webnav />
      <div className="py-16 pb-32 h-fit  website-body">
        {/* hero-section */}
        <div className="flex flex-col px-32 py-12 sm:flex-row website-hero">
          {/* hero-left-div */}
          <div className="flex flex-col items-start basis-1/2 gap-8 w-fit website-hld">
            <h2 className="text-left w-fit ">
              Boost your sales by presenting your farm's distinctive livestock
              to our extensive network of potential buyers.
            </h2>
            <button
              className="text-white bg-[#006838] hover:bg-[#145C3F] py-3 px-16"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Get Early Access
            </button>
            <h4 className="text-left">
              Your One-Stop Destination for Quality Livestock
            </h4>
          </div>

          {/* hero-right-div */}
          <div className="flex flex-row gap-8 basis-1/2">
            <div className="flex flex-col gap-8">
              <div className="heroImg1">
                <img src={HeroImg1} alt="" />
              </div>
              <div className="heroImg2">
                <img src={HeroImg2} alt="" />
              </div>
            </div>

            <div className="flex flex-col gap-8 heroimgRight">
              <div className="heroImg2">
                <img src={HeroImg3} alt="" />
              </div>
              <div className="heroImg1">
                <img src={HeroImg4} alt="" />
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
                    />
                  </div>
                  <div className="mb-3 text-left w-full">
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
                    >
                      <option value="">Select a location</option>
                      <option value="ogun">Ogun</option>
                      <option value="ibadan">Ibadan</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                    </select>
                  </div>

                  <div className="mb-3 text-left w-full">
                    <label htmlFor="Product Category" className="form-label">
                      Product Category
                    </label>
                    <select
                      className="form-control"
                      id="productCategory"
                      name="productCategory"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="ogun">Goat</option>
                      <option value="ibadan">Cattle</option>
                      <option value="lagos">Snail</option>
                      <option value="abuja">Pig</option>
                      <option value="abuja">Poultry</option>
                      <option value="abuja">Fish</option>
                    </select>
                  </div>

                  <div className="mb-3 text-left w-full">
                    <label htmlFor="Product Category" className="form-label">
                      Product Category
                    </label>
                    <select
                      className="form-control"
                      id="productCategory"
                      name="productCategory"
                      required
                    >
                      <option value="">Type of Livestock</option>
                      <option value="ogun">Goat</option>
                      <option value="ibadan">Cattle</option>
                      <option value="lagos">Snail</option>
                      <option value="abuja">Pig</option>
                      <option value="abuja">Poultry</option>
                      <option value="abuja">Fish</option>
                    </select>
                  </div>


                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-success">
                      Join Waitlist
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-col mt-12 gap-y-8 px-32 w-full text-left website-s2 mb-24">
          <h4 className="w-96 ">
            Your Reliable Companion for Livestock Care and Trade.
          </h4>
        </div>

        {/* section 3 */}
        <div className="website-s3 py-8 px-32 flex flex-col items-center gap-12 mb-24">
          <div className="s3-img"></div>
          <button className="flex flex-row items-center justify-center p-4 gap-4 hover:bg-[#145C3F] wn-btn">
            Get Early Access
            <Icon icon="ic:round-arrow-back-ios" rotate={2} />
          </button>
        </div>

        {/* section 4 */}
        <div className="flex flex-row px-32 w-full justify-center gap-56 ">
          <div className="flex flex-col gap-24">
            <div className="flex flex-row section4-card p-4">
              <Icon
                icon="cil:chart-line"
                color="black"
                width="24"
                height="24"
                className="section4-card-icon"
              />
              <div className="flex flex-col items-start gap-2 s4-c-text">
                <h2>Wide Range</h2>
                <h5 className="text-left">
                  Explore a diverse collection of livestock species to find the
                  perfect match for your needs. Choose from a variety of options
                  tailored to your preferences and goals.
                </h5>
              </div>
            </div>
            <div className="flex flex-row section4-card p-4">
              <Icon
                icon="teenyicons:heart-outline"
                color="black"
                width="32"
                height="32"
                className="section4-card-icon"
              />
              <div className="flex flex-col items-start gap-2 s4-c-text">
                <h2>Trusted Sellers</h2>
                <h5 className="text-left">
                  We partner with respected breeders and established farms,
                  ensuring the highest quality standards. Our collaborations
                  guarantee top-notch livestock offerings you can trust.
                </h5>
              </div>
            </div>
            <div className="flex flex-row section4-card p-4">
              <Icon
                icon="carbon:chart-relationship"
                color="black"
                width="48px "
                height="48px"
                rotate={0.5}
                className="section4-card-icon"
              />
              <div className="flex flex-col items-start gap-2 s4-c-text">
                <h2>Support</h2>
                <h5 className="text-left">
                  Our dedicated team is available to support you throughout your
                  journey. Count on us for assistance at every stage.
                </h5>
              </div>
            </div>
            <div className="flex flex-row section4-card p-4">
              <Icon
                icon="ph:chats"
                color="black"
                width="48px "
                height="48px"
                className="section4-card-icon"
              />
              <div className="flex flex-col items-start gap-2 s4-c-text">
                <h2>Knowledge</h2>
                <h5 className="text-left">
                  Visit our Knowledge Center for easy access to helpful
                  resources and practical care tips. Enhance your understanding
                  of livestock care and management effortlessly.
                </h5>
              </div>
            </div>
          </div>

          {/* section 4 Image */}
          <div>
            <div className="s4-bg1">
              <div className="s4-bg2">
                <div className="s4-bg3">
                  <img src={Ws4Img} alt="" />
                </div>
              </div>
            </div>
            <label htmlFor="" className="mt-8 s4-img-label">
              Coming Soon
            </label>
          </div>
        </div>

        {/* section 5 */}
        <div className="section-5 px-32 flex flex-row justify-center w-full px-56">
          <div className="s5-ld">
            <h2 className="text-left">
              "Empower Your Livestock Sales with our Ongoing Growth – Your
              Business Prospers as Expertise Expands."
            </h2>
          </div>
          <div className="s5-rd">
            <div className="s5-img1">
              <img src={S5img1} alt="" />
            </div>
            <div className="s5-img2">
              <img src={S5img2} alt="" />
            </div>
            <div className="s5-img3">
              <img src={S5img3} alt="" />
            </div>
            <div className="s5-img4">
              <img src={S5img4} alt="" />
            </div>
            <div className="s5-img5">
              <img src={S5img5} alt="" />
            </div>
            <div className="s5-img6">
              <img src={S5img6} alt="" />
            </div>
          </div>
        </div>

        {/* section 6 */}
        <div className="website-section6 flex flex-col p-32 items-center">
          <div className="ws6-body flex flex-col gap-8">
            <h1>"More ensuring livestock Sales; we're farmers at heart."</h1>
            <p>
              "Beyond Livestock – Our Commitment to Building Bright Futures, One
              Successful Sale at a Time. Each transaction with us is not just
              about livestock, but also about nurturing possibilities, fostering
              growth, and creating a foundation for sustainable success in the
              world of agriculture."
            </p>
            <div className="flex flex-row items-center s6-body-2 gap-12">
              <div className="s6-profile-img">
                <img src={ProfileImg} alt="" />
              </div>
              <div className="s6-profile-text text-left">
                <h4>Paul Daulu</h4>
                <h4>CEO Agripeller</h4>
                <div className="flex gap-4">
                  <Icon
                    icon="ri:linkedin-fill"
                    width={32}
                    height={32}
                    color="white"
                    className="s6-profile-icon"
                  />
                  <Icon
                    icon="lucide:twitter"
                    color="white"
                    width="32"
                    height="32"
                    className="s6-profile-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 7 */}
        <div className="website-section7">
          <div className="ws7-body">
            <h4 className="ws7-body-text">
              High-performing teams are not recruited, they are built through
              upskilling
            </h4>
            <button className="flex flex-row items-center justify-center text-white py-4 px-2 gap-4 bg-black wn-btn">
              Get Early Access
              <Icon icon="ic:round-arrow-back-ios" rotate={2} />
            </button>
          </div>
        </div>
      </div>
      <Webfooter />
    </div>
  );
}

export default Website;
