import React from 'react';
import classes from './registerSide.module.css';

function RegisterSide() {
  return (
    <div className={classes.registerSideMain}>
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
      <div className={classes.registerSideButtonBox}>
        <button type="button" className={classes.registerSideButton}>
          دریافت کد
        </button>
      </div>
    </div>
  );
}

export default RegisterSide;
