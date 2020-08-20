import React from 'react';

function Games() {
  return (
    <section class="games-section">
      <div class="container">
        <div class="owl-carousel owl-theme game-slider">
          <div class="game-slider-item game-slider-item01">
            <div class="game-slider-item-backdrop"></div>
            <img
              src="./img/AnyConv.com__5b649fd40ce5f51e008b4cdd.jpg"
              class="game-slider-item-image animated-game-slider-item-image"
            />
            <div class="game-slider-caption-division">بازی تیمی ـ ورزشی</div>
            <img src="./img/Soccer.png" class="game-slider-caption-logo" />
          </div>
          <div class="game-slider-item game-slider-item01">
            <div class="game-slider-item-backdrop"></div>
            <img
              src="./img/AnyConv.com__5b649fd40ce5f51e008b4cdd.jpg"
              class="game-slider-item-image"
            />
            <div class="game-slider-caption-division">بازی تیمی ـ ورزشی</div>
            <img
              src="./img/csgo-icon-17.png"
              class="game-slider-caption-logo"
            />
          </div>
        </div>

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
