import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import {motion} from'framer-motion';
import Card from '../Components/Cards';
import '../CSS/BodyTV.css'

export default function type() {

    const [type, settype] = useState([]);

    let params = useParams()

    useEffect(() => {
        gettype(params.gettype);
      },[params.gettype]);    

    const gettype = async (typeid) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_SPOONACULAR_API_KEY}&type=${typeid}`,
        );
        const res = await data.json();               
        settype(res.results);
    }  

  return (
    <>
        <div className="hero flex mt-10 flex-col animate-slidein700">
            <h1 className='text-white text-center mb-10 mt-5 font-bold text-3xl'>Your <span className='text-violet-500'>{(params.gettype).charAt(0).toUpperCase() + (params.gettype).slice(1)}</span> Recipes Are As Follows :</h1>
            <div className="gridd grid grid-cols-3 mr-9 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 ml-9">
                {type.map((recipe) => {
                    return(
                        <div key={recipe.id} className='ml-10'>
                            <Card title={recipe.title} image={recipe.image} tag={params.gettype.slice(0,2)} undtag={params.gettype.slice(2,4)} ing={'/ingred/'+ recipe.id}/>
                        </div>
                        );
                    })}
            </div>
        </div>
    </>
  )
}
