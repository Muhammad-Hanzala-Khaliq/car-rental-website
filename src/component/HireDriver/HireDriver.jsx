import React from 'react'
import './HireDriver.css'
import img from '../../assets/driver-img.png'
const HireDriver = () => {
  return (
    <section className='Driver-section'>
      <div className="container">
        <div className="img">
            <img src={img} alt="" loading="lazy" />
            <div className="driver-content">
                <h3 className='driver-heading'>become a driver  </h3>
                <h3 className='driver-heading-2'>Your time. Your goals. You're the boss.  </h3>
               <p>Subscribe And Join Us</p>
               <div className="input-container">
               <input type="email" placeholder='EMAIL' />
               <button>Next</button>
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HireDriver
