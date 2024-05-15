import React from 'react'
import './HeroSection.css'
import Img from '../../assets/Hero-img.png'

const HeroSection = () => {
  return (
    <>
      <section className='hero_section'>
        <div className="container">
     <img src={Img} className='hero-img' alt=""  />

     <div className="hero_content">
        <h3 className='hero_heading'>Safer ,Faster and Comfortable</h3>
        <p className='hero_para'>Get in touch with our
luxury cars</p>
<button className='hero-btn'><a href="">Rent Now</a></button>
     </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
