import React, { useRef, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';

function TopSlider() {
  const ref = useRef();
  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let currentSweipper = { ...ref.current };
    let swiperObj = { ...currentSweipper.swiper };
    setCurrentIndex(swiperObj.realIndex);
  }, []);

  const params = {
    containerClass: 'topSlider-swiper-container',
    // direction: 'vertical',
    spaceBetween: 0,
    centeredSlides: true,
    // loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.topSlider-swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span className=${className}>${index + 1}'</span>`;
      },
    },
    navigation: {
      nextEl: '.topSlider-swiper-button-next',
      prevEl: '.topSlider-swiper-button-prev',
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev">Prev</button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next">Next</button>
    ),
    on: {
      slideChange: () => {
        let currentSweipper = { ...ref.current };
        let swiperObj = { ...currentSweipper.swiper };
        console.log(swiperObj.realIndex);
        setCurrentIndex(swiperObj.realIndex);
      },
    },
  };

  return (
    <section className="top-slider-section">
      <Swiper ref={ref} {...params}>
        <div className="top-slider-item top-slider-item01">
          <div className="top-slider-item-backdrop"></div>
          {/* <img src="/teknos-associates-gamers-make-money-image001.jpg" alt="" /> */}
          <div className="top-slider-caption">
            <div
              className={
                currentIndex === 0
                  ? 'top-slider-caption-division animated-caption-division'
                  : 'top-slider-caption-division'
              }
            >
              <span>{currentIndex}</span>
            </div>
            <h2
              className={
                currentIndex === 0
                  ? 'top-slider-caption-title'
                  : 'top-slider-caption-title-after'
              }
            >
              درامد زایی با
              <br /> بازی مورد علاقه خود
            </h2>
            <button
              className={
                currentIndex === 0
                  ? 'top-slider-caption-button animated-caption-button'
                  : 'top-slider-caption-button'
              }
            >
              بیشتر
            </button>
          </div>
        </div>
        <div className="top-slider-item top-slider-item02">
          <div className="top-slider-item-backdrop"></div>
          {/* <img src="/teknos-associates-gamers-make-money-image001.jpg" alt="" /> */}
          <div className="top-slider-caption">
            <div
              className={
                currentIndex === 1
                  ? 'top-slider-caption-division animated-caption-division'
                  : 'top-slider-caption-division'
              }
            >
              <span>{currentIndex}</span>
            </div>
            <h2
              className={
                currentIndex === 1
                  ? 'top-slider-caption-title'
                  : 'top-slider-caption-title-after'
              }
            >
              درامد زایی با
              <br /> بازی مورد علاقه خود
            </h2>
            <button
              className={
                currentIndex === 1
                  ? 'top-slider-caption-button animated-caption-button'
                  : 'top-slider-caption-button'
              }
            >
              بیشتر
            </button>
          </div>
        </div>
        <div className="top-slider-item top-slider-item03">
          <div className="top-slider-item-backdrop"></div>
          {/* <img src="/teknos-associates-gamers-make-money-image001.jpg" alt="" /> */}
          <div className="top-slider-caption">
            <div
              className={
                currentIndex === 2
                  ? 'top-slider-caption-division animated-caption-division'
                  : 'top-slider-caption-division'
              }
            >
              <span>{currentIndex}</span>
            </div>
            <h2
              className={
                currentIndex === 2
                  ? 'top-slider-caption-title'
                  : 'top-slider-caption-title-after'
              }
            >
              درامد زایی با
              <br /> بازی مورد علاقه خود
            </h2>
            <button
              className={
                currentIndex === 2
                  ? 'top-slider-caption-button animated-caption-button'
                  : 'top-slider-caption-button'
              }
            >
              بیشتر
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
}

export default TopSlider;