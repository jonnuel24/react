import axios from "axios";

let baseUrl = "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/user/";
let baseUrls = "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/users/";

const accountServices = {
  login: async function (data) {
    let response = await axios.post(`${baseUrl}login`, data);
    return response;
  },

  forgotPassword:async function(data) {
    let response = await axios.post(`${baseUrls}forgotPassword`, data);
    return response;
  }
};

export default accountServices;
