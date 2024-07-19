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
  return (
    <>
      <div className='topbar'>
        <div>
          <span>24/24 NON STOP</span>
          <a onClick={() => Email('13carfix@gmail.com')}>
            <img src={email} alt='email' />
            <span >13carfix@gmail.com</span>
          </a>
        </div>
        <a target='_blank' href='https://wa.me/0720261991?'>
          <img src={whatsapp} alt='whatsapp' height='35' width='35' />{' '}
          <span>0720261991</span>
        </a>
        <a target='_blank' href='https://wa.me/0731682466?'>
        <img src={whatsapp} alt='whatsapp' height='35' width='35' />{' '}
          <span>0731682466</span>
        </a>
      </div>
    </>
  );
}

export default TopBar;
