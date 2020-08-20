import React from 'react';

function Blog() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="owl-carousel owl-theme blog-slider">
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
        </div>
      </div>
    </section>
  );
}

export default Blog;
