import React, { useContext, useState } from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { ProductContext } from '../contexts/ProductContextProvider'
import { Link, useParams } from 'react-router-dom'

const SingleProduct1 = () => {
    const {apple:id}=useParams()
     
    console.log(id)

    const {products}=useContext(ProductContext) 

    const singleProd=products.find(
        (prod)=>(prod.id==id)
    )
    const[product,setProduct]=useState(singleProd)
  return ( 
    <>
   
   {!product ?  
   
   "<h3>Loading Product... </h3>" :
   <div>
   <BreadCrumbs prod={product} />
   <div className="single-prod">
        <div className="card" style={{'width': '18rem'}}>
                <img className="card-img-top product-image" src={product.image} alt="Card image cap"/> 
                            <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p> {product.description}</p>
                                    <Link to="/shop"> <a className="btn btn-primary">BACK</a> </Link>
                            </div>
        </div> 
        <div className="prod-images">
                 <img  src={product.image} alt="Card image cap"/> 
                 <img  src={product.image} alt="Card image cap"/> 
                 <img  src={product.image} alt="Card image cap"/> 
        </div>
    </div>
    </div>
    }
    </>
  )
}

export default SingleProduct1