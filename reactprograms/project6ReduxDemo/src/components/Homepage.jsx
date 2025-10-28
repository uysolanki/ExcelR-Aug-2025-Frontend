import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from "../redux/UserSlice";

const Homepage = () => {

const user1 = useSelector((state) => state.user );   
const dispatch = useDispatch(); 

const [username,setUsername]=useState("")

function handleSubmit()
{
    dispatch(login(username))
}

  return (
    <>
       {user1? 
       <div><h1> Welcome  {user1}   </h1> 
       
       <input type="button" value="LOGOUT" onClick={()=>dispatch(logout())}></input>
       </div>
       :
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)} />
           

            <input type="submit" value="LOGIN" />
        </form>
    }
    </>
  )
}

export default Homepage