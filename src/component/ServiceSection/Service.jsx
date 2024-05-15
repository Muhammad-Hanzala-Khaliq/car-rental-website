import React from 'react'
import './Service.css'
import service from '../../assets/service-img.png'

const Service = () => {
  return (
    <section className='Service' id="service">
      <div className="container">
        <div className="service-flex">
            <div className="service-image">
                <div className="img-box">
                    <img src={service} alt="" loading="lazy" />
                </div>
                <div className="liquid-shape">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F7DA6F" d="M40,-63.3C51.8,-62.6,61.2,-51.6,70.6,-39.4C80,-27.2,89.4,-13.6,84.8,-2.6C80.2,8.3,61.7,16.6,50,25C38.4,33.3,33.7,41.7,26.5,47.6C19.3,53.4,9.7,56.7,-0.8,58C-11.2,59.3,-22.4,58.8,-34.5,55.8C-46.7,52.8,-59.7,47.4,-64.2,37.7C-68.7,28,-64.6,14,-66.9,-1.3C-69.2,-16.6,-77.8,-33.3,-75.8,-47.3C-73.8,-61.3,-61.2,-72.7,-46.8,-71.9C-32.4,-71.1,-16.2,-58.2,-1,-56.4C14.1,-54.6,28.3,-64,40,-63.3Z" transform="translate(100 100)" />
</svg>
                </div>
               </div>
           
           <div className="service-content">
            <h3 className="service-heading">Our Services
            </h3>
            <div className="service-flex-item">
            <div className="first-service-flex">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
    <path fill="#F1BC00" d="M61.7,-19.6C67.3,-2.7,50.6,21.9,28.9,37.1C7.1,52.3,-19.6,58,-36.9,46.4C-54.2,34.8,-62.1,6,-54.4,-13.7C-46.7,-33.5,-23.4,-44.3,2.3,-45C28,-45.8,56,-36.5,61.7,-19.6Z" transform="translate(100 100)" />
  </svg>
  <div className="text-content">
    <h5>Car Hire</h5>
    <p>We pride ourselves in always going the extra mile for our customers.</p>
  </div>
</div>
              <div className="first-service-flex">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
    <path fill="#F1BC00" d="M61.7,-19.6C67.3,-2.7,50.6,21.9,28.9,37.1C7.1,52.3,-19.6,58,-36.9,46.4C-54.2,34.8,-62.1,6,-54.4,-13.7C-46.7,-33.5,-23.4,-44.3,2.3,-45C28,-45.8,56,-36.5,61.7,-19.6Z" transform="translate(100 100)" />
  </svg>
  <div className="text-content">
    <h5>Car Sales</h5>
    <p>We sell the best luxury cars across the world at a competitive price.</p>
  </div>
</div>
                        <div className="first-service-flex">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
    <path fill="#F1BC00" d="M61.7,-19.6C67.3,-2.7,50.6,21.9,28.9,37.1C7.1,52.3,-19.6,58,-36.9,46.4C-54.2,34.8,-62.1,6,-54.4,-13.7C-46.7,-33.5,-23.4,-44.3,2.3,-45C28,-45.8,56,-36.5,61.7,-19.6Z" transform="translate(100 100)" />
  </svg>
  <div className="text-content">
    <h5>Hire a driver</h5>
    <p>you want to travel and fell confortable , our drivers are available. </p>
  </div>
</div>
            </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Service
