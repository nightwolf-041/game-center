import React, { useRef, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';

function TopSlider() {
  const ref = useRef();
  let [currentIndex, setCurrentIndex] = useState(0);
  let [setTrue, setSetTrue] = useState(false);

  useEffect(() => {
    // let mySwiper = document.querySelector('.topSlider-swiper-container').swiper;
    // setCurrentIndex(mySwiper.realIndex);
    // setSetTrue(true);

    let currentSweipper = { ...ref.current };
    let swiperObj = { ...currentSweipper.swiper };
    console.log(swiperObj.realIndex);
    setCurrentIndex(swiperObj.realIndex);
  });

  const params = {
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
    // rebuildOnUpdate: true,
    activeSlideKey: 0,
    shouldSwiperUpdate: true,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: () => {
        let mySwiper = document.querySelector('.topSlider-swiper-container')
          .swiper;
        // setCurrentIndex(mySwiper.realIndex);
        // if (mySwiper.realIndex === 0) {
        //   setSetTrue(true);
        // } else {
        //   setSetTrue(false);
        // }
        // console.log(mySwiper.realIndex);
        // let currentSweipper = { ...ref.current };
        // let swiperObj = { ...currentSweipper.swiper };
        // console.log(swiperObj.realIndex);
        // setCurrentIndex(swiperObj.realIndex);
      },
    },
  };

  let currentSweipper = { ...ref.current };
  let swiperObj = { ...currentSweipper.swiper };
  console.log(swiperObj.realIndex);
  setCurrentIndex(swiperObj.realIndex);

  return (
    <section className="top-slider-section">
      <Swiper ref={ref} {...params}>
        <div className="top-slider-item">
          <div className="top-slider-item-backdrop"></div>
          <img src="/teknos-associates-gamers-make-money-image001.jpg" alt="" />
          <div className="top-slider-caption">
            <div
              className={
                currentIndex === 0
                  ? 'top-slider-caption-division animated-caption-division'
                  : 'top-slider-caption-division'
              }
            >
              <span>1</span>
            </div>
            <h2
              className={
                currentIndex === 0
                  ? 'top-slider-caption-title animated-caption-title'
                  : 'top-slider-caption-title'
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
        <div className="top-slider-item">
          <div className="top-slider-item-backdrop"></div>
          <img src="/teknos-associates-gamers-make-money-image001.jpg" alt="" />
          <div className="top-slider-caption">
            <div
              className={
                currentIndex === 1
                  ? 'top-slider-caption-division animated-caption-division'
                  : 'top-slider-caption-division'
              }
            >
              <span>1</span>
            </div>
            <h2
              className={
                currentIndex === 1
                  ? 'top-slider-caption-title animated-caption-title'
                  : 'top-slider-caption-title'
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
        <div className="top-slider-item">
          <div className="top-slider-item-backdrop"></div>
          <img src="/teknos-associates-gamers-make-money-image001.jpg" alt="" />
          <div className="top-slider-caption">
            <div
              className={
                currentIndex === 2
                  ? 'top-slider-caption-division animated-caption-division'
                  : 'top-slider-caption-division'
              }
            >
              <span>1</span>
            </div>
            <h2
              className={
                currentIndex === 2
                  ? 'top-slider-caption-title animated-caption-title'
                  : 'top-slider-caption-title'
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
