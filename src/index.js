import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
let persistor = persistStore(store);

axios.interceptors.request.use(
  (request) => {
    request.headers.ContertType = "application/json";
    request.headers.Accept = "application/json";
    if (!request.url.includes("login") && !request.url.includes("auth")) {
      request.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
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
      // console.log(error.response);
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

    if (error.response.status === 403) {
      const navigate = useNavigate();
      navigate("/login");
      return;
    }
    return error.response.data;
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
