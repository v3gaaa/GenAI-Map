import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';

const CatCarousel = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = new Swiper('.blog-slider', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            mousewheel: {
                invert: false,
            },
            pagination: {
                el: '.blog-slider__pagination',
                clickable: true,
            }
        });

        swiperRef.current = swiper;

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy();
            }
        };
    }, []);

    const styles = {
        blogSlider: {
            width: '95%',
            position: 'relative',
            maxWidth: '800px',
            margin: 'auto',
            background: '#fff',
            boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            padding: '25px',
            borderRadius: '25px',
            height: '400px',
            transition: 'all .3s',
        },
        // Otros estilos convertidos aquí...
    };

    return (
        <div style={styles.blogSlider} className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          
          <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt=""/>
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor</div>
          <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
          <a href="#" className="blog-slider__button">READ MORE</a>
        </div>
      </div>
      <div className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt=""/>
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
          <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
          <a href="#" className="blog-slider__button">READ MORE</a>
        </div>
      </div>
      
      <div className="blog-slider__item swiper-slide">
        <div className="blog-slider__img">
          <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt=""/>
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">26 December 2019</span>
          <div className="blog-slider__title">Lorem Ipsum Dolor</div>
          <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
          <a href="#" className="blog-slider__button">READ MORE</a>
        </div>
      </div>
            </div>
            <div className="blog-slider__pagination"></div>
        </div>
    );
}

export default CatCarousel;
