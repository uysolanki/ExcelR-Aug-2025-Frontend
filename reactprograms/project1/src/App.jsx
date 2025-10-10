import React from 'react'
import './App.css'
const App = () => {
  return (
    <div>
  <div class="parent-container">
    <div class="card">
      <img src="/man1.jpeg" alt="Product 1"/>
      <button className="amozon-button">Add to Cart</button>
    </div>
    
    <div class="card">
      <img src="/man2.jpeg" alt="Product 2"/>
      <button className="amozon-button">Add to Cart</button>
    </div>

    <div class="card">
      <img src="/man3.jpeg" alt="Product 3"/>
      <button className="amozon-button">Add to Cart</button>
    </div>

    <div class="card">
      <img src="/man4.jpeg" alt="Product 4"/>
      <button className="amozon-button">Add to Cart</button>
    </div>
    </div>
    </div>
  )
}

export default App