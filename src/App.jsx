import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import Newsletter from './Components/Newsletter'
import Cards from './Components/Card'
import Footer from './Components/Footerr'





const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footerr/>
    </div>
  )
}

export default App
