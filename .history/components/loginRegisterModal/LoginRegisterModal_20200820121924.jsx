import React from 'react';
import classes from './loginRegisterModal.module.css';

function LoginRegisterModal(props) {
  return (
    <div
      className={
        props.show ? classes.loginRegisterModal : classes.loginRegisterModalHide
      }
    >
      <div className={classes.loginRegisterModalTop}>
        <button className={classes.registerModalTopTitle}>ثبت نام</button>
        <button className={classes.loginModalTopTitle}>ورود</button>
      </div>
    </div>
  );
}

export default LoginRegisterModal;
