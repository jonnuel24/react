import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../asset/styles/delivery2.css";
import "../asset/styles/payment.css";
import { Icon } from "@iconify/react";

function Payment() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-[128px]">
        <div className="">
          <div className="delivery-div1 mb-[48px]">
            <div className="delivery-button-active">
              <button>Delivery</button>
            </div>
            <div className="delivery-button-active">
              <button>Payment</button>
            </div>
            <div className="delivery-button">
              <button>Summary</button>
            </div>
          </div>

          <div className="flex flex-row delivery2-div gap-[48px]">
            <div className="flex flex-col w-[30%] items-start gap-[32px]">
              <label htmlFor="" className="text-[30px] font-medium">Select Payment Method</label>
              <div className="w-[100%] bg-[#EEEEEE] p-[24px] payment-method flex flex-col gap-[8px]">
                <div className="pm-option">
                  <div className="text-white flex flex-row items-center">
                    <Icon
                      icon="mingcute:phone-line"
                      color="white"
                      width="32"
                      rotate={2}
                      hFlip={true}
                      vFlip={true}
                    />
                    Bank Transfer
                  </div>
                  <input type="radio" />
                </div>
                <div className="pm-option">
                  <div className="text-white flex flex-row items-center">
                    <Icon
                      icon="mingcute:phone-line"
                      color="white"
                      width="32"
                      rotate={2}
                      hFlip={true}
                      vFlip={true}
                    />
                    Bank Transfer
                  </div>
                  <input type="radio" />
                </div>
                <div className="pm-option">
                  <div className="text-white flex flex-row items-center">
                    <Icon
                      icon="mingcute:phone-line"
                      color="white"
                      width="32"
                      rotate={2}
                      hFlip={true}
                      vFlip={true}
                    />
                    Bank Transfer
                  </div>
                  <input type="radio" />
                </div>
                <div className="pm-option">
                  <div className="text-white flex flex-row items-center">
                    <Icon
                      icon="mingcute:phone-line"
                      color="white"
                      width="32"
                      rotate={2}
                      hFlip={true}
                      vFlip={true}
                    />
                    Bank Transfer
                  </div>
                  <input type="radio" />
                </div>
              </div>
            </div>
            <div className="w-[70%] h-[500px] bg-[#EEEEEE] flex items-center justify-center text-[30px] font-medium">3rd party api</div>
          </div>
        </div>

        <div className="delivery-div5">
          <button>Proceed to payment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
