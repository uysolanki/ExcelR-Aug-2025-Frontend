import React from 'react'
import products from '../data/products.js'
const Navbar2 = () => {

    let categories=products.map(
        (product)=>(product.category)
    )
    console.log(categories)

    let uniqueCategories=new Set(categories)
    console.log(uniqueCategories)

    let categoryWithFurniture=[...uniqueCategories,'Furniture']

    console.log(categoryWithFurniture)
  return (
    <div>
            <ul>
                {
                    categoryWithFurniture.map(
                    (category)=>(<li>{category}</li>)
                    )
                }
            </ul>

    </div>
  )
}

export default Navbar2