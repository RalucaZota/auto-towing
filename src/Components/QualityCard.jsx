import React from 'react'
import '../Style/QualityCard.scss';


function QualityCard({image, title, text}) {
  return (
  <>
  <div className='quality-card'>
    <img src={image} alt="image" />
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
  </>
  )
}

export default QualityCard