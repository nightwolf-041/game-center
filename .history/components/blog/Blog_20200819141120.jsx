import React, { useRef, useEffect, useState } from 'react';
import Swiper from 'react-id-swiper';

function Blog() {
  const blogSliderRef = useRef(null);

  const blogParams = {
    containerClass: 'blogSlider-swiper-container',
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    // effect: 'fade',
    grabCursor: true,
    rtl: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="blog-section">
      <div className="container">
        <Swiper {...blogParams}>
          <div className="blog-slider-item">
            <div className="blog-slider-right">
              <img
                src="/Feature-Best-Hotels-for-Gamers-By-Vanguardia.jpg"
                alt=""
              />
            </div>
            <div className="blog-slider-left">
              <h4 className="blog-slider-title">
                حمایت از گیمر ها برای درآمد زایی
              </h4>
              <p className="blog-slider-subtitle">
                ما برای حمایت از گیمر ها مسابقاتی تدارک میبینیم و برای برندگان
                جوایز مختلفی در نظر داریم؛ از گیمر ها دعوت میشود تا بازی مورد
                علاقه خود را در وب سایت ما بازی کنند.
              </p>
              <div className="blog-slider-button-box">
                <button type="button" className="blog-slider-button">
                  <i className="fas fa-angle-double-left blog-slider-arrow"></i>
                  مشاهده بلاگ
                </button>
              </div>
            </div>
          </div>
          <div className="blog-slider-item">
            <div className="blog-slider-right">
              <img
                src="/Feature-Best-Hotels-for-Gamers-By-Vanguardia.jpg"
                alt=""
              />
            </div>
            <div className="blog-slider-left">
              <h4 className="blog-slider-title">
                حمایت از گیمر ها برای درآمد زایی
              </h4>
              <p className="blog-slider-subtitle">
                ما برای حمایت از گیمر ها مسابقاتی تدارک میبینیم و برای برندگان
                جوایز مختلفی در نظر داریم؛ از گیمر ها دعوت میشود تا بازی مورد
                علاقه خود را در وب سایت ما بازی کنند.
              </p>
              <div className="blog-slider-button-box">
                <button type="button" className="blog-slider-button">
                  <i className="fas fa-angle-double-left blog-slider-arrow"></i>
                  مشاهده بلاگ
                </button>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Blog;
