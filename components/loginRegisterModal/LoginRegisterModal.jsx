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

      {!props.showSuccess ? (
        <div
          className={
            props.show
              ? !toggleToLoginState
                ? classes.loginRegisterModal
                : classes.loginRegisterModalMini
              : !toggleToLoginState
              ? classes.loginRegisterModalHide
              : classes.loginRegisterModalHideMini
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

          <div className={classes.LoginRegisterModalMain}>
            {!toggleToLoginState ? (
              <RegisterSide
                show={props.show}
                showSuccessModalHandler={props.showSuccessModalHandler}
              />
            ) : (
              <LoginSide
                show={props.show}
                closeModalAfterLogin={props.hideLoginRegisterModal}
              />
            )}
          </div>
        </div>
      ) : (
        <div
          className={
            props.show
              ? classes.loginRegisterModalMini
              : classes.loginRegisterModalHideMini
          }
        >
          <RegisterSuccess
            hideSuccessModalHandler={props.hideSuccessModalHandler}
          />
        </div>
      )}
    </>
  );
}

export default LoginRegisterModal;
