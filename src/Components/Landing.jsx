import React from 'react'
import { useState,useEffect } from 'react';
import '../CSS/index.css'
import { Link } from 'react-router-dom';

export default function Landing() {
  const [today, setToday] = useState([]);

  useEffect(() => {
    getToday();
  }, []);
  console.log(import.meta.env.REACT_APP_SPOONACULAR_API_KEY)
  const getToday = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${import.meta.env.VITE_APP_SPOONACULAR_API_KEY}`,
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
    <div className='mobout h-auto rounded-md bg-slate-300 imgbut m-5 bg-[url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/37e19c53319193.592ffe63763e0.gif")]'>
      {today.map((recipe) => {
            return(
              <div key={recipe.id} className='grid grid-cols-7 overflow-hidden py-5 mobhid'>
                <div className="images col-span-2 relative nnn">
                  <img src={recipe.image} className='rounded-md opacity-97 w-96 h-80 mt-16 relative ml-5'/>
                </div>
                <div className="col-span-3 items-center ml-10 text-center">
                  <h4 className='text-white px-3 m-auto mb-10 rounded-full bg-sky-500 py-4 ml-5 text-xl font-semibold text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 tod'>Today's Pick For You</h4>
                  <div className="bll m-auto items-center justify-center text-center">
                    <mark className='tit text-center font-semibold px-1 mb-4'>"{(recipe.title).toUpperCase()}"</mark>
                  </div>
                  <h3 className='fog bg-slate-200 font-semibold py-2 rounded-lg opacity-95 nextim mb-7 w-full text-center px-3 text-pink-600 ml-5'>"Recipes are the stories that food tells, capturing flavors, traditions, and memories within every ingredient."</h3>
                  <Link to={'/ingred/' + recipe.id}><button className='tr focus:outline-none bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm px-5 py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-center font-semibold text-sky-200 font-mono'>Get Recipe</button></Link>
                </div>
                <div className="nnextim col-span-2">
                  <img src='./chef.png' className='transform -scale-x-100 rounded-md opacity-90 w-96 h-80 relative m-5'/>
                </div>
               </div>
            );
          })} 
    </div>
    </>
  )
}
