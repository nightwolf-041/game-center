import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

function MakeMony(props) {
  return (
    <section className="make-mony" id="aboutUs">
      <div className="container">
        <div className="make-mony-main">
          <div className="make-mony-left">
            <h4 className="make-mony-title">
              حمایت از گیمر ها برای درآمد زایی
            </h4>
            <p className="make-mony-subtitle">
              ما برای حمایت از گیمر ها مسابقاتی تدارک میبینیم و برای برندگان
              جوایز مختلفی در نظر داریم؛ از گیمر ها دعوت میشود تا بازی مورد
              علاقه خود را در وب سایت ما بازی کنند.
            </p>
            <button
              type="button"
              className="make-mony-button"
              onClick={props.showLoginRegisterModal}
            >
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                className="make-mony-arrow"
              />
              ثبت نام
            </button>
          </div>
          <div className="make-mony-right"></div>
        </div>
      </div>
    </section>
  );
}

export default MakeMony;
