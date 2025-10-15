import React, { useState } from 'react'
import './RegisterUser.css'
import axios from 'axios'
const RegisterUser = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    function handleSubmit(e)
    {
    e.preventDefault();

    let u1={username,password}
    axios.post('http://localhost:8087/registerUser',u1)
    .then(result=> console.log(result))

    alert('User Registered')
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

        <input type="submit" value="REGISTER" onClick={handleSubmit}></input>
    </form>
    </>
  )
}

export default RegisterUser