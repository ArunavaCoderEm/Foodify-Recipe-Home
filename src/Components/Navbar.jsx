import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../public/logo.png' 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-slate-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <NavLink to="/" className="flex items-center text-black font-semibold text-2xl">
          <img src={Logo} alt='logo' className='w-10 h-10 m-2 rounded-md' />
          <span className='text-violet-700 font-bold'>f</span>oodi<span className='text-violet-700 font-bold'>f</span>y
        </NavLink>
        <button onClick={toggleMenu} type="button" className="absolute top-4 right-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-900" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          )}
        </button>
        <div className={`md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-none mr-5 mb-2 rounded-lg bg-transparent md:flex-row md:space-x-8">
            <li>
              <NavLink exact to='/' activeClassName="text-slate-300" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-violet-700 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent font-bold">Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' activeClassName="text-slate-300" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-violet-700 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent font-bold">About</NavLink>
            </li>
            <li>
              <NavLink to='/feature' activeClassName="text-slate-300" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0 dark:text-violet-700 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent font-bold">Features</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
