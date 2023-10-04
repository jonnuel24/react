import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from './store/store'
axios.interceptors.request.use(
  (request) => {
    request.headers.ContertType = "application/json";
    request.headers.Accept = "application/json";
    // if (request.url.includes("api")) {
    //   request.headers.Authorization = "Bearer " + localStorage.getItem("token");
    // }
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
    error.response.data.statusCode = error.response.status;
    return error.response.data;
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
        <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
