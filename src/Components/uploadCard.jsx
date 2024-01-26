import { Icon } from "@iconify/react";
import tempImage from "../asset/images/addproductbg.svg";
import { useState } from "react";
const UploadCard = ({index, setImageParent}) => {
  const [actualImage, setActualImage] = useState(null);
  const cloudUpload = () => {
    try {
      console.log(process.env);
      //   uploadImages.forEach((e) => {
      //     if (e != null) cloudinaryUpload(e);
      //   });
    } catch (e) {
      console.log(e);
    }
  };
  const triggerFileSelect = (id) => {
    document.getElementById(id).click();
  };
  const setImage = (index) => (event) => {
    console.log(event.target.files);
    setImageParent(index, event.target.files[0])
    setActualImage(URL.createObjectURL(event.target.files[0]))
  };
  return (
    <div
      onClick={() => triggerFileSelect(index)}
      className="cursor-pointer relative flex flex-col justify-center items-center gap-2 rounded-[8px]"
    >
      <img
        className="relative z-0 bottom-0 top-0 left-0 right-0"
        src={actualImage? actualImage : tempImage}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
      <button className="faddpbtn absolute z-10 top-16 left-[90px] grid place-content-center items-center">
        <Icon icon="ion:add-outline" color="#6ABD45" />
      </button>
      <label
        htmlFor=""
        className="absolute top-28 left-[60px] z-20 text-white text-opacity-60"
      >
        Add an image
      </label>
      <input
        type="file"
        accept="image/*"
        id={index}
        onChange={setImage(index)}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default UploadCard;
