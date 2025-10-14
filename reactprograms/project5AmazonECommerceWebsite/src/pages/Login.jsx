import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import Homepage from './Homepage'

const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const {setUser} =useContext(UserContext)

    function handleLogin(e)
    {
        e.preventDefault()
        setUser({username:username,password:password})
        localStorage.setItem("myuser", JSON.stringify({username:username,password:password}))
    }

    function handleLogout(e)
    {
      localStorage.removeItem("myuser")
      alert ("logout successfull")
    }
  return (
    <>
    <form>
        <input 
        type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        ></input>
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        ></input>

        <input type="button" value="LOGIN" onClick={handleLogin}></input>
        <input type="submit" value="LOGOUT" onClick={handleLogout}></input>
    </form>
    <Homepage/>
    </>
  )
}

export default Login