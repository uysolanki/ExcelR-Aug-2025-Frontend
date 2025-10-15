import React from 'react'
import './MenuBar.css'
import { useNavigate } from 'react-router-dom'
const MenuBar1 = () => {
    const navigate=useNavigate()
    function handleClick(value)
    {      
            switch(value)
            {
                case '/' : navigate("/");break;
                case '/add' : navigate("/add");break;
                case '/shop' : navigate("/shop");break;
                case '/signin' : navigate("/signin");break;
                case '/login' : navigate("/login");break;
            }
    }
  return (
    <>
        <ul className="menubar">
        <li onClick={()=>handleClick('/')}>Home</li>
        <li onClick={()=>handleClick('/add')}>Add Product</li>
        <li onClick={()=>handleClick('/shop')}>ECommerce</li>
        <li onClick={()=>handleClick('/signin')}>SignIn</li>
        <li onClick={()=>handleClick('/login')}>Login</li>
        </ul>
    </>
  )
}

export default MenuBar1