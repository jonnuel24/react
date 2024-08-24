import axios from "axios";
let baseUrl = `${process.env.REACT_APP_BASEURL}product/`;
export const productServices = {
  all: async (page = 1, size = 20, name = null) => {
    try {
      let response = await axios.get(
        `${baseUrl}all?page=${page}&limit=${size}&name=${name}`
      );
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
  edit: async (data) => {
    try {
      let response = await axios.patch(`${baseUrl}`, data);
      return response;
    } catch (e) {}
  },
  one: async (id) => {
    try {
      let response = await axios.get(`${baseUrl}one/${id}`);
      return response;
    } catch (e) {}
  },
  farmProduct: async (farmId, page = 1, size = 20) => {
    try {
      let response = await axios.get(
        `${baseUrl}farm/${farmId}?page=${page}&limit=${size}`
      );
      return response;
    } catch (e) {}
  },
  delete:async (productId)=>{
    try{
      let response = await axios.delete(`${baseUrl}delete/${productId}`)
      return response
    }catch(e){

    }
  }
};
