import React from 'react'
import '../CSS/index.css'

export default function Cards(props) {
  return (
    <>
    <figure className="snip1527 ml-3 mr-3 items-center rounded-lg">
      <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg" alt="pr-sample23" /></div>
      <figcaption>
          <div className="date"><span className="day">28</span><span className="month">Oct</span></div>
          <h3>The World Ended Yesterday</h3>
          <p>

          You know what we need, Hobbes? We need an attitude. Yeah, you can't be cool if you don't have an attitude.
          </p>
      </figcaption>
      <a><button className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Get Recipe</button></a>
    </figure>
    </>
  )
}
