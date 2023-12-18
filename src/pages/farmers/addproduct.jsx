import React from "react";
import Fpanel from "./component/fpanel";
import { Icon } from "@iconify/react";
import FNavbar from "./component/farmersNavbar";
import "../../asset/styles/addproduct.css";

function Addproduct() {
  return (
    <div>
      <FNavbar />
      <div className="pl-[64px] flex flex-row">
        <Fpanel className="" />
        {/* divider */}
        <div className="fd-divider ml-4"></div>
        {/* diider end */}
        <div className="py-[64px] w-full h-full flex flex-col">
          {/* description start */}
          <div className="ap-description grid justify-start place-content-center px-[24px]">
            <h4 className="text-[20px] font-bold text-normal leading-normal">
              Add 5 Photos of your Livestock
            </h4>
          </div>
          {/* end description */}
          {/* add products */}
          <div className="p-[32px] flex flex-col items-end gap-2 ">
            {/* card */}

            <div className="addproductdiv w-full h-fit p-4 rounded-[10px] flex flex-row justify-around items-center">
              {/* 01 */}
              <div className="addproductcardbg flex flex-col justify-center items-center gap-2 rounded-[8px]">
                <button className="faddpbtn grid place-content-center items-center">
                  <Icon icon="ion:add-outline" color="#6ABD45" />
                </button>
                <label htmlFor="" className="text-white text-opacity-60">
                  Add an image
                </label>
              </div>
              {/* 02 */}
              <div className="addproductcardbg flex flex-col justify-center items-center gap-2 rounded-[8px]">
                <button className="faddpbtn grid place-content-center items-center">
                  <Icon icon="ion:add-outline" color="#6ABD45" />
                </button>
                <label htmlFor="" className="text-white text-opacity-60">
                  Add an image
                </label>
              </div>
              {/* 03 */}
              <div className="addproductcardbg flex flex-col justify-center items-center gap-2 rounded-[8px]">
                <button className="faddpbtn grid place-content-center items-center">
                  <Icon icon="ion:add-outline" color="#6ABD45" />
                </button>
                <label htmlFor="" className="text-white text-opacity-60">
                  Add an image
                </label>
              </div>
              {/* 04 */}
              <div className="addproductcardbg flex flex-col justify-center items-center gap-2 rounded-[8px]">
                <button className="faddpbtn grid place-content-center items-center">
                  <Icon icon="ion:add-outline" color="#6ABD45" />
                </button>
                <label htmlFor="" className="text-white text-opacity-60">
                  Add an image
                </label>
              </div>
              {/* 05 */}
              <div className="addproductcardbg flex flex-col justify-center items-center gap-2 rounded-[8px]">
                <button className="faddpbtn grid place-content-center items-center">
                  <Icon icon="ion:add-outline" color="#6ABD45" />
                </button>
                <label htmlFor="" className="text-white text-opacity-60">
                  Add an image
                </label>
              </div>
            </div>

            {/* end of card */}
            <button className="w-[170px] h-[50px] bg-[#6ABD45] text-white rounded-md">
              Upload
            </button>
          </div>
          {/* end of add products */}
          {/* add details */}

          <div className="p-[32px] w-full flex flex-col items-end gap-2 ">
            <div className="adddetailsbg p-12 w-full ">
              <form action="" className="flex flex-col gap-4 items-start">
                <div className="flex flex-row gap-[32px] w-full">
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Name of product</label>
                    <input
                      type="text"
                      className="w-[520px] h-[45px] add-details-input"
                      placeholder="Product name"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Category</label>
                    <select
                      name=""
                      id=""
                      className="w-[230px] h-[45px] add-details-input"
                    >
                      <option value="" selected select>
                        select a category
                      </option>
                      <option value="">Livestock</option>
                      <option value="">Poultry</option>
                      <option value="">Cattle</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-row gap-[32px] w-full">
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Age</label>
                    <input
                      type="text"
                      className="w-[120px] h-[45px] add-details-input"
                      placeholder="Product name"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Gender</label>
                    <select
                      name=""
                      id=""
                      className="w-[170px] h-[45px] add-details-input"
                    >
                      <option value="" selected select>
                        select a preferred gender
                      </option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Others</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Price</label>
                    <input
                      type="text"
                      className="w-[120px] h-[45px] add-details-input"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Weight (kg)</label>
                    <input
                      type="text"
                      className="w-[120px] h-[45px] add-details-input"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Quantity</label>
                    <select
                      name=""
                      id=""
                      className="w-[130px] h-[45px] add-details-input"
                    >
                      <option value="" selected select></option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="" className="text-left">
                    Product Description
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="80"
                    rows="10"
                    className="add-details-input"
                  ></textarea>
                </div>
              </form>
            </div>
            <button className="w-[170px] h-[50px] bg-black text-white rounded-md">
              Save Details
            </button>
          </div>
          {/* end of add details */}
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
