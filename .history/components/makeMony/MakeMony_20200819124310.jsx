import React from 'react';

function MakeMony() {
  return (
    <section class="make-mony">
      <div class="container">
        <div class="make-mony-main">
          <div class="make-mony-left">
            <h4 class="make-mony-title">حمایت از گیمر ها برای درآمد زایی</h4>
            <p class="make-mony-subtitle">
              ما برای حمایت از گیمر ها مسابقاتی تدارک میبینیم و برای برندگان
              جوایز مختلفی در نظر داریم؛ از گیمر ها دعوت میشود تا بازی مورد
              علاقه خود را در وب سایت ما بازی کنند.
            </p>
            <button type="button" class="make-mony-button">
              <i class="fas fa-angle-double-left make-mony-arrow"></i>
              ثبت نام
            </button>
          </div>
          <div class="make-mony-right"></div>
        </div>
      </div>
    </section>
  );
}

export default MakeMony;
