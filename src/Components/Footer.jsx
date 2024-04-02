import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='h-auto mt-9 bg-violet-800 text-white text-center align-baseline font-semibold flex flex-row'>
        <div className="footer flex py-2 m-auto">
            <h4 className='py-1 w-50 text-left'>© All copyrights Reserved To Godard</h4>
        </div>
    </div>
    <div className='h-auto bg-violet-950 text-white text-center align-baseline font-semibold flex flex-row'>
        <div className="footer flex py-2 m-auto">
            <h4 className='py-1 w-50 text-left'>Made by Godard with vite react, tailwind & 💜</h4>
        </div>
    </div>
    </>
  )
}
