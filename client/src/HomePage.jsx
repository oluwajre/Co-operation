import React from 'react'
import Home from './components/home/home'
import Navbar from './components/Navbar/Navbar'
import Faq from './components/faq/faq'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Faq />
    </div>
  )
}

export default HomePage