import React from "react";
import Cattle from "../asset/images/cattle.svg";
import Farmer from "../asset/images/farmer.svg";
import "../asset/styles/card.css";

function Card() {
  return (
    <div className="flex flex-col card  h-auto items-center">
      <div className="cattle bg-cover bg-no-repeat">
        <div className="top-tag">
          <div className="bg-[#006838] text-white">Forsale</div>
          <div className="bg-[#F91919] text-white">New</div>
        </div>
      </div>

      <div className="flex information flex-row justify-between">
        <div className="left-card-body">
          <h3 className="description text-start">
            11 Pedigree Sussex Breeding Cows with Calves at Foot
          </h3>
          <h1 className="price">
            N56,000 <span>/ uniT</span>
          </h1>

          <div className="flex justify-between gap-1 discount">
            <div className="bg-[#F91919] text-white">30% off</div>

            <div className="bg-[#155840] text-white">14 months</div>

            <div className="bg-[#36454C] text-white">Sagamulga</div>
          </div>
        </div>

        <img src={Farmer} alt="" className="bb" />

        <div className="flex flex-col right-card-body">
          <button className="btn btn-secondary cta">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
