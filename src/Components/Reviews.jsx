import React from 'react';
import '../Style/Reviews.scss';
import Image1 from "../assets/testimonial1.jpg";
import Image2 from "../assets/testimonial2.jpg";
import Image3 from "../assets/testimonial3.png";
import Image4 from "../assets/testimonial4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';

export const Reviews = () => {
  const Data = [
    {
      id: 1,
      image: Image1,
      title: "Gabriel Nastasoiu",
      description: "Merită încrederea.",
    },
    {
      id: 2,
      image: Image2,
      title: "Julian",
      description: "Nota 10, mereu când vin aici cu o problema la mașină, plec cu ea rezolvată.",
    },
    {
      id: 3,
      image: Image3,
      title: "Cristian Sarbu",
      description: "Promptitudine și seriozitate.",
    },
    {
      id: 4,
      image: Image4,
      title: 'Nini Iordache',
      description: "Profesionalism, rapiditate.",
    },
  ];

  return (
    <section className="testimonial container section" id="testimonials">
      <h1 className="section__title">RECENZII</h1>
      <Swiper
        className="testimonial__container"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className="testimonial__card" key={id}>
            <img src={image} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
