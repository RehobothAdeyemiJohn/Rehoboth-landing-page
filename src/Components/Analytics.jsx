import React from 'react'

const Analytics = () => {
  return (
    <div className='bg-white w-full px-9 py-15 m-auto grid md:grid-cols-2 md: gap-10 items-center'>
      <div className='grid '><img  className='w-[500px] rounded-4xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCxG5wA3o4O7LgVd-icflZ6A9C7iSYl8FqA&s" alt="" /></div>
      <div>
        <p className='text-green-600'>
          DATA ANALYTICS DASHBOARD
        </p>
        <h1 className='font-bold'>
            Manage Data Analytics Centrally 
        </h1>
        <p className='pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde, ab earum quae sed rem deserunt praesentium cum provident laborum assumenda id aliquid tenetur debitis placeat deleniti doloremque voluptates minus.</p>
        <button className=' bg-black text-green-400 m-auto w-30 items-center p-2 rounded'>Get started</button>
      </div>
    </div>
  )
}

export default Analytics
