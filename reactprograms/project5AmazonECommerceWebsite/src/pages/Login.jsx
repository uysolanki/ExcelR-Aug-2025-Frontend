import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import Homepage from './Homepage'

const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const {setUser} =useContext(UserContext)

    function handleSubmit(e)
    {
        e.preventDefault()
        setUser({username:username,password:password})
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

        <input type="submit" value="LOGIN" onClick={handleSubmit}></input>
    </form>
    <Homepage/>
    </>
  )
}

export default Login