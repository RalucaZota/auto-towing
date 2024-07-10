import React from 'react';
import '../Style/Home.scss';
import homePhoto from '../assets/home-photo.jpg';
import towingHome from '../assets/towing-home.jpg'
import Card from '../Components/Card.jsx';
import { homeServices } from '.././Data/HomeServices.js';
import OtherServicesCard from '../Components/OtherServicesCard.jsx'

function Home() {
  return (
    <>
      <section className='section-one'>
        <div className='home-photo'>
            <img src={homePhoto} alt="" />
        </div>
        <div className='home-services'>
          <div className='services'>
            {homeServices.map((item, id) => {
              return (
                <Card
                  key={id}
                  image={item.image}
                  title={item.title}
                  paragraph={item.paragraph}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className='section-two'>
       <OtherServicesCard/>
      </section>
    </>
  );
}

export default Home;
