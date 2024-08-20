import React, { useState, useEffect } from "react";
import Fpanel from "./component/fpanel";
import FNavbar from "./component/farmersNavbar";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { productServices } from "../../services/product.service";
import { notification } from "../../services/notification";
import {
  cloudinaryDelete,
  cloudinaryUpload,
} from "../../services/cloudinary.service";

function ProductEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // Load initial data from localStorage or use default values
  // const initialImages = JSON.parse(localStorage.getItem("images")) || [
  //   "https://via.placeholder.com/640x480.png?text=Image+1",
  //   "https://via.placeholder.com/640x480.png?text=Image+2",
  //   "https://via.placeholder.com/640x480.png?text=Image+3",
  // ];

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  const fetchProduct = async (productId) => {
    try {
      const result = await productServices.one(productId);
      if (result?.statusCode === 200) {
        setProduct(result?.product);
        // setFarm(result?.farm);
        // fetchFarm(result?.product?.farmId);
        // setProductSummary(result?.productSummary);
      }
      console.log("product", result);
    } catch (e) {}
  };

  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [breed, setBreed] = useState("");
  const [unit, setUnit] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [lifespan, setLifespan] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    // Save data to localStorage whenever it changes
    setProductName(product?.name);
    setProductDescription(product?.description);
    setProductPrice(product?.price);
    setImages(product?.images);
    setBreed(product?.category);
    setQuantity(product?.quantity);
    setLifespan(product?.age);
    setUnit(product?.unit);
  }, [product]);

  const handleSave = () => {
    // Navigate to the view product page
    navigate("/viewProduct");
  };

  const updateProduct = async () => {
    const payload = {
      farmId: product.farmId,
      productId: id,
      quantity: quantity,
      images: images,
      description: productDescription,
      // unit: unit,
      price: productPrice,
    };
    const result=await productServices.edit(payload);
    if(result.statusCode===200){
      notification(result.message, 'success')
      navigate(`/farmer/product/${id}`);
    }
  };

  const handleAddImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Set the image to be displayed before upload
      const result = await cloudinaryUpload(file);
      setImages([...images, result]);
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setImages([...images, reader.result]);
      // };
      // reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = async (index) => {
    if (images[index].includes("https://res.cloudinary.com/")) {
      const urlParts = images[index].split("/");

      // The `public_id` is the part after the version number and before the file extension
      const versionIndex = urlParts.indexOf("upload") + 2;
      const fileName = urlParts[versionIndex];

      // Remove the file extension to get the `public_id`
      const publicId = fileName.split(".")[0];
      await cloudinaryDelete(publicId);
      // alert(`The public_id is: ${publicId}`);
      setImages(images.filter((_, imgIndex) => imgIndex !== index));
    }
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
              onClick={updateProduct}
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
                  {images?.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`${index}`}
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
                    {/* {livestockDescriptions.map((livestockDescription) => ( */}
                    <div className="flex justify-between">
                      <div className="font-bold mr-2">Breed:</div>
                      <input
                        type="text"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        className="border p-2 rounded-md w-full"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="font-bold mr-2">Quantity:</div>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="border p-2 rounded-md w-full"
                      />
                    </div>
                    {/* <div className="flex justify-between">
                      <div className="font-bold mr-2">Unit:</div>
                      <input
                        type="text"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="border p-2 rounded-md w-full"
                      />
                    </div> */}
                    {/* <div className="flex justify-between">
                      <div className="font-bold mr-2">Lifespan:</div>
                      <input
                        type="text"
                        value={lifespan}
                        onChange={(e) => setColor(e.target.value)}
                        className="border p-2 rounded-md w-full"
                      />
                    </div> */}
                    {/* ))} */}
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
