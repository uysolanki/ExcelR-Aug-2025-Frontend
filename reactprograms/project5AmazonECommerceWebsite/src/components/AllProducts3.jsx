import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import NavList from './NavList'
import SearchBar from './SearchBar'
import Product from './Product'
import Navbar1 from './Navbar1'
import NavList1 from './NavList1'
const AllProducts3 = () => {

    const[displayProducts,setdisplayProducts]=useState([])
    const[buProducts,setBuProducts]=useState([])
    const[counter,setCounter]=useState(0)
    useEffect(
        ()=>{
            loadData()
        },[]      //[] - once when the component loads,  
                  //[displayProducts] - whenever displayProducts will be modified useEffect will be triggered
    )             // not specied - will be invoked on the modification of any state variable
    async function loadData()
    {
        try
        {
        const apiproducts=await axios.get("http://localhost:8087/products/getAllProducts")
        setdisplayProducts(apiproducts.data)
        setBuProducts(apiproducts.data)
        }
        catch(error)
        {
      console.log(error)
        }
    }

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
    <Navbar1 handleClick={filterProductsByCategory}/>
   
    <NavList1 handleClick={filterProductsByCategory}/>
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

export default AllProducts3