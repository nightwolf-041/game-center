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
    loop: false,
    // navigation: {
    //   nextEl: '.game-swiper-button-next',
    //   prevEl: '.game-swiper-button-prev',
    // },
    // renderPrevButton: () => (
    //   <button className="gameSlider-swiper-button-prev">
    //     <FontAwesomeIcon
    //       onClick={goNext}
    //       icon={faChevronLeft}
    //       className="gameSlider-swiper-button-prev-icon"
    //     />
    //   </button>
    // ),
    // renderNextButton: () => (
    //   <button className="gameSlider-swiper-button-next">
    //     <FontAwesomeIcon
    //       onClick={goPrev}
    //       icon={faChevronRight}
    //       className="gameSlider-swiper-button-next-icon"
    //     />
    //   </button>
    // ),
  };

  // const goNext = () => {
  //   if (
  //     gameSliderRef.current !== null &&
  //     gameSliderRef.current.swiper !== null
  //   ) {
  //     gameSliderRef.current.swiper.slideNext();
  //   }
  // };

  // const goPrev = () => {
  //   if (
  //     gameSliderRef.current !== null &&
  //     gameSliderRef.current.swiper !== null
  //   ) {
  //     gameSliderRef.current.swiper.slidePrev();
  //   }
  // };

  return (
    <section class="games-section">
      <div class="container">
        <Swiper ref={gameSliderRef} {...gameParams}>
          <div class="game-slider-item">
            <div class="game-slider-item-backdrop"></div>
            <img
              src="/AnyConv.com__5b649fd40ce5f51e008b4cdd.jpg"
              class="game-slider-item-image"
            />
            <div class="game-slider-caption-division">بازی تیمی ـ ورزشی</div>
            <img src="/Soccer.png" class="game-slider-caption-logo" />
          </div>
          <div class="game-slider-item">
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
