import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../Components/Cards';
import Slider from "react-slick";

export default function Trending() {

  const [trend,setTrend] = useState([])

  useEffect(() => {
    gettrending();
  },[]);

  const gettrending = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=8049b7a083a541158b542d5af2b4a98e`,
    );
    try {
      const res = await data.json();  
      console.log(res);               
      setTrend(res.recipes);
    } catch (error) {
       console.log(error.response) 
    }
  }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className='ml-7 mr-5'>
      <h2 className='text-4xl text-center text-white font-bold m-10'>Most Trending</h2>
      <Slider {...settings}>
        <Card/>
        <Card/>
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
        </Slider>
      </div>
  )
}