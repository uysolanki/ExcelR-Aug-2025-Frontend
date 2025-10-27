import { createSlice } from "@reduxjs/toolkit";
const initialProduct={}

const productSlice=createSlice(
    {
        name:"product",
        initialState:initialProduct,
        reducers : {
            addProduct:(state,action)=>{
                return action.payload
            },
            deleteProduct:(state)=>{
                return null
            }
        }
    }
);

export const {addProduct,deleteProduct}=productSlice.actions
export default productSlice.reducer