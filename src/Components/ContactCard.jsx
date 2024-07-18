import React from 'react'
import '../Style/ContactCard.scss'
function ContactCard({img, text}) {
  return (
    <div className='contact-card'>
        <img src={img} alt="img" />
        <h2>{text}</h2>
    </div>
  )
}

export default ContactCard