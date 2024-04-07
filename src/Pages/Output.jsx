import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Components/Cards';

export default function Output() {
    const [searched, setSearched] = useState([]);

    let params = useParams();

    useEffect(() => {
        getser(params.searched);
      },[params.searched]);    

    const getser = async (typeid) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_SPOONACULAR_API_KEY}&query=${typeid}`,
        );
        const res = await data.json();               
        setSearched(res.results);
    }
    
  return (
        <div className="hero flex mt-10 flex-col animate-slidein700">
        <h1 className='text-white text-center mb-10 mt-5 font-bold text-3xl'>Your Searched <span className='text-violet-500'>{params.searched.charAt(0).toUpperCase() + params.searched.slice(1)}</span> Recipes Are As Follows :</h1>
        <div className="gridd grid grid-cols-3 mr-9 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 ml-9">
            {searched.map((recipe) => {
                return(
                    <div key={recipe.id} className='ml-10'>
                        <Card title={recipe.title} image={recipe.image} tag={params.searched.slice(0,2)} undtag={params.searched.slice(2,4)} ing={'/ingred/'+ recipe.id}/>
                    </div>
                    );
                })}
        </div>
    </div>
  )
}
