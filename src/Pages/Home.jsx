import React from 'react';
import Landing from '../Components/Landing';
import VegI from '../Components/VegI';
import Trending from '../Components/Trending';
import Category from '../Components/Category';


export default function Home() {
  return (
    <>
      <Landing/>
      <Category/>
      <Trending/>
      <VegI/>
    </>
  )
}
