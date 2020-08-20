import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Swiper from 'react-id-swiper';

function Games() {
  const ref = useRef();
  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let currentSweipper = { ...ref.current };
    let swiperObj = { ...currentSweipper.swiper };
    setCurrentIndex(swiperObj.realIndex);
  }, []);

  const params = {
    containerClass: 'gameSlider-swiper-container',
    // slideClass: 'gameSlider-swiper-slide',
    spaceBetween: 0,
    centeredSlides: true,
    rtl: true,
    loop: false,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    // pagination: {
    //   el: '.gameSlider-swiper-pagination',
    //   clickable: true,
    //   renderBullet: (index, className) => {
    //     return `<span class=${className}>${index + 1}</span>`;
    //   },
    // },
    navigation: {
      nextEl: '.game-swiper-button-next',
      prevEl: '.game-swiper-button-prev',
    },
    renderPrevButton: () => (
      <button className="gameSlider-swiper-button-prev">
        <FontAwesomeIcon
          onClick={goNext}
          icon={faChevronLeft}
          className="gameSlider-swiper-button-prev-icon"
        />
      </button>
    ),
    renderNextButton: () => (
      <button className="gameSlider-swiper-button-next">
        <FontAwesomeIcon
          onClick={goPrev}
          icon={faChevronRight}
          className="gameSlider-swiper-button-next-icon"
        />
      </button>
    ),
    on: {
      slideChange: () => {
        let currentSweipper = { ...ref.current };
        let swiperObj = { ...currentSweipper.swiper };
        setCurrentIndex(swiperObj.realIndex);
      },
    },
  };

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  return (
    <section class="games-section">
      <div class="container">
        <Swiper ref={ref} {...params}>
          <div class="game-slider-item game-slider-item01">
            <div class="game-slider-item-backdrop"></div>
            <img
              src="/AnyConv.com__5b649fd40ce5f51e008b4cdd.jpg"
              class="game-slider-item-image animated-game-slider-item-image"
            />
            <div class="game-slider-caption-division">بازی تیمی ـ ورزشی</div>
            <img src="/Soccer.png" class="game-slider-caption-logo" />
          </div>
          <div class="game-slider-item game-slider-item01">
            <div class="game-slider-item-backdrop"></div>
            <img
              src="/Call_Of_Duty_Black_Ops_2_Game_High_Resolution-748x468.jpg"
              class="game-slider-item-image"
            />
            <div class="game-slider-caption-division">
              بازی تیمی ـ تیراندازی
            </div>
            <img src="/csgo-icon-17.png" class="game-slider-caption-logo" />
          </div>
        </Swiper>

        <div class="game-section-consoles">
          <h6 class="game-section-consoles-title1">MOBILE</h6>
          <h6 class="game-section-consoles-title1">PC</h6>
          <h6 class="game-section-consoles-title2">CONSOLE</h6>
        </div>
      </div>
    </section>
  );
}

export default Games;
