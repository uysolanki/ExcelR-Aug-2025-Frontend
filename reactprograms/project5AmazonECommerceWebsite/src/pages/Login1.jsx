import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from '../redux/UserSlice';

const Login1 = () => {
    const [username,setUsername]=useState("")

    const user=useSelector((state)=>state.user)
    const dispatch = useDispatch();

    functionhandleLogin(e)
    {
        e.preventDefault()
        dispatch(login(username))
    }

    functionhandleLogout(e)
    {
        dispatch(logout())
    }

  return (
    <>
    <form>
        <input 
        type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />

        <input type="button" value="LOGIN" onClick={handleLogin}></input>
        <input type="submit" value="LOGOUT" onClick={handleLogout}></input>
    </form>
    <Homepage/>
    </>
  )
}

export default Login1