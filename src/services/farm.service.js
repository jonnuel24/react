import axios from "axios";

let baseUrl = `${process.env.REACT_APP_BASEURL}farmer/`;
let baseUrls = "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/auth/";

const farmService = {
  farm: async function (farmId) {
    let response = await axios.get(`${baseUrl}one/${farmId}`);
    return response;
  },
};

export default farmService;
