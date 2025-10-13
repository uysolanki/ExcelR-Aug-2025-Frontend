import React, { createContext, useState } from 'react'

export const UserContext = createContext(null)

const UserContextProvider = ({children}) => {
    const u1={
        username:null,
        password:null
    }

    //const [user,setUser]=useState(u1)
    //const [user,setUser]=useState({})
    const [user,setUser]=useState({
        username:null,
        password:null
    })

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>

  )
}

export default UserContextProvider