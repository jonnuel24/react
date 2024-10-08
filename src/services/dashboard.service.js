import axios from "axios";

let baseUrl = `${process.env.REACT_APP_BASEURL}farmer/`;
let baseUrls = "https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/auth/";

async function dashboardData(farmId){
    try{
        let response = await axios.get(`${baseUrl}dashboard-data/${farmId}`);
        return response;
    } catch(error){
        console.error(error);
        return null;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {dashboardData}