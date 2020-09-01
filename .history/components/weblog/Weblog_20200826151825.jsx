import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import WeblogItem from './WeblogItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

function Weblog(props) {
  const blogSliderRef = useRef(null);
  const containerRef = useRef(null);

  // useEffect(() => {
  //   let elemStart = containerRef.current.offsetTop - 100;
  //   let elemHeight = containerRef.current.clientHeight;
  //   let elemEnd = elemStart + elemHeight;

  //   document.addEventListener('scroll', () => {
  //     if (window.scrollY > elemStart && window.scrollY < elemEnd) {
  //       props.setBlogLinkActive(true);
  //     } else {
  //       props.setBlogLinkActive(false);
  //     }
  //   });
  // });
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://185.211.56.9:5000d/Post?page=${1}&take=${3}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.succeeded === true) {
          setPosts(res.data.posts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        {posts.length > 0 ? (
          <Swiper {...blogParams}>
            {posts.map((post, index) => (
              <div className="blog-slider-item" key={index}>
                <div className="blog-slider-right">
                  <img src={post.coverImagePath} alt="" />
                </div>
                <div className="blog-slider-left">
                  <h4 className="blog-slider-title">{post.title}</h4>
                  <p className="blog-slider-subtitle">{post.abstract}</p>
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
            ))}
          </Swiper>
        ) : (
          <div className="blog-slider-empty-message">پستی وجود ندارد</div>
        )}
      </div>
    </section>
  );
}

export default Weblog;
