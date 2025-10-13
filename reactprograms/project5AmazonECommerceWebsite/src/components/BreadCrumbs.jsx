import React from 'react'
import arrowImg from '../../public/Arrow.png'
import './BreadCrumbs.css'
const BreadCrumbs = ({prod}) => {
  return (
    <>
        <p className="breadcrumb">SHOP <img src={arrowImg} className="arrow"/> PRODUCTS <img src={arrowImg} className="arrow" /> {prod.category}<img src={arrowImg} className="arrow" /> {prod.title}</p>
    </>
  )
}

export default BreadCrumbs