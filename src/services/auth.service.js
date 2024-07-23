import axios from "axios";

let baseUrl = `${process.env.REACT_APP_BASEURL}user/`;
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
  createAccount:async function(data){
    let response=await axios.post(`${baseUrls}signup`, data)
    return response
  },
  resetPassword:async function (data){
    const response=await axios.patch(`${baseUrls}reset-password`, data, {headers:{
      'Password-Reset':localStorage.getItem('resetPasswordToken')
    }})
    return response
  },

  waitingList: async function (data) {
    let response = await axios.post(`${baseUrls}waiting-list`, data);
    return response;
  },

  verifyEmail:async function(data){
    let response=await axios.post(`${baseUrls}verify-signup-otp`, data)
    return response
  },
  completeProfile:async function(data){
    let response=await axios.post(`${baseUrls}complete-profile`, data)
    return response
  },
  resendOTP:async function(data){
    let response=await axios.post(`${baseUrls}resend-signup-otp`, data)
    return response
  }
};

export default accountServices;
