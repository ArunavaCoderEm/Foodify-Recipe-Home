import React from 'react'
import { useState,useEffect } from 'react';

export default function Landing() {
  const [today, setToday] = useState([]);

  useEffect(() => {
    getToday();
  }, []);

  const getToday = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=76ebd32ecef6493f811063df0bc5aaf8`,
    );
    const check = localStorage.getItem('today');
    if(check){
      console.log(check);
      setToday(JSON.parse(check))
    }
    else{
      console.log(check);
      const res = await data.json();  
      console.log(res);
      localStorage.setItem('today',JSON.stringify(res.recipes));               
      setToday(res.recipes);
      console.log(today);
    }
  }
  return (
    <>
    <div className='w-100 h-96 rounded-md bg-slate-300 m-5'>
        {today.map((recipe) => (
          <div key={recipe.id}>
            <div className="images">
              <img src={recipe.image} className='rounded-md m-1'/>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}
