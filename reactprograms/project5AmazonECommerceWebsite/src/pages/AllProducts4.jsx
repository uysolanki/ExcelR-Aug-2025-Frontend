import React, { useContext, useState } from 'react'
import Navbar1 from '../components/Navbar1'
import NavList1 from '../components/NavList1'
import SearchBar from '../components/SearchBar'
import Product from '../components/Product'
import { ProductContext } from '../contexts/ProductContextProvider'
import './AllProducts.css'
const AllProducts4 = () => {

   const {products}=useContext(ProductContext)

   const [displayProducts,setDisplayProducts]=useState(products)
   const[buProducts,setBuProducts]=useState(products)
   
   function filterProductsByCategory(userCategory)
    {
        console.log(userCategory)
        let filteredProducts
        if(userCategory==='All')
        {
            setDisplayProducts(buProducts)
        }
        else
        {
            filteredProducts=buProducts.filter(
            (product)=>(product.category===userCategory))
            setDisplayProducts(filteredProducts)
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
        setDisplayProducts(searchedProducts)
        }
        else
        setDisplayProducts(buProducts) 
    }


   return (
    <>
    <Navbar1 handleClick={filterProductsByCategory}/>
    
  <div className="shop-main">
   <div class="search-filter">
    <NavList1 handleClick={filterProductsByCategory}/>
    {/* <input type="text" onChange={searchProductsByTitle}/> */}
    <SearchBar handlesearchProductsByTitle={searchProductsByTitle}/>
   </div>
   {products?
    <div className='parent-container'>
    {displayProducts.map(
        (product)=>(<Product key={product.id} prod={product}/> )
    )}
    </div> : '<p> Loading Products.. </p>'
    }
    </div> 
    </>
  )
}

export default AllProducts4