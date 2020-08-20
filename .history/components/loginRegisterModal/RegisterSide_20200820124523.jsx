import React from 'react';
import classes from 'registerSide.module.css';

function RegisterSide() {
  return (
    <div className={registerSideMain}>
      <input type="text" className={classes.registerSideTextInput} />
      <input type="text" className={classes.registerSideTextInput} />
      <input type="text" className={classes.registerSidePhoneInput} />
    </div>
  );
}

export default RegisterSide;
