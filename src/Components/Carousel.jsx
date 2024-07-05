import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

function CarouselFadeExample() {
  return (

    <Carousel fade >
      <Carousel.Item>
      <img
          src={slide3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 height"

          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 height"
          src={slide1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;