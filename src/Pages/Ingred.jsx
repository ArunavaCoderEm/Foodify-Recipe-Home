import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../CSS/BodyTV.css'

export default function Ingred() {

    const [det, setDet] = useState({});
    const [act, setact] = useState('instruction');

    let params = useParams()

    useEffect(() => {
        getRec();
      }, [params.name]);

    const getRec = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_APP_SPOONACULAR_API_KEY}`)

        const res = await data.json();
        console.log(res);
        setDet(res);
    }

  return (
    <>
        <div className="flex flex-col">
            <div className="imgdet">
                <h1 className='text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center font-bold'>{det.title}</h1>
                <img src={det.image} className='w-96 m-auto mt-5 mb-10 rounded-md img' alt='image of food'/>
            </div>
            <div className="restdet m-auto w-full items-center">
                <div className="butt w-72 m-auto items-center">
                    <button className={' text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5 ml-6 ' + (act == 'instruction' ? 'active' : '')} onClick={() => setact('instruction')}>Instruction</button>


                    <button className= {'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-5 ' + (act == 'ingredient' ? 'active' : '')} onClick={() => setact('ingredient')}>Ingredient</button>
                </div>

                {act === 'instruction' && (                   
                    <div className="bg-violet-950 px-10 pb-5 pt-1 rounded-md mt-4">
                        <h3 dangerouslySetInnerHTML={{__html: det.summary}} className='font-semibold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-10'></h3>
                        <h3 dangerouslySetInnerHTML={{__html: det.instructions}} className='font-semibold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'></h3>
                    </div>    
                )}

                {act === 'ingredient' && (
                 <div className="bg-violet-800 h-96 mt-5 w-80 m-auto rounded-md"> 
                    <ul className='text-white'>
                        <div className="py-2 ml-4 font-semibold">
                        {det.extendedIngredients.map((ingr) => (
                            <li className='text-white mt-1' key={ingr.id}>{ingr.original}</li>
                        ))}
                        </div>
                    </ul>
                 </div> 
                )}
            </div>
        </div>
    </>
  )
}