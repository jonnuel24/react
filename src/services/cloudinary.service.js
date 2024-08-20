// import { v2 as cloudinary } from "cloudinary";
import { v2 as cloudinary } from 'cloudinary-core';
import CryptoJS from 'crypto-js';
// cloudinary.config({
//   cloud_name: process.env.REACT_APP_CLOUD_NAME,
//   api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
//   api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
// });

// Configure Cloudinary
// const cloudinaryCore = cloudinary.Cloudinary.new({
//   cloud_name: process.env.REACT_APP_CLOUD_NAME,
//   secure: true,
// });


const cloudinaryUpload = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    return error.message;
  }
};
const cloudinaryDelete = async (public_id) => {
  try {
    // Generate the timestamp and signature
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const signature = CryptoJS.SHA1(`public_id=${public_id}&timestamp=${timestamp}${process.env.REACT_APP_CLOUDINARY_API_SECRET}`).toString(CryptoJS.enc.Hex);

    // Prepare the form data
    const formData = new FormData();
    formData.append('public_id', public_id);
    formData.append('timestamp', timestamp);
    formData.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY);
    formData.append('signature', signature);

    // Send the delete request
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/destroy`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();
    console.log('Image deleted:', result);
    return result;
  } catch (error) {
    console.error('Error deleting image:', error);
    return error.message;
  }
};

export { cloudinaryUpload, cloudinaryDelete };
