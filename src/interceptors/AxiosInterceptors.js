import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const AxiosInterceptor = () => {
  const navigate = useNavigate();
  const location = useLocation();

  axios.interceptors.response.use(
    (response) => {
      response.data.statusCode = 200;
      return response.data;
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

      if ((statusCode === 403 || statusCode === 401) && location.pathname !== "/login") {
        navigate("/login");
        return;
      }

      return error.response.data;
    }
  );
};


