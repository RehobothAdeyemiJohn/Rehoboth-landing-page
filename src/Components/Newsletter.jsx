import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white w-full py-20 m-auto px-6'>
        <div className='md:grid grid-cols-2'>
            <div>
      <h1 className='font-bold text-white md:text-xl'>Want tips & tricks to optimize your flow?</h1>
      <p className='pb-5'>Sign up to our newsletter and stay up to date.</p>
      </div>

      <div className='flex flex-col  gap-3 w-full md:w-auto'>
        <div className='md:flex md:flex-row gap-2'>
      <input type="text" placeholder='Enter you email' className='bg-white w-full text-black rounded h-8 p-3 my-5 md:my-0' />
      <button className='bg-green-400 text-black rounded w-25 h-9 font-semibold'>Notify me</button>
      </div>
      <p>We care about the  protection of your data. Read our <a href="#" className='text-green-400'>Privacy Policy</a>
      </p>
      </div>
       
       </div>
      
    </div>
  )
}

export default Newsletter
