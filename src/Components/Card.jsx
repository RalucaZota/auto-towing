import React from 'react';
import '../Style/Card.scss'


function Card({ image, title, paragraph }) {
  return (
    <>
      <div className='card'>
        <img src={image} alt='image' className='card-img'/>
        <div className='card-text'>
          <h4>{title}</h4>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
