import React from 'react'
import { useEffect, useState } from 'react';

export default function Trending() {

  const [trend,setTrend] = useState([])

  useEffect(() => {
    gettrending();
  },[]);

  const gettrending = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=8049b7a083a541158b542d5af2b4a98e`,
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
    <div>
      {trend.map((recipe) => {
        return(
            <div key={recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image}/>
            </div>
          );
        })}
    </div>
  )
}
