import React, { useState } from 'react'
import DemoContext from './DemoContext'

const DemoContextProvider = ({children}) => {

    let bike="Yamaha"
    let course = "Full Stack Development"

    let p1={
        jno:18,
        pname:"Virat",
        mp:100
    }

    const [player,setPlayer]=useState(p1)

    let sharedData={bike,course,player,setPlayer}
  return (
    <DemoContext.Provider value={sharedData}>
        {children}
    </DemoContext.Provider>
  )
}

export default DemoContextProvider