import captain,{batsmen as bat,ipl} from './test.js'
import products from './products.js'


console.log(`I like ${bat}`)
console.log(`My Fav Bowler is ${ipl.bowler}`)

console.log(`Captain ${captain}`)

let allCategories=products.map(
    (product)=>(product.category)
)

console.log(allCategories)

let uniqueCategories=new Set(allCategories)
console.log(uniqueCategories)