import React from 'react'
import './Footer.css'
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="grid-three-col">
            <div className="first-col">
               
                <ul>
                <h6>Reservation</h6>
                    <li><a className='nav-link' href="">Car Hire </a></li>
                    <li><a className='nav-link' href="">modify or cancel</a></li>
                    <li><a className='nav-link' href="">Get a receipt </a></li>
                </ul>
            </div>
            <div className="first-col">
               
                <ul>
                <h6>Customer servives </h6>
                    <li><a className='nav-link' href="">Help / fAQS</a></li>
                    <li><a className='nav-link' href="">press</a></li>
                    <li><a className='nav-link' href="">blog </a></li>
                    <li><a className='nav-link' href="">contact Us </a></li>

                </ul>
            </div>
            <div className="first-col">
           
                <ul>
                <h6>Company</h6>
                    <li><a className='nav-link' href="">About us </a></li>
                    <li><a className='nav-link' href="">carrer</a></li>
                    <li><a className='nav-link' href="">report & gorvenance </a></li>
                </ul>
            </div>
        </div>
          <hr className='lane'/>
     <div className="footer-content">
        <div className="footer-heading">
            <h5>LUXURYCARS</h5>
        </div>
        <div className="footer-logo">
            <div className="twitter">
             <FaTwitter/>
            </div>
            <div className="twitter">
            <FaFacebookF />
            </div>
            <div className="twitter">
            <BsInstagram  />
            </div>
           
        </div>
     </div>
      </div>
    </footer>
  )
}

export default Footer
