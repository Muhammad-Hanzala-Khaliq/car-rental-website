import React, { useState } from 'react'
import './Available.css'
import api from './api';

const Available = () => {
    const [loop,setLoop] = useState(api)
  return (
    <section className='Available'>
      <div className="container">
        <h2 className='available-heading'>we have everything you need</h2>
        <div className="car-grid">
          {
            loop.map((value,id)=>{
                return  <div className="card" key={id}>
                 <div className="card-first-section">
                    <h5>{value.h5}</h5>
                </div>
                <div className="card-img-section">
                    <img src={value.image} alt="" loading="lazy" />
                </div>
          <div className="card-third-section">
            <p>{value.Year}</p>
            <div className="card-third-flex">
                <div className="reading">
                {value.icons} 15k
                </div>
                <div className="auto">
                {value.icons2} Auto
                </div>
                <div className="auto">
                {value.icons3} Auto
                </div>
            </div>
            <h6>{value.h6}</h6>
            <div className="center-button">
            <button className='btn-third-section'><a href="">{value.btnText}</a></button>
            </div>
          </div>
          </div>
          
          
            })
          }

          </div>
      </div>
    </section>
  )
}

export default Available
