import React from 'react'
import { useEffect, useState } from 'react';
import Card from './Cards';
import Slider from "react-slick";

export default function VegI() {

  const [veg,setveg] = useState([])

  useEffect(() => {
    getveging();
  },[]);

  const getveging = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=5354fe010bb74b809b04e5b395b41cf8&tags=vegetarian`,
    );
    const check = localStorage.getItem('veg');
    if(check){
      console.log(check);
      setveg(JSON.parse(check))
    }
    else{
      console.log(check);
      const res = await data.json();  
      console.log(res);
      localStorage.setItem('veg',JSON.stringify(res.recipes));               
      setveg(res.recipes);
    }
  }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
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
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='ml-9 hero'>
      <h2 className='text-4xl text-center text-white font-bold m-10'>Veggies For You</h2>
      
      <Slider {...settings}>
         {veg.map((recipe) => {
           return(
             <div key={recipe.id} className='ml-10'>
                   <Card title={recipe.title} image={recipe.image} tag={'V'} undtag={'eg'}/>
              </div>
             );
            })} 
        </Slider>
      </div>
  )
}
