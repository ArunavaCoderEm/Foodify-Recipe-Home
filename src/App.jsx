import React from 'react'
import './CSS/App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Landing from './Components/Landing'
import VegI from './Components/VegI'

export default function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer />
    </>
  )
}
