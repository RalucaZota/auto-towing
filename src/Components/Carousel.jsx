import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import '../Style/Carousel.scss';

function CarouselFadeExample() {
  return (

    <Carousel fade className='carousel'>
      <Carousel.Item>
      <img className='carousel-slide'
          src={slide3}
          alt="First slide"
        />
        <Carousel.Caption>
          <p className='carousel-text'>National transport for vehicles and others.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img

          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p className='carousel-text'>National transport for vehicles and others.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
          src={slide1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p className='carousel-text'>National transport for vehicles and others.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;