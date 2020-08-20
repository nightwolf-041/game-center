import React from 'react';

function LoginRegisterModal() {
  return (
    <div
      className={
        props.show ? classes.loginRegisterModal : classes.loginRegisterModalHide
      }
    >
      <div className={classes.loginRegisterModalTop}>
        <button className={classes.loginRegisterModalTopRigtht}>ثبت نام</button>
        <button className={classes.loginModalTopTitle}>ورود</button>
      </div>
    </div>
  );
}

export default LoginRegisterModal;
