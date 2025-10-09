import React from 'react'
import products from '../data/products'
import './NavList.css'
const NavList = ({handleClick}) => {

const allCategory= [...new Set(products.map((product)=>product.category)),'All']
console.log(allCategory)

  return (
    <>
    <ul className="navlist">
        {allCategory.map(
            (cat,index)=>(<li key={index} onClick={()=>handleClick(cat)}>{cat}</li>)
        )}
    </ul>
    </>
  )
}

export default NavList