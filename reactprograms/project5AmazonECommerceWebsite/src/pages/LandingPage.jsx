import React, { useContext } from 'react'
import './LandingPage.css'
import TestContext from '../contexts/TestContext'
import DemoContext from '../contexts/DemoContext'
const LandingPage = () => {
 //const {user,fruit,car} = useContext(TestContext)
 const sharedData=useContext(DemoContext)
 //const {player}=useContext(DemoContext)

  return (
  
    <>
        <h1>{`Welcome ${sharedData.player.pname} To My Homepage I am pursuing ${sharedData.course}`}</h1>
    </>
  )
}

export default LandingPage