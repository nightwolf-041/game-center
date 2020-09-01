import React, { useState } from 'react';
import RegisterSide from './RegisterSide';
import RegisterSuccess from './RegisterSuccess';
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
        onClick={props.hideLoginRegisterModal}
      ></div>
      <div
        className={
          props.show
            ? !toggleToLoginState || props.showSuccess
              ? classes.loginRegisterModal
              : classes.loginRegisterModalMini
            : !toggleToLoginState || props.showSuccess
            ? classes.loginRegisterModalHide
            : classes.loginRegisterModalHideMini
        }
      >
        {!props.showSuccess && (
          <img
            src="/BGIcon.png"
            alt=""
            className={classes.loginRegisterModalLogo}
          />
        )}
        {!props.showSuccess && (
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
        )}

        <div className={classes.LoginRegisterModalMain}>
          {!toggleToLoginState ? (
            !props.showSuccess ? (
              <RegisterSide
                show={props.show}
                showSuccessModalHandler={props.showSuccessModalHandler}
              />
            ) : (
              <RegisterSuccess
                hideSuccessModalHandler={props.hideSuccessModalHandler}
              />
            )
          ) : (
            <LoginSide show={props.show} />
          )}
        </div>
      </div>
    </>
  );
}

export default LoginRegisterModal;
