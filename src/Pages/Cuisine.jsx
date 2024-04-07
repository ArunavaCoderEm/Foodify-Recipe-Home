import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import {motion} from'framer-motion';
import Card from '../Components/Cards';
import '../CSS/BodyTV.css'

export default function Cuisine() {

    const [cuisine, setCuisine] = useState([]);

    let params = useParams()

    useEffect(() => {
        getCuisine(params.type);
      },[params.type]);    

    const getCuisine = async (typeid) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_SPOONACULAR_API_KEY}&cuisine=${typeid}`,
        );
        const res = await data.json();               
        setCuisine(res.results);
    }  

  return (
    <>
        <div className="hero flex mt-10 flex-col animate-slidein700">
            <h1 className='text-white text-center mb-10 mt-5 font-bold text-3xl'>Your <span className='text-violet-500'>{params.type}</span> Recipes Are As Follows :</h1>
            <div className="gridd grid grid-cols-3 mr-9 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 ml-9">
                {cuisine.map((recipe) => {
                    return(
                        <div key={recipe.id} className='ml-10'>
                            <Card title={recipe.title} image={recipe.image} tag={params.type.slice(0,2)} undtag={params.type.slice(2,4)} ing={'/ingred/'+ recipe.id}/>
                        </div>
                        );
                    })}
            </div>
        </div>
    </>
  )
}
