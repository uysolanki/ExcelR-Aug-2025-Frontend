import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';  
import TestContextProvider from './contexts/TestContextProvider.jsx';
import DemoContextProvider from './contexts/DemoContextProvider.jsx';
import UserContextProvider from './contexts/UserContextProvider.jsx';
import HelloContextProvider from './contexts/HelloContextProvider.jsx';
import ProductContextProvider from './contexts/ProductContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <UserContextProvider>
       <HelloContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
      </HelloContextProvider>
    </UserContextProvider>
 // </StrictMode>,
)
