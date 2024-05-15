import React from 'react'
import './Lower.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";

const Lower = () => {
  return (
    <main className='lower'>
      <div className="container">
        <div className="lower-content">
            
                <h4 className='lower-heading'>Book your dream car now!</h4>
        <p className='lower-para'>Rent a car online now from one of our worldwide locations. With over 20 years’ experience in luxury car and customer services, all we need is your ID and you can book any car.</p>

        <div className="lower-flex-item">
            <div className="first-item">
            <IoLocationSharp className='lower-icon'/>
            </div>
            <div className="first-item">
            <IoLocationSharp className='lower-icon'/>
            </div>
            <div className="first-item">
            <FaRegCalendar className='lower-icon-calender' />
            </div>
            <button className='lower-btn'><a href="">Book</a></button>
        </div>
        </div>
        
      </div>
    </main>
  )
}

export default Lower
