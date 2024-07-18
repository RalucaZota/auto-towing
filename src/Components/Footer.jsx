import React from 'react';
import '../Style/Footer.scss';
import { CiFacebook } from 'react-icons/ci';
import { RiWhatsappLine } from 'react-icons/ri';
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  function Whatapp(phoneNumber) {
    const message = encodeURIComponent('Salut! Vreau să vorbesc cu tine.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url);
  }
  function Email(emailAddress) {
    const subject = encodeURIComponent('Salut!');
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
    window.location.href = mailtoLink;
  }

  return (
    <footer className='footer' id='footer'>
      <div className='footer-container'>
        <div className='footer-social-media'>
          <h4>Social Media</h4>
          <a
            href='https://www.facebook.com/profile.php?id=100074504376904'
            target='_blank'
            rel='norefferer'
          >
            <h5>
              <CiFacebook />
            </h5>
          </a>
          <a onClick={() => Whatapp('+40720261991')} href='/'>
            <h5>
              <RiWhatsappLine />
            </h5>
          </a>
          <a onClick={() => Email('13carfix@gmail.com')} href='/'>
            <h5>
            <AiOutlineMail />
            </h5>
          </a>
        </div>
        <div className='footer-contact'>
          <h4>Contact</h4>
          <p>+40 720 261 991/+40 731 682 466</p>
          <p>Email: 13carfix@gmail.com</p>
        </div>
        <div className='footer-program'>
          <h4>Program</h4>
          <p>NON STOP</p>
        </div>
      </div>
      <h6 className='developer'>
        ® All rights reserved by{' '}
        <a
          target='_blank'
          rel='norefferer'
          href='https://www.linkedin.com/in/lorena-raluca-zota/'
        >
          Lorena Raluca Zota
        </a>
      </h6>
    </footer>
  );
}

export default Footer;
