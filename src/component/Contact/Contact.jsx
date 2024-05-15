import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact' id="contact">
      <div className="container">
       <div className="contact-heading">
        <h4>For Making Websites Contact Us</h4>

        <div className="contact-container">
               <input type="email" placeholder='hanzallahkhaliq@gmail.com' />
               <button className='btn-contact'>Message</button>
               </div>
    
       </div>
      </div>
    </section>
  )
}

export default Contact
