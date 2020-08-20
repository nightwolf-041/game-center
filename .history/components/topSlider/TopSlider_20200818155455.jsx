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

  return <section class="top-slider-section"></section>;
}

export default TopSlider;
