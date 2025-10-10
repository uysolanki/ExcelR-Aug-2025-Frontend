import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
const Product = ({prod}) => {
  return (
    <>
        <div className="card" style={{'width': '18rem'}}>
                <Link to={`/single/${prod.id}`}>     <img className="card-img-top product-image" src={prod.image} alt="Card image cap"/> </Link>
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