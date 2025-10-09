import React, { useEffect, useState } from 'react'
import axios from 'axios'
const NavList1 = ({handleClick}) => {

 const[products,setProducts]=useState([])

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
        setProducts(apiproducts.data)
        }
        catch(error)
        {
      console.log(error)
        }
    }

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

export default NavList1