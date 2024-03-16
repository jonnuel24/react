/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import Fpanel from "./component/fpanel";
import FNavbar from "./component/farmersNavbar";
import "../../asset/styles/addproduct.css";

import UploadCard from "../../Components/uploadCard";
import { productServices } from "../../services/product.service";
import { useNavigate } from "react-router-dom";
import { notification } from "../../services/notification";
import { BeatLoader } from "react-spinners";
function Addproduct() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading]=useState(false)
  // Function to update images array
  const addImage = async (image) => {
    // Create a new product object with updated images array
    product.images.push(image)
  };
  
  const uploadImages = [null, null, null, null, null];
  const navigate = useNavigate();
  const handleInput = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    let user = localStorage.getItem("currentUser");
    if (user) {
      // user = JSON.stringify(user);
      user = JSON.parse(user);
      // console.log(user)
      setProduct({...product, farmId : user.farm.id})
    }
  }, []);
  const [product, setProduct] = useState({
    images: [],
    name: null,
    quantity: 0,
    category: null,
    age: 0,
    gender: null,
    price: 0.0,
    weight: 0,
    description: null,
    farmId: null,
    unit: null,
  });
  const setImage = (index, file) => {
    uploadImages[index] = file;
  };

  const cloudUpload = () => {
    // setUploading(true)
    setLoading(true);
    try {
      setImages([]);
      uploadImages.forEach(async (e, index) => {
        if (e != null) await cloudinaryUpload(e);
        if(index===uploadImages.length-1){
          // setUploading(false)
         await createProduct();
        }
      });
    } catch (e) {
      // notification(e.message,'info');
      console.log(e);
    }

  };

  const cloudinaryUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      formData.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      const response = await fetch(
        `${process.env.REACT_APP_CLOUDINARY_BASEURL}${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        {
          method: "post",
          body: formData,
        }
      );
      let res = await response.json();
      await addImage(res.secure_url);
      notification("File Uploaded successfully", 'success');
      // console.log(imagesURL);
    } catch (e) {
      notification(e.message, 'info');
    }
  };

  const createProduct = async () => {
    setLoading(true);
    try {
      const response = await productServices.add(product);
      if (response.statusCode === 200) {
        notification("Product added successfully",'success');
        navigate("/product");
      }else{
        notification(response?.message, 'error')
      }
      console.log(response);
    } catch (e) {
      notification(e.message, 'info')
      console.log(e);
    }
    setLoading(false)
  };
  return (
    <div>
      <FNavbar />
      <div className="pl-[64px] flex flex-row">
        <Fpanel className="" />
        {/* divider */}
        <div className="fd-divider ml-4 h-auto"></div>
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
              <UploadCard index={0} setImageParent={setImage} />
              {/* 02 */}
              <UploadCard index={1} setImageParent={setImage} />
              {/* 03 */}
              <UploadCard index={2} setImageParent={setImage} />
              {/* 04 */}
              <UploadCard index={3} setImageParent={setImage} />
              {/* 05 */}
              <UploadCard index={4} setImageParent={setImage} />
            </div>

            {/* end of card */}
            {/* {!uploading && 
            <button
              onClick={() => cloudUpload()}
              className="w-[170px] h-[50px] bg-[#6ABD45] text-white rounded-md"
            >
              Upload
            </button>}
            {uploading && <BeatLoader color="#36d7b7" />} */}
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
                      name="name"
                      className="w-[520px] h-[45px] add-details-input"
                      placeholder="Product name"
                      value={product.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Category</label>
                    <select
                      name="category"
                      id=""
                      value={product.category}
                      className="w-[230px] h-[45px] add-details-input"
                      onChange={handleInput}
                    >
                      <option value="" selected>
                        select a category
                      </option>
                      <option>Livestock</option>
                      <option>Poultry</option>
                      <option>Cattle</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-row gap-[32px] w-full">
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Age</label>
                    <input
                      type="text"
                      name="age"
                      className="w-[120px] h-[45px] add-details-input"
                      placeholder="Product name"
                      value={product.age}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Gender</label>
                    <select
                      name="gender"
                      id=""
                      value={product.gender}
                      onChange={handleInput}
                      className="w-[170px] h-[45px] add-details-input"
                    >
                      <option value="" selected select>
                        select a preferred gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Price</label>
                    <input
                      type="text"
                      name="price"
                      className="w-[120px] h-[45px] add-details-input"
                      onChange={handleInput}
                      value={product.price}
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
                      name="quantity"
                      id=""
                      value={product.quantity}
                      className="w-[130px] h-[45px] add-details-input"
                      onChange={handleInput}
                    >
                      <option selected select></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="" className="text-left">
                    Product Description
                  </label>
                  <textarea
                    value={product.description}
                    name="description"
                    id=""
                    cols="80"
                    rows="10"
                    onChange={handleInput}
                    className="add-details-input"
                  ></textarea>
                </div>
              </form>
            </div>
            {!loading && 
            <button
              id="create-button"
              onClick={cloudUpload}
              className="w-[170px] h-[50px] bg-black text-white rounded-md"
            >
              Save Details
            </button>}
            {loading && <BeatLoader color="#36d7b7" />}
          </div>
          {/* end of add details */}
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
