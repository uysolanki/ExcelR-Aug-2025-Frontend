import { createSlice } from "@reduxjs/toolkit";
//const initialUser="Virat"
const initialUser=JSON.parse(sessionStorage.getItem("myuser123"))||null;

const userSlice=createSlice(
    {
        name:"user",
        initialState:initialUser,
        reducers : {
            login:(state,action)=>{
                sessionStorage.setItem("myuser123",action.payload)
                return action.payload
            },
            logout:(state)=>{
                sessionStorage.removeItem("myuser123")
                return null
            }
        }
    }
);


export const {login,logout}=userSlice.actions
export default userSlice.reducer
