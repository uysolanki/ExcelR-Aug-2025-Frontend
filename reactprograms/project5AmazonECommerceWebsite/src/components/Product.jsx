import React from 'react'
import './Product.css'
const Product = ({prod}) => {
  return (
    <>
        <div className="card" style={{'width': '18rem'}}>
                     <img className="card-img-top product-image" src={prod.image} alt="Card image cap"/>
                            <div className="card-body">
                                    <h5 className="card-title">{prod.title}</h5>
                                    <p className="card-text">{prod.description.slice(0,30)}... </p>
                                    <a href="#" className="btn btn-primary">ADD TO CART</a>
                            </div>
        </div>
    </>
  )
}

export default Product