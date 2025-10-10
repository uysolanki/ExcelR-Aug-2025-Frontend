import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { Link, useParams } from 'react-router-dom'
import Product from '../components/Product'
import axios from 'axios'
const SingleProduct = () => {
  const {apple:id}=useParams()
  //const[pid,setPid]=useState(id)
  const[product,setProduct]=useState({})
  useEffect(
    ()=>{
        loadData()
    },[id]
  )

  async function loadData()
  {
    try
    {
    const apiproducts=await axios.get(`http://localhost:8087/products/${id}`)
    console.log(apiproducts)
    setProduct(apiproducts.data)
    }
    catch(error){console.log(error)}
  }
  return ( 
    <>
   {!product ?  "<h3>Loading Product... </h3>" :
   <div className="card" style={{'width': '18rem'}}>
                <img className="card-img-top product-image" src={product.image} alt="Card image cap"/> 
                            <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p>{product.description ? product.description.slice(0, 30) + '...' : ''}</p>
                                    <Link to="/shop"> <a className="btn btn-primary">BACK</a> </Link>
                            </div>
    </div> }
    </>
  )
}

export default SingleProduct