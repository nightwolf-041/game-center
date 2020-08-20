import React from 'react';

function ContactUs() {
  return (
    <section class="contact-us">
      <div class="contact-us-backdrop"></div>
      <div class="container">
        <div class="contact-us-main">
          <div class="contact-us-left">
            <div class="contact-us-inputs-box">
              <div class="contact-us-top-inputs">
                <input
                  type="text"
                  placeholder="نام"
                  class="contact-us-name-input contact-us-input"
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  class="contact-us-family-input contact-us-input"
                />
              </div>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="متن خود را وارد کنید..."
                class="contact-us-textarea contact-us-input"
              ></textarea>
              <div class="contact-us-button-box">
                <button class="contact-us-button">فرستادن</button>
              </div>
            </div>
          </div>
          <div class="contact-us-right">
            <h4>با ما در ارتباط باشید</h4>
            <p>
              همکاران ما در خدمت دوستان گیمر خود هستند تا به تمامی مشکلات رسیدگی
              کنند؛ همچنین شما میتوانید از طریق شبکه های اجتماعی راهنمایی های
              لازم را دریافت کنید.
            </p>
            <div class="contact-us-socials">
              <a href="#" class="socials-tooltip" data-title="آپارات">
                <img
                  src="./img/aparat-icon-31.png"
                  alt=""
                  class="contact-us-social"
                />
              </a>
              <a href="#" class="socials-tooltip" data-title="twitch">
                <img src="./img/twitch.png" alt="" class="contact-us-social" />
              </a>
              <a href="#" class="socials-tooltip" data-title="اینستاگرام">
                <img
                  src="./img/instagram.png"
                  alt=""
                  class="contact-us-social"
                />
              </a>
              <a href="#" class="socials-tooltip" data-title="تلگرام">
                <img
                  src="./img/telegram.png"
                  alt=""
                  class="contact-us-social"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
