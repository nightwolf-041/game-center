import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ContactUs() {
  let [name, setName] = useState('');
  let [family, setFamily] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const familyChangeHandler = (e) => {
    setFamily(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const sendDataHandler = () => {
    if (
      name.trim() === '' ||
      family.trim() === '' ||
      email.trim() === '' ||
      message.trim() === ''
    ) {
      toast('لطفا تمامی ورودی ها را پر کنید', { type: toast.TYPE.INFO });
    } else if (
      name.trim() !== '' ||
      family.trim() !== '' ||
      !emailPattern.test(emailValue.trim()) ||
      message.trim() !== ''
    ) {
      toast('ایمیل وارد شده معتبر نیست', { type: toast.TYPE.INFO });
    } else {
      // axios.post('http://185.211.56.9:5000/Post');
    }
  };

  return (
    <section className="contact-us" id="contactUs">
      <div className="contact-us-backdrop"></div>
      <div className="container">
        <div className="contact-us-main">
          <div className="contact-us-left">
            <div className="contact-us-inputs-box">
              <div className="contact-us-top-inputs">
                <input
                  type="text"
                  placeholder="نام"
                  value={name}
                  onChange={nameChangeHandler}
                  className="contact-us-name-input contact-us-input"
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  value={family}
                  onChange={familyChangeHandler}
                  className="contact-us-family-input contact-us-input"
                />
              </div>
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={emailChangeHandler}
                className="contact-us-email-input contact-us-input"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="متن خود را وارد کنید..."
                value={message}
                onChange={messageChangeHandler}
                className="contact-us-textarea contact-us-input"
              ></textarea>
              <div className="contact-us-button-box">
                <button className="contact-us-button" onClick={sendDataHandler}>
                  فرستادن
                </button>
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
