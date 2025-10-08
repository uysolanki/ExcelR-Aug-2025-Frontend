import React, { useState } from 'react'
import Product from './Product'
import products from '../data/products'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const AllProducts2 = () => {

    const[displayProducts,setdisplayProducts]=useState(products)
    const[buProducts,setBuProducts]=useState(products)

    console.log(buProducts)
    function filterProductsByCategory(userCategory)
    {
        console.log(userCategory)
        let filteredProducts
        if(userCategory==='All')
        {
            setdisplayProducts(buProducts)
        }
        else
        {
            filteredProducts=buProducts.filter(
            (product)=>(product.category===userCategory))
            setdisplayProducts(filteredProducts)
        }  
    }

    function searchProductsByTitle(event)
    {
        let searchText=event.target.value.trim();      //Tshirt
        console.log(searchText)
        if(searchText.length>0)
        {
        let searchedProducts=buProducts.filter(
            (product)=>(product.title.toLowerCase().includes(searchText.toLowerCase()))
        )
        setdisplayProducts(searchedProducts)
        }
        else
        setdisplayProducts(buProducts) 
    }
  return (
    <>
    <Navbar handleClick={filterProductsByCategory}/>
    {/* <input type="text" onChange={searchProductsByTitle}/> */}
    <SearchBar handlesearchProductsByTitle={searchProductsByTitle}/>
    <div className='parent-container'>
    {displayProducts.map(
        (product)=>(<Product key={product.id} prod={product}/> )
    )}
    </div>
    </>
  )
}

export default AllProducts2