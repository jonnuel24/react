import React from "react";
import "../../../asset/styles/searchbar.css"
import { Icon } from "@iconify/react";

function Searchbar() {
  return (
    <div className="sb-outline">
      <Icon icon="iconoir:search" color="#909090" width="24" height="24" />
      <input type="text" placeholder="search" className=" border-0 text-left font-display text-[#909090] text-lg font-medium" />
    </div>
  );
}

export default Searchbar;
