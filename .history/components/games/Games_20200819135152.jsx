import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Swiper from 'react-id-swiper';

function Games() {
  const gameSliderRef = useRef(null);

  const gameParams = {
    containerClass: 'gameSlider-swiper-container',
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    rtl: true,
    loop: true,
    navigation: {
      nextEl: '.game-swiper-button-next',
      prevEl: '.game-swiper-button-prev',
    },
    renderPrevButton: () => (
      <button className="gameSlider-swiper-button-prev">
        <FontAwesomeIcon
          onClick={goPrev}
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
  };

  const goNext = () => {
    if (
      gameSliderRef.current !== null &&
      gameSliderRef.current.swiper !== null
    ) {
      gameSliderRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (
      gameSliderRef.current !== null &&
      gameSliderRef.current.swiper !== null
    ) {
      gameSliderRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="games-section">
      <div className="container">
        <Swiper {...gameParams}>
          <div className="game-slider-item">
            <div className="game-slider-item-backdrop"></div>
            <img
              src="/AnyConv.com__5b649fd40ce5f51e008b4cdd.jpg"
              className="game-slider-item-image"
            />
            <div className="game-slider-caption-division">
              بازی تیمی ـ ورزشی
            </div>
            <img src="/Soccer.png" className="game-slider-caption-logo" />
          </div>
          <div className="game-slider-item">
            <div className="game-slider-item-backdrop"></div>
            <img
              src="/Call_Of_Duty_Black_Ops_2_Game_High_Resolution-748x468.jpg"
              className="game-slider-item-image"
            />
            <div className="game-slider-caption-division">
              بازی تیمی ـ ورزشی
            </div>
            <img src="/csgo-icon-17.png" className="game-slider-caption-logo" />
          </div>
        </Swiper>

        <div className="game-section-consoles">
          <h6 className="game-section-consoles-title1">MOBILE</h6>
          <h6 className="game-section-consoles-title1">PC</h6>
          <h6 className="game-section-consoles-title2">CONSOLE</h6>
        </div>
      </div>
    </section>
  );
}

export default Games;
