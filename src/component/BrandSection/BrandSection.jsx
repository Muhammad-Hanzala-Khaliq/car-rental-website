import React from 'react'
import './BrandSection.css'
import audi from '../../assets/audiii 1.png'
import merco from '../../assets/merco 1.png'
import range from '../../assets/range 1.png'
import tesla from '../../assets/tesla 1.png'
import ferrari from '../../assets/ferrarii 1.png'



const BrandSection = () => {
  return (
    <section className='Brand'>
      <div className="container">
        <h3 className='brand-heading'>our luxury Brand </h3>
        <div className="brand-flex">
            <div className="first-brand-flex">
          
    <img src={audi} alt="" />
    <p>Audi</p>

           
            </div>
            <div className="first-brand-flex">
            <div className="img">
            <img src={merco} alt="" />
            </div>
            <div className="para">
            <p>Mercedez</p>
            </div>
            </div>
            <div className="first-brand-flex">
            <img src={range} alt="" />
            <p>land rover</p>
            </div>
            <div className="first-brand-flex">
            <img src={ferrari} alt="" />
            <p>Ferrari</p>
            </div>
            <div className="first-brand-flex">
            <img src={tesla} alt="" />
            <p>Tesla</p>
            </div>
        </div>

        <div className="store__para">
          <p>See the Store</p>
     
        </div>
      </div>
    </section>
  )
}

export default BrandSection
