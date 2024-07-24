import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const AxiosInterceptor = () => {
  const navigate = useNavigate();
  const location = useLocation();

  axios.interceptors.request.use(
    (request) => {
      request.headers.ContentType = "application/json";
      request.headers.Accept = "application/json";
      if (!request.url.includes("login") && !request.url.includes("auth")) {
        request.headers.Authorization =
          "Bearer " + localStorage.getItem("token");
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      console.log("from the interceptors", response);
      if (response?.data?.data) {
        response.data.statusCode = 200;
        return response.data;
      } else {
        response.data = { statusCode: 200, data: response };
        return response.data;
      }
    },
    (error) => {
      console.log(error);
      if (error === null) {
        error = {
          response: {
            data: {
              statusCode: 500,
              message: "Something went wrong",
            },
          },
        };
      }

      if (typeof error?.response?.data == "object") {
        console.log(error.response);
        error.response.data.statusCode = error.response.status;
      } else {
        error = {
          response: {
            data: {
              statusCode: 500,
              message: "Something went wrong",
            },
          },
        };
      }

      const statusCode = error.response.status;

      if (
        (statusCode === 403 || statusCode === 401) &&
        location.pathname !== "/login"
      ) {
        navigate("/login");
        return;
      }

      return error.response.data;
    }
  );
};
