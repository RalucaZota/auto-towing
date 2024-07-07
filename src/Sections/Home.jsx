import React from 'react';
import '../Style/Home.scss';
import homePhoto from '../assets/home-photo.jpg';
import Card from '../Components/Card.jsx';
import { homeServices } from '.././Data/HomeServices.js';

function Home() {
  return (
    <>
      <section className='home'>
        <div className='home-photo'></div>
        <div className='test'>
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
    </>
  );
}

export default Home;
