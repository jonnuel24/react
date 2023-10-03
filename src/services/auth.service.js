import axios from "axios";

let baseUrl = "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/user/";
let baseUrls = "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/auth/";

const accountServices = {
  login: async function (data) {
    let response = await axios.post(`${baseUrl}login`, data);
    return response;
  },

  forgotPassword: async function (data) {
    let response = await axios.post(`${baseUrls}forgot-password`, data);
    return response;
  },

  verificationCode: async function (data) {
    let response = await axios.post(`${baseUrls}verify-forgot-password-otp`, data);
    return response;
  },
};

export default accountServices;
