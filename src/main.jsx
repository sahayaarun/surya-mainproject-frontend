import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// This two lines
import axios from 'axios';
axios.defaults.baseURL = 'https://surya-mainproject-backend-production.up.railway.app';
axios.defaults.withCredentials = true; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)