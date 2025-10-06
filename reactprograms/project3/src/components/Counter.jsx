import React from 'react'
import { useState } from 'react';
import Button from './Button';
import Button1 from './Button1';


const Counter = () => {
    //let count=0;
    let [count,setCount]=useState(0)
    let [flag,setFlag]=useState(false)
    //hooks in react
    //use...()

    useState()
    function increment()
    {
       if(count<10)
       setCount(count=count+1);
    }

    function decrement()
    {
       if(count>0)
       setCount(count=count-1); 
    }

    function incrementBy2()
    {
       if(count<10)
       setCount(count=count+2);
    }

    function decrementBy2()
    {
       if(count>0)
       setCount(count=count-2); 
    }

    function toggleFlag()
    {
         setFlag(!flag)
    }
  return (
    <div>
        {/* <button onClick={increment}>Increment By 1</button>
        <button onClick={decrement}>Decrement By 1</button>
        <button onClick={incrementBy2}>Increment By 2</button>
        <button onClick={decrementBy2}>Decrement By 2</button> */}

        {/* <Button1 text="Increment By 1" handleClick={increment} bgcolor='red'/>
        <Button1 text="Decrement By 1" handleClick={decrement} bgcolor='yellow'/>
        <Button1 text="Increment By 2" handleClick={incrementBy2 } bgcolor='blue'/>
        <Button1 text="Decrement By 2" handleClick={decrementBy2} bgcolor='green'/> */}
        <Button1 text="Test" handleClick={toggleFlag} bgcolor={flag}/>
        <h1>{count}</h1>    
    </div>
  )
}


export default Counter

/*


props={
text:"Increment By 1",
handleClick: {increment},
bgcolor='red'
}
*/