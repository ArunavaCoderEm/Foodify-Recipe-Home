import React, { useEffect, useState } from 'react';
import Card from './Cards';
import Slider from "react-slick";
import '../CSS/index.css';
import '../CSS/BodyTV.css';

export default function Trending() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=5b6d2a37049c4d4daad26389b8ed64a8`);
    const check = localStorage.getItem('popular');
    if (check) {
      setTrend(JSON.parse(check));
    } else {     
      console.log(check);
      const res = await data.json();
      console.log(res);
      localStorage.setItem('popular', JSON.stringify(res.recipes));
      setTrend(res.recipes);

    }
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
    <div className='ml-9 hero hm'>
      <h2 className='text-4xl text-center text-white font-bold m-10'>Most Trending</h2>
      <Slider {...settings}>
        {trend.map((recipe) => (
          <div key={recipe.id}  className='ml-10'>
            <Card title={recipe.title} image={recipe.image} tag={'Tr'} undtag={'ending'} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
