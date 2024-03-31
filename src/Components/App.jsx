import React from 'react'
import '../CSS/App.css'
import Navbar from './Navbar'
import Trending from '../Pages/Trending'
import VegI from '../Pages/VegI'

export default function App() {
  return (
    <>
      <Navbar/>
      <Trending/>
      <VegI/>
    </>
  )
}
