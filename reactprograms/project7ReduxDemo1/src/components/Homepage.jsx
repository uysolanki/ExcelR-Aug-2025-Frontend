import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from '../redux/UserSlice';

const Homepage = () => {

 const user = useSelector((state) => state.user );   
 const dispatch = useDispatch();  
 const [username,setUsername]=useState("");

 function handleSubmit()
 {
    dispatch(login(username));              
 }
  return (
    <>
    {user ? 
    
    <div> Welcome {user} 
    <input type="button" value="LOGOUT" 
    onClick={() => dispatch(logout())}                  />
    </div> :
    
    <div> 
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <input type="submit" value="LOGIN" />
        </form>
    </div>
    }
    </>
  )
}

export default Homepage