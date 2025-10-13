import React, { useState } from 'react'
import TestContext from './TestContext';

function TestContextProvider({children})
 {
    let car="Audi";
    let fruit="Apple"
    const [user, setUser]=useState({sname:'Alice',age:21})
    let k=10;

  return (
    <TestContext.Provider value={{car,fruit,user,setUser}}>
       {children} 
    </TestContext.Provider>
  )
}

export default TestContextProvider