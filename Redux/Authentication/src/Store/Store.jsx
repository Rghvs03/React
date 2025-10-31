import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice"

// eslint-disable-next-line no-unused-vars
const store = configureStore({
    reducer : {
       auth : authReducer,
    }
})

export default store;