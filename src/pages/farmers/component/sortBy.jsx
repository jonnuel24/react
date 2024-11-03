import React, { useEffect, useState } from "react";
import "../../../asset/styles/sortby.css";
import { Icon } from "@iconify/react";

function SortBy({ onClick }) {
  // defining the state to open sort modal
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleSortModal = () => {
    setIsSortOpen(!isSortOpen);
  };

  const sortList = [
    { name: "newest" },
    { name: "oldest" },
    { name: "lowest price" },
    { name: "highest price" },
  ];
  return (
    <div className="relative">
      <button onClick={toggleSortModal} className="sortby">
        <Icon icon="octicon:filter-16" color="#909090" width="24" height="24" />
        <h3 className="text-center text-[#5D5D5D] text-[16px] mb-0 font-normal">
          Sort by
        </h3>
      </button>

      {/* modal */}
      {isSortOpen && (
        <div className="border rounded-md shadow-xl p-2 flex flex-col justify-start mt-2 absolute inset-0 z-20 bg-white top-[100%] h-fit w-fit min-w-[200px]">
          <ul className="flex flex-col items-start gap-2 w-full pl-0">
            {sortList.map((list, index) => (
              <li
                key={index}
                className="hover:bg-gray-100 cursor-pointer w-full text-left py-2 pl-2 pr-8 rounded-sm"
              >
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortBy;
