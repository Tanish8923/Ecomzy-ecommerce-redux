import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import authSlice  from "./slice/authSlice";

export const store = configureStore({
    reducer : {
        cart:CartSlice ,
        auth:authSlice
    }
})