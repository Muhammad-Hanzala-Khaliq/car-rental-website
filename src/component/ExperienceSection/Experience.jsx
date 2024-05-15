import React, { useState } from 'react'
import './Experience.css'
import Api from '../../component/ExperienceSection/Api'

const Experience = () => {
    const [iterate,setIterate] = useState(Api)
  return (
    <section className='Experience' id="about">
      <div className="container">
        <div className="heading">
            <h2>Fell the best experience with  our luxury car</h2>
        </div>
        </div>
        <div className="container grid-three-cols">
         {
            iterate.map((value,id)=>{
                return    <div className="experience-div" key={id}>
            <div className="experience-icon">
               {value.svg}
  <div className="icon-container">
  {value.icons}
  </div>
</div>
  
    <h5>{value.h5}</h5>
    <p>{value.p}</p>

            </div>
            })
         }
        </div>
     
    </section>
  )
}

export default Experience
