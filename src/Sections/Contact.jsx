import React from 'react'
import {contactInfo} from '../Data/Data'
import ContactCard from '../Components/ContactCard'
import '../Style/Contact'

function Contact() {
  return (
    <>
    <h1>Contact</h1>
    <div className='contact-info'>
        {contactInfo.map((item, id) => {
            return (
                <ContactCard  key={id} img={item.img} text={item.text}/>
            )
        })}
        
    </div>
    </>
  )
}

export default Contact