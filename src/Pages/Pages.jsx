import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Type from './Type'
import {Routes,Route} from 'react-router-dom'
import Feature from './Feature'
import About from './About'
import Search from '../Components/Search'

export default function Pages() {
  return (
    <>
    <Navbar/>
    <Search/>
    <Routes>  
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/feature' element={<Feature/>} />
        <Route path='/cuisine/:type' element={<Cuisine/>} />
        <Route path='/type/:gettype' element={<Type/>} />
    </Routes>
    <Footer />
    </>
  )
}
