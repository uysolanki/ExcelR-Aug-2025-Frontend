import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Homepage = () => {
    const {user}=useContext(UserContext)
  return (
    <div>
        Welcome , {user.username}
    </div>
  )
}

export default Homepage