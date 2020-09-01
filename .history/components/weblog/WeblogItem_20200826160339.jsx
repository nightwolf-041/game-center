import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

function WeblogItem() {
  return (
    <div className="blog-slider-item">
      <div className="blog-slider-right">
        <img src="/Feature-Best-Hotels-for-Gamers-By-Vanguardia.jpg" alt="" />
      </div>
      <div className="blog-slider-left">
        <h4 className="blog-slider-title">حمایت از گیمر ها برای درآمد زایی</h4>
        <p className="blog-slider-subtitle">
          ما برای حمایت از گیمر ها مسابقاتی تدارک میبینیم و برای برندگان جوایز
          مختلفی در نظر داریم؛ از گیمر ها دعوت میشود تا بازی مورد علاقه خود را
          در وب سایت ما بازی کنند.
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
  );
}

export default WeblogItem;
