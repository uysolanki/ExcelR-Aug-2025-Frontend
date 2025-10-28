import { createSlice } from "@reduxjs/toolkit";

const initialUser=JSON.parse(sessionStorage.getItem("myuser124"))||null;

const userSlice=createSlice(
    {
        name:"user",
        initialState:initialUser,
        reducers : {
            login:(state,action)=>{
                sessionStorage.setItem("myuser124",action.payload)
                return action.payload
            },
            logout:(state)=>{
                sessionStorage.removeItem("myuser124")
                return null
            }
        }
    }
);


export const {login,logout}=userSlice.actions
export default userSlice.reducer
