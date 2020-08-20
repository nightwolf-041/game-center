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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCtL68Td5Vidt0nOpOQBPC2dmtWUtzGUMt7g&usqp=CAU" />
          <div className="caption">
            <div
              className={
                currentIndex === 1
                  ? 'caption-title animated-caption-title d-flex flex-row justify-content-end align-items-center mb-2'
                  : 'caption-title d-flex flex-row justify-content-end align-items-center mb-2'
              }
            >
              <span>سه شنبه 3 تیر 1399</span>
              <i className="fa fa-calendar-alt caption-title-icon"></i>
            </div>
            <p
              className={
                currentIndex === 1
                  ? 'caption-body animated-caption-body'
                  : 'caption-body'
              }
            >
              طبری به دلیل فعالیت در گروهک منافقین دستگیر و زندانی شده بود
            </p>
          </div>
        </div>
      </Swiper>
    </section>
  );
}

export default TopSlider;
