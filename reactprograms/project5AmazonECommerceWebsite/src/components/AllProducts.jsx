import React from 'react'
import products from '../data/products'
import './AllProducts.css'

const AllProducts = () => {
    console.log(products)
  return (
    <div className='parent-container'>
          {products.map(
            (product)=>{
            return <div className="card" style={{'width': '18rem'}}>
                     <img className="card-img-top product-image" src={product.image} alt="Card image cap"/>
                            <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description.slice(0,30)}... </p>
                                    <a href="#" className="btn btn-primary">ADD TO CART</a>
                            </div>
                </div>
            }
          )}  
    </div>
  )
}

export default AllProducts