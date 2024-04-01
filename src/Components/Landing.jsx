import React from 'react'
import { useState,useEffect } from 'react';
import '../CSS/index.css'

export default function Landing() {
  const [today, setToday] = useState([]);

  useEffect(() => {
    getToday();
  }, []);

  const getToday = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=1cdc7ead75fa480491e91ecd8d0ce40d`,
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
    <div className='h-96 rounded-md bg-slate-300 imgbut relative m-5 bg-[url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/37e19c53319193.592ffe63763e0.gif")]'>
      {today.map((recipe) => {
            return(
              <div key={recipe.id} className='grid grid-cols-7 overflow-hidden py-5'>
                <div className="images col-span-2 relative">
                  <img src={recipe.image} className='rounded-md opacity-90 w-96 h-80 mt-4 relative ml-5'/>
                </div>
                <div className="nextim col-span-3 items-center ml-10">
                  <h4 className='text-white px-3 m-auto mb-10 rounded-full bg-sky-500 py-4 ml-5 text-xl font-semibold text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500'>Today's Pick For You</h4>
                  <h1 className='px-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-3xl mb-8 stylerq'>" {(recipe.title).toUpperCase()} "</h1>
                  <h3 className='mb-10 w-full text-center px-3 text-violet-600'>"Recipes are the stories that food tells, capturing flavors, traditions, and memories within every ingredient."</h3>
                  <a className='ml-48 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-center'>Get Recipe</a>
                </div>
                <div className="nextim col-span-2">
                  <img src='./chef.png' className='transform -scale-x-100 rounded-md opacity-90 w-96 h-80 relative m-5'/>
                </div>
               </div>
            );
          })} 
    </div>
    </>
  )
}
