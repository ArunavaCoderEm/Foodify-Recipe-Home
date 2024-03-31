import React, { useEffect, useState } from 'react';
import Card from './Cards';
import Slider from "react-slick";
import '../CSS/index.css'

export default function Trending() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=774ca53313b64a31ae899e4d76a881fc`);
    const check = localStorage.getItem('popular');
    if (check) {
      setTrend(JSON.parse(check));
    } else {
      try {
        const res = await data.json();
        console.log(res);
        localStorage.setItem('popular', JSON.stringify(res.recipes));
        setTrend(res.recipes);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

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
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='ml-9 mr-5'>
      <h2 className='text-4xl text-center text-white font-bold m-10'>Most Trending</h2>
      <Slider {...settings}>
        {trend.map((recipe) => (
          <div key={recipe.id}>
            <Card title={recipe.title} image={recipe.image} tag={'Tr'} undtag={'ending'} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
