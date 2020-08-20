import React from 'react';
import classes from './loginRegisterModal.module.css';

function LoginRegisterModal(props) {
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
          <button className={classes.registerModalTopTitle}>ثبت نام</button>
          <button className={classes.loginModalTopTitle}>ورود</button>
        </div>
      </div>
    </>
  );
}

export default LoginRegisterModal;
