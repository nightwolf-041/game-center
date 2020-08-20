import React, { useState } from 'react';

function ContactUs() {
  let [focusName, setFocusName] = useState(false);

  const showBoxShadowForName = () => {
    setFocusName(true);
  };
  const hideBoxShadowForName = () => {
    setFocusName(false);
  };

  return (
    <section className="contact-us">
      <div className="contact-us-backdrop"></div>
      <div className="container">
        <div className="contact-us-main">
          <div className="contact-us-left">
            <div className="contact-us-inputs-box">
              <div className="contact-us-top-inputs">
                <input
                  type="text"
                  placeholder="نام"
                  className={
                    !focusName
                      ? 'contact-us-name-input contact-us-input'
                      : 'contact-us-name-input contact-us-input-toggle'
                  }
                  onFocus={showBoxShadowForName}
                  onBlur={hideBoxShadowForName}
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="contact-us-family-input contact-us-input"
                />
              </div>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="متن خود را وارد کنید..."
                className="contact-us-textarea contact-us-input"
              ></textarea>
              <div className="contact-us-button-box">
                <button className="contact-us-button">فرستادن</button>
              </div>
            </div>
          </div>
          <div className="contact-us-right">
            <h4>با ما در ارتباط باشید</h4>
            <p>
              همکاران ما در خدمت دوستان گیمر خود هستند تا به تمامی مشکلات رسیدگی
              کنند؛ همچنین شما میتوانید از طریق شبکه های اجتماعی راهنمایی های
              لازم را دریافت کنید.
            </p>
            <div className="contact-us-socials">
              <a href="#" className="socials-tooltip" data-title="آپارات">
                <img
                  src="/aparat-icon-31.png"
                  alt=""
                  className="contact-us-social"
                />
              </a>
              <a href="#" className="socials-tooltip" data-title="twitch">
                <img src="/twitch.png" alt="" className="contact-us-social" />
              </a>
              <a href="#" className="socials-tooltip" data-title="اینستاگرام">
                <img
                  src="/instagram.png"
                  alt=""
                  className="contact-us-social"
                />
              </a>
              <a href="#" className="socials-tooltip" data-title="تلگرام">
                <img src="/telegram.png" alt="" className="contact-us-social" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;