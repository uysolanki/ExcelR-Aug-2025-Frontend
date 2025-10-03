import React from 'react'
import { useState } from 'react';


const Counter = () => {
    //let count=0;
    let [count,setCount]=useState(0)
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
  return (
    <div>
        <button onClick={increment}>Increment By 1</button>
        <button onClick={decrement}>Decrement By 1</button>
        <button onClick={incrementBy2}>Increment By 2</button>
        <button onClick={decrementBy2}>Decrement By 2</button>
        <span>{count}</span>
    </div>
  )
}

export default Counter