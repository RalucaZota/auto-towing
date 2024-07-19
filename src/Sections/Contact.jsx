import React from 'react'
import {contactInfo} from '../Data/Data'
import ContactCard from '../Components/ContactCard'
import '../Style/ContactCard.scss'
import '../Style/Contact.scss'
import email from '../assets/email.png'
import map from '../assets/map.png';
import phoneCall from '../assets/phone-call.png';

function Contact() {

  function Email(emailAddress) {
    const subject = encodeURIComponent('Salut!');
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
    window.location.href = mailtoLink;
  }

  function CallMe1() {
    window.location.href = 'tel: +40720261991'
  }

  function CallMe2() {
    window.location.href = 'tel: +40 731 682 466'
  }

  return (
    <>
    <h1 id='contact'>CONTACT</h1>
    <div className='contact-info' >
    <div className='contact-card' onClick={() => Email('13carfix@gmail.com')}>
      <img src={email} alt='img' />    
      <h2>13carfix@gmail.com</h2>
    </div>
    <div className='contact-card'>
      <img src={map} alt='img' />    
      <h2>Strada Grânelor, Fetești-Gară 925150</h2>
    </div>
    <div className='contact-card'>
      <img src={phoneCall} alt='img' />    
      <h2 onClick={CallMe1}>+40 720 261 991</h2>
      <h2 onClick={CallMe2}>+40 731 682 466</h2>
    </div>
        
    </div>
    <div className='map-container'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8567827500347!2d27.808618499999998!3d44.4155845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b0659052a2071f%3A0xcdb20080506e730f!2sCarFix%20Garage!5e0!3m2!1sro!2sro!4v1721293736186!5m2!1sro!2sro" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
    </div>
    </>
  )
}

export default Contact