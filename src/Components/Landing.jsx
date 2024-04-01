import React from 'react'
import { useState,useEffect } from 'react';

export default function Landing() {
  const [today, setToday] = useState([]);

  useEffect(() => {
    getToday();
  }, []);

  const getToday = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=6bc37ab2227240df9f772a9f81ac0859`);
    const check = localStorage.getItem('today');
    if (!check) {
      setToday(JSON.parse(check));
    } else {     
      console.log(check);
      const res = await data.json();
      console.log(res);
      localStorage.setItem('today', JSON.stringify(res.recipes));
      setToday(res.recipes);

    }
  };
  return (
    <>
    <div className='w-100 h-96 rounded-md bg-slate-300 m-5'>
        {today.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.image}/>
          </div>
        ))}
    </div>
    </>
  )
}
