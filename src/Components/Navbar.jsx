import React from 'react'
import '../CSS/Nav.css'
import { useEffect } from 'react';

export default function Navbar() {

  return (
    <>
      <header className='border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]'>
          <div className='flex flex-wrap items-center gap-x-2 max-lg:gap-y-6'>
            <a href="javascript:void(0)">
              <h2 className='text-3xl font-bold'>FoodiFY</h2>
            </a>
            <button id="toggle" className='lg:hidden ml-auto'>
              <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <ul id="collapseMenu"
              className='lg:!flex lg:ml-14 lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
              <li className='max-lg:border-b max-lg:py-2 px-3'>
                <a href='javascript:void(0)'
                  className='lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a>
              </li>
              <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
                  className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</a>
              </li>
              <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
                  className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</a>
              </li>
            </ul>
            <div className='flex lg:ml-auto max-lg:w-full'>
              <div
                className='flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff]'>
                <input type='text' placeholder='Search some Recipe...'
                  className='w-full text-sm bg-transparent rounded text-black outline-none pr-2' />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                  className="cursor-pointer fill-gray-400">
                  <path
                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}
