
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import productReducer from './ProductSlice';
export const store=configureStore(
    {
        reducer : {
            user : userReducer,
            product : productReducer
        }
    }
)

