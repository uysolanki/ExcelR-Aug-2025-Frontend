import React, { createContext } from 'react'

export const HelloContext=createContext(null);

const HelloContextProvider = ({children}) => {

  let test="Rohit Sharma"
  return (
    <HelloContext.Provider value={{test}}>
       {children}
    </HelloContext.Provider>
  )
}

export default HelloContextProvider