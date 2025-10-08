import React from 'react'
import products from '../data/products'
import Product from './Product'
import './AllProducts.css'

const AllProducts1 = () => {
  return (
    <>
    <div className='parent-container'>
    {products.map(
        (product)=>(<Product key={product.id} prod={product}/> )
    )}
    </div>
    </>
  )
}

export default AllProducts1