import React, { useState } from 'react';
import classes from './loginRegisterModal.module.css';

function LoginRegisterModal(props) {
  let [toggleToLogin, setToggleToLogin] = useState(false);

  return (
    <>
      <div
        className={
          props.show
            ? classes.loginRegisterModalBackdrop
            : classes.loginRegisterModalBackdropHide
        }
      ></div>
      <div
        className={
          props.show
            ? classes.loginRegisterModal
            : classes.loginRegisterModalHide
        }
      >
        <img
          src="/BGIcon.png"
          alt=""
          className={classes.loginRegisterModalLogo}
        />
        <div className={classes.loginRegisterModalTop}>
          <button
            className={
              toggleToLogin
                ? classes.registerModalTopTitle
                : classes.registerModalTopTitleActive
            }
          >
            ثبت نام
          </button>
          <button
            className={
              !toggleToLogin
                ? classes.loginModalTopTitle
                : classes.loginModalTopTitleActive
            }
          >
            ورود
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginRegisterModal;
