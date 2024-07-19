import React from 'react';
import '../Style/ContactCard.scss';
function ContactCard({ img, text, phones }) {
  function Email(emailAddress) {
    const subject = encodeURIComponent('Salut!');
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
    window.location.href = mailtoLink;
  }
  return (
    <div className='contact-card'>
      <img src={img} alt='img' />
      {text && <h2>{text}</h2>}
      {phones && phones.length > 0 && (
        <div className='phones'>
          {phones.map((phone, index) => (
            <h2 key={index}>{phone.trim()}</h2>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactCard;
