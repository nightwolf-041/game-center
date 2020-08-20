import React, { useRef, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';

function TopSlider() {
  const ref = useRef();
  let [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    let mySwiper = document.querySelector('.topSlider-swiper-container').swiper;
    setCurrentIndex(mySwiper.activeIndex);
    console.log(mySwiper.activeIndex);
  }, []);

  const params = {
    // containerModifierClass: 'news-swiper-container',
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
    <section class="top-slider-section">
      <Swiper ref={ref} {...params}>
        <div className="top-slider-item">
          <div className="top-slider-item-backdrop"></div>
          <img src="" alt="" />
          <div class="top-slider-caption">
            <div class="top-slider-caption-division animated-caption-division">
              <span>1</span>
            </div>
            <h2 class="top-slider-caption-title animated-caption-title">
              درامد زایی با
              <br /> بازی مورد علاقه خود
            </h2>
            <button class="top-slider-caption-button animated-caption-button">
              بیشتر
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
}

export default TopSlider;
