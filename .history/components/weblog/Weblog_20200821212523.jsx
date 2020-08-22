import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

function Weblog(props) {
  const blogSliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let elemStart = containerRef.current.offsetTop - 100;
    let elemHeight = containerRef.current.clientHeight;
    let elemEnd = elemStart + elemHeight;

    document.addEventListener('scroll', () => {
      if (window.scrollY > elemStart && window.scrollY < elemEnd) {
        console.log('yohooooo');
        props.toggleActiveClassToBlogLink();
      } else {
        console.log('fuck');
        // props.unToggleActiveClassToBlogLink();
      }
    });
  });

  const blogParams = {
    containerClass: 'blogSlider-swiper-container',
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    // grabCursor: true,
    rtl: true,
    loop: true,
    pagination: {
      el: '.blogSlider-swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="blog-section" ref={containerRef}>
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
                <Link href="/blog">
                  <button type="button" className="blog-slider-button">
                    <FontAwesomeIcon
                      icon={faAngleDoubleLeft}
                      className="blog-slider-arrow"
                    />
                    مشاهده بلاگ
                  </button>
                </Link>
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
                <Link href="/blog">
                  <button type="button" className="blog-slider-button">
                    <FontAwesomeIcon
                      icon={faAngleDoubleLeft}
                      className="blog-slider-arrow"
                    />
                    مشاهده بلاگ
                  </button>
                </Link>
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
                <Link href="/blog">
                  <button type="button" className="blog-slider-button">
                    <FontAwesomeIcon
                      icon={faAngleDoubleLeft}
                      className="blog-slider-arrow"
                    />
                    مشاهده بلاگ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Weblog;
