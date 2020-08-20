import React, { useState } from 'react';
import RegisterSide from './RegisterSide';
import LoginSide from './LoginSide';
import classes from './loginRegisterModal.module.css';

function LoginRegisterModal(props) {
  let [toggleToLoginState, setToggleToLoginState] = useState(false);

  const toggleToRegister = () => {
    setToggleToLoginState(false);
  };
  const toggleToLogin = () => {
    setToggleToLoginState(true);
  };

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
              toggleToLoginState
                ? classes.registerModalTopTitle
                : classes.registerModalTopTitleActive
            }
            onClick={toggleToRegister}
          >
            ثبت نام
          </button>
          <button
            className={
              !toggleToLoginState
                ? classes.loginModalTopTitle
                : classes.loginModalTopTitleActive
            }
            onClick={toggleToLogin}
          >
            ورود
          </button>
        </div>
        {/* <div className={classes.}>

        </div> */}
        {!toggleToLoginState ? <RegisterSide /> : <LoginSide />}
      </div>
    </>
  );
}

export default LoginRegisterModal;
