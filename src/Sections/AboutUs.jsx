import React from 'react';
import '../Style/AboutUs.scss'
import { textAboutUs } from '../Data/Data';
import img from '../assets/description-img.jpg'

function AboutUs() {
  return (
    <>
      <div className='about-us'>
        <section className='section-one'>
          <div className='description'>
            <h1>De ce X?</h1>
            <p>{textAboutUs.text}</p>
          </div>
          <img src={img} alt="description-img" />
        </section>
      </div>
    </>
  );
}

export default AboutUs;
