import React, { useState } from "react";
import Fpanel from "./component/fpanel";
import FNavbar from "./component/farmersNavbar";
import { Icon } from "@iconify/react";

function ViewProduct() {
  // List of image URLs (replace with your actual image URLs)
  const images = [
    "https://via.placeholder.com/640x480.png?text=Image+1",
    "https://via.placeholder.com/640x480.png?text=Image+2",
    "https://via.placeholder.com/640x480.png?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const livestockDescriptions = [
    { id: 1, title: "Breed", response: "Livestock" },
    { id: 2, title: "Weight", response: "4kg" },
    { id: 3, title: "Color", response: "Black" },
    { id: 4, title: "Lifespan", response: "7 months" },
    { id: 5, title: "Gender", response: "Male" },
  ];

  return (
    <div>
      <FNavbar />
      <div className="pl-[64px] pr-[32px] flex flex-row w-full">
        {/* Side panel */}
        <div>
          <Fpanel />
        </div>
        <div className="w-full px-8 py-12 space-y-4">
          <div className="flex justify-between w-full">
            <strong className="flex justify-start">View Products</strong>{" "}
            <button className="px-4 py-2 border-2 border-gray-300 rounded-xl flex gap-2 items-center hover:bg-green-100 hover:text-green-800"><Icon icon="ep:edit" width="64" height="64"  style={{color: 'black'}} /> Edit</button>
          </div>
          <div className="flex bg-gray-100 h-100 w-full p-4 gap-4">
            <div className="flex flex-col w-[60%]">
              <div className="flex flex-col bg-white rounded-xl p-2 ">
                {/* Main Image */}
                <div className="w-fit h-[640px] rounded-xl overflow-clip">
                  <img
                    src={images[currentIndex]}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Thumbnails and Navigation */}
                <div className="flex items-center justify-between mt-4">
                  {/* Prev Button */}
                  <button onClick={handlePrevClick}>
                    <Icon
                      icon="ooui:next-rtl"
                      width="64"
                      height="64"
                      style={{ color: "black" }}
                    />
                  </button>
                  {/* Thumbnails */}
                  <div className="flex space-x-2">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`w-24 h-24 cursor-pointer ${
                          index === currentIndex
                            ? "border-2 border-blue-500"
                            : ""
                        }`}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                  </div>
                  {/* Next Button */}
                  <button onClick={handleNextClick}>
                    <Icon
                      icon="ooui:next-ltr"
                      width="64"
                      height="64"
                      style={{ color: "black" }}
                    />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl p-2 mt-4 flex flex-col items-start gap-4">
                <strong className="">Product Information</strong>
                <div className="flex flex-col items-start">
                  {/* Product name */}
                  <div className="text-[40px]">British African Goat</div>
                  {/* Product description */}
                  <p>Caramel blue eyes, rich kid, and fun boy</p>
                  <div className="border p-4 rounded-md w-full">
                    {livestockDescriptions.map((livestockDescription) => (
                      <div
                        key={livestockDescription.id}
                        className="flex justify-between"
                      >
                        <div className="font-bold mr-2">
                          {livestockDescription.title}:
                        </div>
                        <div>{livestockDescription.response}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] p-4 bg-white rounded-xl h-fit flex flex-col items-start gap-4">
              <div className="w-full flex items-start font-medium text-lg pb-2 border-b-2">
                Item Price
              </div>
              <div className="text-[36px] font-semibold">
                NGN 70,000.00/UNIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
