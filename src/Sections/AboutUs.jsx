import React, { useRef, useState, useEffect } from 'react';
import '../Style/AboutUs.scss';
import { textAboutUs } from '../Data/Data';
import img from '../assets/description-img.jpg';
import QualityCard from '../Components/QualityCard';
import professionalism from '../assets/professionalism.png';
import protection from '../assets/protection.png';
import punctuality from '../assets/punctuality.png';
import crashedCar from '../assets/crashedcar.jpg';
import waitingMan from '../assets/waitingman.jpg';
import towingcarlig from '../assets/towing-carlig.jpg';
import {Reviews} from '../Components/Reviews';


const useVisibility = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

function AboutUs() {
  const sectionTwoRef = useRef();
  const isVisible = useVisibility(sectionTwoRef);

  return (
    <>
      <div className='about-us' id='desprenoi'>
        <section className='section-one'>
          <div className='description'>
            <h1>DE CE CARFIX GARAGE?</h1>
            <p>{textAboutUs.text}</p>
          </div>
          <img src={img} alt='description-img' />
        </section>
        <section className='section-two' ref={sectionTwoRef}>
          <h1>CE OFERIM?</h1>
          <div className={`images-wrapper ${isVisible ? 'visible' : ''}`}>
            <img src={crashedCar} alt="crashedCar" />
            <QualityCard image={protection} title='Siguranta' text='Angajații noștri sunt atent instruiți pentru a manipula autovehiculele fără a produce avarii.'/>
            <img src={towingcarlig} alt="towingcarlig" />
          </div>
          <div className={`cards-wrapper ${isVisible ? 'visible' : ''}`}>
            <QualityCard image={professionalism} title='Profesionalism' text='Lucrăm la standarde europene și oferim întodeauna servicii de calitate și la prețuri avantajoase.'/>
            <img src={waitingMan} alt="waitingMan" />
            <QualityCard image={punctuality} title='Punctualitate' text='Ne deplasăm rapid pentru a interveni propt și deploca situația.'/>
          </div>
        </section>
        <Reviews/>
      </div>
    </>
  );
}

export default AboutUs;
