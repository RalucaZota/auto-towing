import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import '../Style/Carousel.scss';

function CarouselFadeExample() {
  return (
    <Carousel fade className='carousel'>
      <Carousel.Item>
        <div className='slide-one'>
          <Carousel.Caption>
            <p className='carousel-text'>Transport național pentru vehicule.</p>
            <a href='#contact'>CONTACT</a>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='slide-two'>
          <Carousel.Caption>
            <p className='carousel-text'>Transport național pentru vehicule.</p>
            <a href='#contact'>CONTACT</a>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='slide-three'>
          <Carousel.Caption>
            <p className='carousel-text'>Transport național pentru vehicule.</p>
            <a href='#contact'>CONTACT</a>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
