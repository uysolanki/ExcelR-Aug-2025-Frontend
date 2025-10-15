import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RichTextBox from './pages/RichTextBox'
import AllProducts3 from './pages/AllProducts3'
import MenuBar from './components/MenuBar'
import MenuBar1 from './components/MenuBar1'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import AllProducts4 from './pages/AllProducts4'
import SingleProduct1 from './pages/SingleProduct1'
import RegisterUser from './pages/RegisterUser'
import AddProduct from './pages/AddProduct'
import AddProduct1 from './pages/AddProduct1'
const App = () => {
  return (
    <>
     <Router>
      <MenuBar1/>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/add" element={<AddProduct1 />} />
            <Route path="/shop" element={<AllProducts4 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<RegisterUser />} />
            <Route path="/single/:apple" element={<SingleProduct1 />} />
        </Routes>
     </Router>
    </>
  )
}

export default App