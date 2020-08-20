import React from 'react';

function LoginRegisterModal() {
  return (
    <div
      className={
        props.show ? classes.loginRegisterModal : classes.loginRegisterModalHide
      }
    ></div>
  );
}

export default LoginRegisterModal;
