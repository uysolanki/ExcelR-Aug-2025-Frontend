import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProductContext=createContext()

const ProductContextProvider = ({children}) => {

    const [products,setProducts]=useState()

    useEffect(
        ()=>{
            loadProducts()
        },[]
    )

    async function loadProducts()
    {
         try
        {
        const apiproducts=await axios.get("http://localhost:8083/get-all-products")
        //const apiproducts=await axios.get("https://fakestoreapi.com/products")
        console.log(apiproducts.data)
        setProducts(apiproducts.data)
        }
        catch(error)
        {
      console.log(error)
        }
    }

   // let contextValue={products,setProducts}

  return (
    <ProductContext.Provider value={{products,setProducts}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider