import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RichTextBox from './pages/RichTextBox'
import AllProducts3 from './pages/AllProducts3'
import MenuBar from './components/MenuBar'
import MenuBar1 from './components/MenuBar1'
import SingleProduct from './pages/SingleProduct'
const App = () => {
  return (
    <>
     <Router>
      <MenuBar1/>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/rich" element={<RichTextBox />} />
            <Route path="/shop" element={<AllProducts3 />} />
            <Route path="/login" element={<LandingPage />} />
            <Route path="/signIn" element={<LandingPage />} />
            <Route path="/single/:apple" element={<SingleProduct />} />
        </Routes>
     </Router>
    </>
  )
}

export default App