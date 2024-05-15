import React from 'react'
import Navbar from './component/Navbar/Navbar'
import HeroSection from './component/HeroSection/HeroSection'
import Lower from './component/LowerHeroSection/Lower'
import Service from './component/ServiceSection/Service'
import Available from './component/Availble Cars/Available'
import BrandSection from './component/BrandSection/BrandSection'
import Experience from './component/ExperienceSection/Experience'
import HireDriver from './component/HireDriver/HireDriver'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Lower/>
    <Service/>
    <Available/>
    <BrandSection/>
    <Experience/>
    <HireDriver/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

