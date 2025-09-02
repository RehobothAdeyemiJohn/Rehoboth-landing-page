import React,{useState,useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [Nav, setNav] = useState(true)

   const handleNav = ()=>{
  setNav(!Nav)
   }

 
  return (
    <div className='text-white flex justify-between border-b shadow-2xl p-4'>
      <h1 className='text-green-600 pl-9 font-bold text-3xl items-center '>Rehoboth.</h1>
      <ul className='hidden md:flex flex-row gap-4'>
        <li className="flex text-white font-light text-2xl">Home</li>
        <li className="flex text-white font-light text-2xl">Resources</li>
        <li className="flex text-white font-light text-2xl">About</li>
        <li className="flex text-white font-light text-2xl pr-7">Contact</li>
      </ul>
   <div onClick={handleNav} className='block md:hidden'>
  {!Nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/> }
  </div>
      <div className={!Nav ? 'p-4 fixed left-0 top-0 w-[60%] h-full bg-black' : 'fixed left-[-100%]'}>
        <h1 className='text-green-600 pl-9 font-bold text-3xl items-center '>Rehoboth.</h1>
      <ul className='uppercase p-4'>
        <li className="p-4 border-b border-y-blue-500 text-white font-light text-2xl">Home</li>
        <li className="p-4 border-b border-y-blue-500 text-white font-light text-2xl">Resources</li>
        <li className="p-4 border-b border-y-blue-500 text-white font-light text-2xl">About</li>
        <li className="p-4 border-b border-y-blue-500 text-white font-light text-2xl pr-7">Contact</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
