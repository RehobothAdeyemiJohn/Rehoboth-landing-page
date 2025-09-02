import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='flex flex-col justify-center items-center pb-20 mt-15 mx-auto text-center'>
      <p className='text-green-400 font-bold text-xs md:text-md py-1.5'>GROWING WITH DATA ANALYTICS</p>
      <h1 className='font-bold text-2xl md:text-4xl py-1.5'>Grow with data.</h1>
      <div className='flex flex-row px-5 py-1.5'>
        <p className='font-bold text-sm py-1 md:text-2xl'> Fast, flexible financing for 
         </p>
            <ReactTyped className='font-bold text-sm py-1 pl-2 md:text-2xl text-gray-500'
      strings={[
        'BTB',
        'BTC',
        'SASS'
      ]}
      typeSpeed={120}
      backSpeed={50}
      loop
    />
     </div>
      <p className='px-1 mx-auto text-gray-500 md:text-xl'>
        Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
      </p> <br />
      <button className='rounded-lg bg-green-600 h-10 w-40 text-black p-2'>Get started</button>
      </div>
      
    </div>
  )
}

export default Hero
