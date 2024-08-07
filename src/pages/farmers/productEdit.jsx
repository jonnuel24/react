import React, { useState, useEffect } from "react";
import Fpanel from "./component/fpanel";
import FNavbar from "./component/farmersNavbar";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function ProductEdit() {
  const navigate = useNavigate();

  // Load initial data from localStorage or use default values
  const initialImages = JSON.parse(localStorage.getItem("images")) || [
    "https://via.placeholder.com/640x480.png?text=Image+1",
    "https://via.placeholder.com/640x480.png?text=Image+2",
    "https://via.placeholder.com/640x480.png?text=Image+3",
  ];

  const initialProductName =
    localStorage.getItem("productName") || "British African Goat";
  const initialProductDescription =
    localStorage.getItem("productDescription") ||
    "Caramel blue eyes, rich kid, and fun boy";
  const initialProductPrice =
    localStorage.getItem("productPrice") || "70,000.00";
  const initialDescriptions = JSON.parse(
    localStorage.getItem("livestockDescriptions")
  ) || [
    { id: 1, title: "Breed", response: "Livestock" },
    { id: 2, title: "Weight", response: "4kg" },
    { id: 3, title: "Color", response: "Black" },
    { id: 4, title: "Lifespan", response: "7 months" },
    { id: 5, title: "Gender", response: "Male" },
  ];

  const [images, setImages] = useState(initialImages);
  const [productName, setProductName] = useState(initialProductName);
  const [productDescription, setProductDescription] = useState(
    initialProductDescription
  );
  const [productPrice, setProductPrice] = useState(initialProductPrice);
  const [livestockDescriptions, setLivestockDescriptions] =
    useState(initialDescriptions);
  const [newImageUrl, setNewImageUrl] = useState("");

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("images", JSON.stringify(images));
    localStorage.setItem("productName", productName);
    localStorage.setItem("productDescription", productDescription);
    localStorage.setItem("productPrice", productPrice);
    localStorage.setItem(
      "livestockDescriptions",
      JSON.stringify(livestockDescriptions)
    );
  }, [
    images,
    productName,
    productDescription,
    productPrice,
    livestockDescriptions,
  ]);

  const handleSave = () => {
    // Navigate to the view product page
    navigate("/viewProduct");
  };

  const handleDescriptionChange = (id, newValue) => {
    setLivestockDescriptions((prevDescriptions) =>
      prevDescriptions.map((description) =>
        description.id === id
          ? { ...description, response: newValue }
          : description
      )
    );
  };

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, imgIndex) => imgIndex !== index));
  };

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
            <strong className="flex justify-start">Edit Products</strong>
            <button
              onClick={handleSave}
              className="px-4 py-2 border-2 border-gray-300 rounded-xl flex gap-2 items-center hover:bg-green-100 hover:text-green-800"
            >
              <Icon
                icon="ep:edit"
                width="24"
                height="24"
                style={{ color: "black" }}
              />{" "}
              Save
            </button>
          </div>
          <div className="flex bg-gray-100 h-100 w-full p-4 gap-4">
            <div className="flex flex-col w-[60%]">
              <div className="flex flex-col bg-white rounded-xl p-2 ">
                {/* Image List */}
                <div className="w-full flex flex-wrap gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Image ${index}`}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <button
                        onClick={() => handleDeleteImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                      >
                        <Icon icon="mdi:close" width="16" height="16" />
                      </button>
                    </div>
                  ))}
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-4 rounded-md">
                    <input
                      type="file"
                      onChange={handleAddImage}
                      className="border p-2 rounded-md w-full mb-2"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-2 mt-4 flex flex-col items-start gap-4">
                <strong className="">Product Information</strong>
                <div className="flex flex-col items-start">
                  {/* Product name */}
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="text-[40px] border p-2 rounded-md w-full"
                  />
                  {/* Product description */}
                  <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="border p-2 rounded-md w-full"
                  />
                  <div className="border p-4 rounded-md w-full">
                    {livestockDescriptions.map((livestockDescription) => (
                      <div
                        key={livestockDescription.id}
                        className="flex justify-between"
                      >
                        <div className="font-bold mr-2">
                          {livestockDescription.title}:
                        </div>
                        <input
                          type="text"
                          value={livestockDescription.response}
                          onChange={(e) =>
                            handleDescriptionChange(
                              livestockDescription.id,
                              e.target.value
                            )
                          }
                          className="border p-2 rounded-md w-full"
                        />
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
              <input
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="text-[36px] font-semibold border p-2 rounded-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
