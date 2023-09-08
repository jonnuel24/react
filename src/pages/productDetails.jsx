import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Icon } from "@iconify/react";
import Card from "../Components/card";
import "../asset/styles/productDetails.css";
import Cattle from "../asset/images/cattle.svg";
import Prof from "../asset/images/Group 604.svg";

function productDetails() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="header1 ">
          Product <strong>Details</strong>
        </div>

        {/* left div */}

        <div className="body row">
          <div className="col left-div col-8">
            <div>
              <div className="product-img">
                <div className="new">New</div>
              </div>

              <div className="product-details">
                <ul className="flex gap-2 items-center justify-center">
                  <li>
                    <img src={Cattle} alt="" className="inactive" />
                  </li>
                  <li>
                    <img src={Cattle} alt="" className="inactive" />
                  </li>
                  <li>
                    <img src={Cattle} alt="" className="" />
                  </li>
                  <li>
                    <img src={Cattle} alt="" className="inactive" />
                  </li>
                  <li>
                    <img src={Cattle} alt="" className="inactive" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="body2">
              <h1>livestock Description</h1>
              <p>
                The Jamunapari Goat or Jamnapari is a breed of goat. They are
                basically originated from Indian subcontinent & have are
                basically a mixture of local goat called “PE” peranakan Etawa or
                Etawa mix. Apart from this they have been a great source for
                meat. The breed has good weight & mass & the breeds yield large
                quantity of milk. Further they can be used to give good meat.
                They are available at an affordable price point
              </p>
              <div className="body21">
                <div className="btable">
                  <table className="table">
                    <tr itemScope="row">
                      <td>breed</td>
                      <th>Patira</th>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <th>20kg plus</th>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <th>White</th>
                    </tr>
                    <tr>
                      <td>Lifespan</td>
                      <th>15 tot 18 years</th>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <th>Both</th>
                    </tr>
                  </table>
                </div>

                <div className="body22">
                  <h1>
                    N56,000 <small>/UNIT</small>
                  </h1>
                </div>
              </div>
            </div>

            <div className="body23">
              <div className="body230">
                <div className="body231">
                  <h3>CUSTOMER FEEDBACK</h3>
                  <div className="body236">
                    <h6>Ratings bar</h6>
                    <div className="body232">
                      <div className="body234">4.5/5</div>
                      <div className="body235"></div>
                    </div>
                  </div>
                </div>

                <div className="body24">
                  <img src={Prof} alt="" />
                  <div className="body241">
                    <header>
                      GASGOS <br />
                      FARMS
                    </header>
                    <div className=" body240">
                      <h4>Agripeller verified</h4>
                      <Icon
                        icon="codicon:verified-filled"
                        color="white"
                        className="verified"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="body25">
                <header>Comments</header>
                <div className="body250">
                  <div className="body251">
                    <div className="star">
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#D9D9D9"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#D9D9D9"
                      />
                    </div>
                    <h4>This is an interesting farmer </h4>
                    <label htmlFor="">
                      12/07/2023 by <strong>James</strong>
                    </label>
                  </div>
                  <div className="body251">
                    <div className="star">
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#D9D9D9"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#D9D9D9"
                      />
                    </div>
                    <h4>This is an interesting farmer </h4>
                    <label htmlFor="">
                      12/07/2023 by <strong>James</strong>
                    </label>
                  </div>
                  <div className="body251">
                    <div className="star">
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#EC5858"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#D9D9D9"
                      />
                      <Icon
                        className="star-icon"
                        icon="bi:star-fill"
                        color="#D9D9D9"
                      />
                    </div>
                    <h4>This is an interesting farmer </h4>
                    <label htmlFor="">
                      12/07/2023 by <strong>James</strong>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right-div...... */}

          <div className="col right-div0 col-4">
            <div className="right-div01">
              <div>
                <header>for sale</header>
                <p>
                  100 Pedigree Lleyn Breeding Gimmers, Shearlings 100 Pedigree
                  Lleyn Breeding Gimmers, Shearlings{" "}
                </p>
              </div>

              <div className="right-div1">
                <div>
                  <Icon icon="ci:tag" />
                  Listed 10 days ago
                </div>

                <div>
                  <Icon icon="formkit:people" />
                  2,045 VIEWS
                </div>

                <div>
                  <Icon icon="fluent-emoji-high-contrast:star" />
                  14 MONTHS old
                </div>
                <div>
                  <Icon icon="akar-icons:location" />
                  Ogun State
                </div>
              </div>

              <div className="right-div2">
                <button className="btn btn-danger btn-lg button-red">
                  ADD TO CART
                </button>
                <button className="btn btn-secondary btn-lg button-grey">
                  VIEW CART
                </button>
              </div>
              <div className="right-div3">
                <div>
                  <Icon icon="ri:share-line" />
                  SHARE
                </div>
                <div>
                  <Icon icon="tdesign:location-1" />
                  WATCH
                </div>
                <div>
                  <Icon icon="solar:chat-dots-linear" />
                  REPORT
                </div>
              </div>
            </div>

            <div className="right-div04">
              <div>
                <a href="" className="button1">
                  RELATED LISTINGS
                </a>
                <a href="" className="button2">
                  NEARBY LISTINGS
                </a>
              </div>

              <div> 
                <div className="bottom-switch">
                  <div className="top-switch"></div>
                </div>
              </div>
              <Card className="right-div-img pd-card"/>
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default productDetails;
