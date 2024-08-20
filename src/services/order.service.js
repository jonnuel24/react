import axios from "axios";
let baseUrl = `${process.env.REACT_APP_BASEURL}orders`;
export const OrderServices = {
  checkout: async (payload) => {
    try {
      const response = await axios.post(`${baseUrl}`, payload);
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
  orders: async (id, page = 1, limit = 10) => {
    try {
      const response = await axios.get(
        `${baseUrl}/user/${id}?page=${page}&limit=${limit}`
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
  order: async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
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
  farmOrders: async (params, farmId) => {
    try {
      const response = await axios.get(`${baseUrl}/farm/${farmId}`, { params });
      return response;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error; // Re-throw error for further handling
    }
  },
};
