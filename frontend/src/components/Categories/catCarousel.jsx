import React, { useState, useEffect } from 'react';
import './catCarousel.css'; // Importa los estilos CSS aquí
import RocketButton from './rocketButton';

const CatCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [slides.length]);

  const moveRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);0
  };

  const moveLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__nav">
        <span className="carousel__arrow" onClick={moveLeft}>
            <svg
                viewBox="0 0 1024 1024"
                fill="#FFF"
                height="1em"
                width="1em"
                >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
            </svg>
        </span>
        <span className="carousel__arrow" onClick={moveRight}>
            <svg
                viewBox="0 0 1024 1024"
                fill="#FFF"
                height="1em"
                width="1em"
                >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
            </svg>
        </span>
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item carousel-item--${index + 1} ${index === currentSlide ? 'active' : ''}`}
        >
          <div
            className="carousel-item__image"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          ></div>
          <div className="carousel-item__info">
            <div className="carousel-item__container">
              <h2 className="carousel-item__subtitle">{slide.name}</h2>
              <h1 className="carousel-item__title">{slide.title}</h1>
              <div className="mt-10">
                <RocketButton text={"Ver más"} href={"#"}/>
              </div>
              {/* Otros elementos del slide, como la descripción y el botón */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatCarousel;
