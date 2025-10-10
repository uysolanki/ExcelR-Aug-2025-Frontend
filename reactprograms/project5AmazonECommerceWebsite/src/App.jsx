import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RichTextBox from './pages/RichTextBox'
import AllProducts3 from './pages/AllProducts3'
import MenuBar from './components/MenuBar'
const App = () => {
  return (
    <>
     <Router>
      <MenuBar/>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/rich" element={<RichTextBox />} />
            <Route path="/shop" element={<AllProducts3 />} />
            <Route path="/login" element={<LandingPage />} />
            <Route path="/signIn" element={<LandingPage />} />
        </Routes>
     </Router>
    </>
  )
}

export default App