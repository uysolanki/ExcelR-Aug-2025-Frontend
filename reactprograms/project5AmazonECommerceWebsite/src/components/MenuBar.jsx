import React from 'react'
import './MenuBar.css'
import { Link } from 'react-router-dom'
const MenuBar = () => {
  return (
    <>
        <ul className="menubar">
        <Link to="/">    <li>Home</li></Link>
        <Link to="/rich">     <li>RichTextBox</li></Link>
        <Link to="/shop">    <li>ECommerce</li></Link>
        <Link to="/signin">     <li>SignIn</li></Link>
        <Link to="/login">     <li>Login</li></Link>
        </ul>
    </>
  )
}

export default MenuBar