import React from 'react'
import { useState,useEffect } from 'react';
import '../CSS/index.css'

export default function Landing() {
  const [today, setToday] = useState([]);

  useEffect(() => {
    getToday();
  }, []);

  const getToday = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=5b4c8f00d5dd4aff8650264d4dd67e95`,
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
    <div className='mobout h-96 rounded-md bg-slate-300 opacity-100 imgbut relative m-5 bg-[url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/37e19c53319193.592ffe63763e0.gif")]'>
      {today.map((recipe) => {
            return(
              <div key={recipe.id} className='grid grid-cols-7 overflow-hidden py-5 mobhid'>
                <div className="images col-span-2 relative nnn">
                  <img src={recipe.image} className='rounded-md opacity-90 w-96 h-80 mt-4 relative ml-5'/>
                </div>
                <div className="col-span-3 items-center ml-10 text-center">
                  <h4 className='text-white px-3 m-auto mb-10 rounded-full bg-sky-500 py-4 ml-5 text-xl font-semibold text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 tod'>Today's Pick For You</h4>
                  <mark className='tit px-3 text-center bg-clip-text text-transparent font-bold text-4xl mb-8 stylerq bg-gradient-to-r from-teal-500 via-purple-500'>" {(recipe.title).toUpperCase()} "</mark>
                  <h3 className='fog bg-slate-200 font-semibold py-2 rounded-lg opacity-95 nextim mb-7 w-full text-center px-3 text-pink-600'>"Recipes are the stories that food tells, capturing flavors, traditions, and memories within every ingredient."</h3>
                  <button className='tr focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-center'>Get Recipe</button>
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
