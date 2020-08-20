import React from 'react';
import classes from 'registerSide.module.css';

function RegisterSide() {
  return (
    <div className={registerSideMain}>
      <input
        type="text"
        placeholder="نام"
        className={classes.registerSideTextInput}
      />
      <input
        type="text"
        placeholder="نام خانوادگی"
        className={classes.registerSideTextInput}
      />
      <input
        type="text"
        placeholder="شماره همراه"
        className={classes.registerSidePhoneInput}
      />
    </div>
  );
}

export default RegisterSide;
