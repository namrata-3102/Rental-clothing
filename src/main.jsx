import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./view/home.jsx"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import AllClothing from './view/AllClothing.jsx'
import Contact from './view/Contact.jsx'
import BookinPage from './view/BookinPage.jsx'
import ClothingDetails from './view/ClothingDetails.jsx'
const rootElement = createRoot(document.getElementById('root'))

rootElement.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/explore" element={<AllClothing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookinPage />} /> 
  <Route path="/clothing-details" element={<ClothingDetails />} /> 
      </Routes>
    </BrowserRouter>
  </div>
)
