import React from 'react';

function LoginRegisterModal() {
  return (
    <div
      className={
        props.show ? classes.loginRegisterModal : classes.loginRegisterModalHide
      }
    >
      <div className={classes.loginRegisterModalTop}></div>
    </div>
  );
}

export default LoginRegisterModal;
