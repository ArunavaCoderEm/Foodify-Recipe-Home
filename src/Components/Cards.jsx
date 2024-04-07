import React from 'react'
import '../CSS/index.css'
import { Link } from 'react-router-dom'

export default function Cards(props) {
  return (
    <>
    <figure className="snip1527 m-auto items-center rounded-lg">
      <div className="image"><img src={props.image} alt="pr-sample23" /></div>
      <figcaption>
          <div className="date"><span className="day">{props.tag}</span><span className="month">{props.undtag}</span></div>
          <h3>{props.title}</h3>
          <p>
          "Savor the essence of culinary delight with our curated collection of mouthwatering recipes. From comforting classics to exotic flavors, indulge your palate and embark on a gastronomic journey like no other."
          </p>
      </figcaption>
      <Link to={props.ing}><button className='focus:outline-none bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-semibold text-sky-200 font-mono'>Get Recipe</button></Link>
    </figure>
    </>
  )
}
