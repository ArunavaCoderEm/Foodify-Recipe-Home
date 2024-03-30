import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../Components/Cards';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Trending() {

  const [trend,setTrend] = useState([])

  useEffect(() => {
    gettrending();
  },[]);

  const gettrending = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.MY_FOOD_API_KEY}`,
    );
    try {
      const res = await data.json();  
      console.log(res);               
      setTrend(res.recipes);
    } catch (error) {
       console.log(error.response) 
    }
  }

  return (
    <div className='relative flex-[0_0_90%] md:flex-[0_0_50%] overflow-visible '>
      <h2 className='text-4xl text-center text-white font-bold m-10'>Most Trending</h2>
        <Splide options={{
          gap       : 10,
          pagination: false,
          cover: true,
          drag: true,
          perPage: 3,
          arrows : false
        }}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        {/* {trend.map((recipe) => {
          return(
            <div key={recipe.id}>
              <SplideSlide>
                  <Card/>
                </SplideSlide>
              </div>
            );
          })} */}
    </Splide>
    </div>
  )
}
