import React from 'react'
import products from '../data/products'
import './Navbar.css'
const Navbar = ({handleClick}) => {

    const categories=products.map(
        (product)=>product.category
    )

    const uniqueCategories=new Set(categories)

    const allCategory=[...uniqueCategories,'All']

    console.log(allCategory)
  return (
    <>
        <ul>
        {allCategory.map(
            (cat,index)=>(<li key={index} onClick={()=>handleClick(cat)}>{cat}</li>)
        )}
        </ul>
    </>
  )
}

export default Navbar