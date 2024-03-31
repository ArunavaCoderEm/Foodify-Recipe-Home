import React from 'react'
import '../CSS/App.css'
import Navbar from './Navbar'
import Trending from '../Pages/Trending'
import VegI from '../Pages/VegI'
import Landing from '../Pages/Landing'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <Navbar/>
      <Landing />
      <Trending/>
      <VegI/>
      <Footer />
    </>
  )
}
