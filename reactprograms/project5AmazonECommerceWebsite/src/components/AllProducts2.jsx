import React, { useState } from 'react'
import Product from './Product'
import products from '../data/products'
import Navbar from './Navbar'

const AllProducts2 = () => {

    const[displayProducts,setdisplayProducts]=useState(products)
    const[buProducts,setBuProducts]=useState(products)

    console.log(buProducts)
    function filterProducts(userCategory)
    {
        console.log(userCategory)
        let filteredProducts
        if(userCategory==='All')
        {
            setdisplayProducts(buProducts)
        }
        else
        {
            filteredProducts=displayProducts.filter(
            (product)=>(product.category===userCategory))
            setdisplayProducts(filteredProducts)
        }  
    }
  return (
    <>
    <Navbar handleClick={filterProducts}/>
    <div className='parent-container'>
    {displayProducts.map(
        (product)=>(<Product key={product.id} prod={product}/> )
    )}
    </div>
    </>
  )
}

export default AllProducts2