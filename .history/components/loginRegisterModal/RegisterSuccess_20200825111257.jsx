import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classes from './registerSide.module.css';

function RegisterSuccess() {
  return (
    <div className={classes.registerSuccessMain}>
      <div className={classes.registerSuccessIconBox}>
        <FontAwesomeIcon
          icon={faCheck}
          className={classes.registerSuccessIcon}
        />
      </div>
      <div className={registerSuccessTitle}>ثبت نام با موفقیت انجام شد</div>
      <button className={classes.registerSuccessButton}>تایید</button>
    </div>
  );
}

export default RegisterSuccess;
