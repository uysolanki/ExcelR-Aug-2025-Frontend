import products from './data/products.js'

let electronicProducts=products.filter(
    (product)=>(product.category==='electronics')
)

console.log(electronicProducts)