
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store=configureStore({
    reducer:rootReducer
})
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
