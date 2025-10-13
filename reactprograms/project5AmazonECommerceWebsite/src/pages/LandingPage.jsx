import React, { useContext } from 'react'
import './LandingPage.css'
import TestContext from '../contexts/TestContext'
import DemoContext from '../contexts/DemoContext'
import { HelloContext } from '../contexts/HelloContextProvider'
const LandingPage = () => {
 //const {user,fruit,car} = useContext(TestContext)
 //const sharedData=useContext(DemoContext)
 //const {player}=useContext(DemoContext)
 const {test}=useContext(HelloContext)

  return (
  
    <>
        {/* <h1>{`Welcome ${test} To My Homepage `}</h1>  */}
    </>
  )
}

export default LandingPage