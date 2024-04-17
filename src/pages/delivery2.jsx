import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../asset/styles/delivery2.css";
import { Icon } from "@iconify/react";
import gig from "../asset/images/gex.svg";
import gex from "../asset/images/gig.svg";
import axd from "../asset/images/axd_logo.svg";
import { Link } from "react-router-dom";

function delivery2() {
  return (
    <div>
      <Navbar />
      <div>
        {/* <div className="delivery-div1">
          <div className="delivery-button-active">
            <button>Delivery</button>
          </div>
          <div className="delivery-button">
            <button>Payment</button>
          </div>
          <div className="delivery-button">
            <button>Summary</button>
          </div>
        </div> */}

        <div className="row delivery2-div">
          <div className="col col-7 delivery-div2">
            <div className="delivery-div2-label">Contact Details</div>
            <div className="delivery-div3">
              <div className="delivery-name">
                <h1>Gasgos Gbenga koiki</h1>
                <button>
                  <Icon
                    icon="clarity:edit-line"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
              <div className="delivery-address">
                <h4>
                  <Icon
                    icon="material-symbols:location-searching"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                  44 Commerical Avenue
                </h4>
                <button>
                  <Icon
                    icon="clarity:edit-line"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
              <div className="delivery-number">
                <h4>
                  <Icon
                    icon="mingcute:phone-line"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                  +234 816 813 4671
                </h4>
                <button>
                  <Icon
                    icon="clarity:edit-line"
                    color="white"
                    width="32"
                    rotate={2}
                    hFlip={true}
                    vFlip={true}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="col col-5 delivery-div2">
            <div className="delivery2-div2">Total Cost</div>
            <div className="delivery2-details">
              <div>
                <table>
                  <tr>
                    <th className="d2-summary text-[24px] font-normal text-white ">
                      Subtotal :{" "}
                    </th>
                    <td className="text-[24px] font-medium text-white">
                      N224,000
                    </td>
                  </tr>
                  <tr>
                    <th className="d2-summary text-[24px] font-normal text-white">
                      Shipping :{" "}
                    </th>
                    <td className="text-[24px] font-medium text-white">
                      N150,000
                    </td>
                  </tr>
                </table>
              </div>
              <div className="delivery2-total">N 374,000</div>
            </div>
          </div>
        </div>
        <div className="delivery-div04">
          <div className="delivery-div04-label">Logistics</div>
          <div className="delivery-div4">
            <div className="delivery-div40">
              <div className="delivery-div41">
                <input type="radio" />
                <h4>
                  <img src={axd} alt="" />
                  AXPD Logistics
                </h4>
              </div>
              <h2>N50,000</h2>
            </div>
            <div className="delivery-div40">
              <div className="delivery-div41">
                <input type="radio" />
                <h4>
                  <img src={gex} alt="" />
                  GEx Logistics
                </h4>
              </div>
              <h2>N50,000</h2>
            </div>
            <div className="delivery-div40">
              <div className="delivery-div41">
                <input type="radio" />
                <h4>
                  <img src={gig} alt="" />
                  GIG Logistics
                </h4>
              </div>
              <h2>N50,000</h2>
            </div>
          </div>
        </div>

        <div className="delivery-div5">
          <Link to="/OrderConfirmation">
            {" "}
            <button>Proceed to payment</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default delivery2;
