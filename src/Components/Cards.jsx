import React from 'react'

export default function Cards(props) {
  return (
    <div class="container">
        <div class="wrapper">
        <div class="banner-image"> </div>
        <h1> {props.title}</h1>
        <p>Lorem ipsum dolor sit amet, <br/>
            consectetur adipiscing elit.</p>
        </div>
        <div class="button-wrapper"> 
        <button class="btn outline">DETAILS</button>
            <button class="btn fill">BUY NOW</button>
        </div>
    </div>
      
  )
}
