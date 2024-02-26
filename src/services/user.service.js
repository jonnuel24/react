import axios from "axios";
let baseUrl = `${process.env.REACT_APP_BASEURL}user/`;
export const userServices = {
  addToCart: async (payload) => {
    try {
      let response = await axios.post(`${baseUrl}add-to-cart`, payload);
      return response;
    } catch (e) {
      return {
        status: 500,
        data: {
          error: "something went wrong",
        },
      };
    }
  },
  add: async (data) => {
    try {
      let response = await axios.post(`${baseUrl}add`, data);
      return response;
    } catch (e) {}
  },
  one: async (id) => {
    try {
      let response = await axios.get(`${baseUrl}one/${id}`);
      return response;
    } catch (e) {}
  },
  userCart: async (userId) => {
    try {
      let response = await axios.get(`${baseUrl}cart/${userId}`);
      return response;
    } catch (e) {}
  },
  removeCart: async (data) => {
    try {
      let response = await axios.patch(`${baseUrl}cart-item/delete`, data);
      return response;
    } catch (e) {}
  },
};
