import React from 'react'

const Test = () => {
  const cities=["Delhi","Jaipur","Pune","Mumbai"]
  return (
    <div>
       <ul>
    {
    cities.map((city)=>{
    console.log(city)
    return(<li>{city}</li>)
	})
    } 
	</ul>

        
    </div>
  )
}

export default Test