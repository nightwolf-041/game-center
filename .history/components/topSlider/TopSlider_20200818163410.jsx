import React, { useRef, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';

function TopSlider() {
  const ref = useRef();
  let [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    let mySwiper = document.querySelector('.swiper-container').swiper;
    setCurrentIndex(mySwiper.activeIndex);
    console.log(mySwiper.activeIndex);
  }, []);

  const params = {
    // containerModifierclassName: 'topSlider-swiper-container',
    containerClass: 'topSlider-swiper-container',
    pagination: {
      el: '.swiper-pagination-news',
      clickable: true,
    },
    loop: true,
    freeMode: false,
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: () => {
        let mySwiper = document.querySelector('.swiper-container').swiper;
        setCurrentIndex(mySwiper.activeIndex);
      },
    },
  };

  return (
    <section className="top-slider-section">
      <Swiper ref={ref} {...params}>
        <div className="top-slider-item">
          <div className="top-slider-item-backdrop"></div>
          <img src="/teknos-associates-gamers-make-money-image001.jpg" alt="" />
          <div className="top-slider-caption">
            <div className="top-slider-caption-division animated-caption-division">
              <span>1</span>
            </div>
            <h2 className="top-slider-caption-title animated-caption-title">
              درامد زایی با
              <br /> بازی مورد علاقه خود
            </h2>
            <button className="top-slider-caption-button animated-caption-button">
              بیشتر
            </button>
          </div>
        </div>
        <div className="top-slider-item">
          <div className="top-slider-item-backdrop"></div>
          <img src="/teknos-associates-gamers-make-money-image001.jpg" alt="" />
          <div className="top-slider-caption">
            <div className="top-slider-caption-division animated-caption-division">
              <span>1</span>
            </div>
            <h2 className="top-slider-caption-title animated-caption-title">
              درامد زایی با
              <br /> بازی مورد علاقه خود
            </h2>
            <button className="top-slider-caption-button animated-caption-button">
              بیشتر
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
}

export default TopSlider;
