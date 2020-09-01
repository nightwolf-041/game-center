import React from 'react';
import classes from './registerSide.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RegisterSuccess() {
  return (
    <div className={classes.registerSuccessMain}>
      <div className={classes.registerSuccessIconBox}>
        <FontAwesomeIcon
          icon={faTick}
          className={classes.registerSuccessIcon}
        />
      </div>
    </div>
  );
}

export default RegisterSuccess;
