import React from 'react';
import '../Style/Topbar.scss';
import whatsapp from '../assets/whatsapp.png';
import email from '../assets/email.png';

function TopBar() {
  function Email(emailAddress) {
    const subject = encodeURIComponent('Salut!');
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
    window.location.href = mailtoLink;
  }

  function CallMe1() {
    window.location.href = 'tel: +40720261991'
  } 

  function CallMe2() {
    window.location.href = 'tel: +40720261991'
  } 

  return (
    <>
      <div className='topbar'>
        <div>
          <span>24/24 NON STOP</span>
        </div>
        <div className='topbar-numbers'>
          <a target='_blank' href='https://wa.me/0720261991?'>
            <img src={whatsapp} alt='whatsapp' height='35' width='35' />{' '}
          </a>
            <span onClick={CallMe1} >0720261991</span>

          <a target='_blank' href='https://wa.me/0731682466?'>
            <img src={whatsapp} alt='whatsapp' height='35' width='35' />{' '}
          </a>
            <span onClick={CallMe2} >0731682466</span>
        </div>
      </div>
    </>
  );
}

export default TopBar;
