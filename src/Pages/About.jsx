import React from 'react'
import '../CSS/BodyTV.css'

export default function About() {
  return (
    <>
      <div className="">
          <img className="rounded-lg img w-96 h-96 m-auto" src="./me.png" alt="office content 1"/>
      </div>
      <div className="text-white text-center">
        <h2 className="text-3xl mt-4 font-bold mb-5">Hello ! I'm Arunava Dutta</h2>
        <p className="mb-4 mx-4 text-left text-xl text-gray-400">I have a genuine passion for coding, finding joy and fulfillment in the process of creating software solutions. My proficiency spans various programming languages including Python, C, and C++, allowing me to delve deep into problem-solving and algorithmic challenges. Additionally, I possess a strong command of web development technologies such as HTML, CSS, and JavaScript, enabling me to craft engaging and dynamic web experiences.</p>
        <p className="mb-4 mx-4 text-left text-xl text-gray-400">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.My journey in development has been enriched by my exploration of modern frameworks like Vite, React, Tailwind CSS, and Bootstrap. These tools not only enhance my productivity but also empower me to bring my ideas to life in a more efficient and effective manner.</p>
        <p className="mb-4 mx-4 text-left text-xl text-gray-400">
        One of my proudest accomplishments is the collection of projects showcased on my GitHub profile. Each project represents not just lines of code, but a journey of learning, creativity, and innovation. Through these projects, I've honed my skills, tackled challenges, and gained invaluable experience that continues to fuel my passion for coding.
        </p>

        <a href='https://meard.vercel.app/' target="_blank" className='text-xl font-semibold mt-5 text-sky-500'>Visit My Portfolio Here</a>
      </div>
    </>
  )
}
