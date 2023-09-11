import axios from "axios";

let baseUrl = "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/";

const accountServices = {
  login: async function(data) {
    let response = await axios.post(`${baseUrl}login`, data);
    return response;
  }
}

export default accountServices;