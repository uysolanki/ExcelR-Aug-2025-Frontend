import React from 'react'

const Test1 = () => {
 const cities=["Apple","Jaipur","Pune","Mumbai"]
  return (
    <div>
    <ul>
    {
    cities.map((city)=>(<li>{city}</li>))
    } 
	</ul>

        
    </div>
  )
}

export default Test1