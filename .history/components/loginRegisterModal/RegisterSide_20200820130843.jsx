import React, { useState } from 'react';
import classes from './registerSide.module.css';
import { useState } from 'react';

function RegisterSide() {
  let [nameInput, setNameInput] = useState('');
  let [familyInput, setFamilyInput] = useState('');
  let [phoneInput, setPhoneInput] = useState('');

  const nameInputChangeHandler = (e) => {
    setNameInput(e.target.value);
  };
  const familyInputChangeHandler = (e) => {
    setFamilyInput(e.target.value);
  };
  const phoneInputChangeHandler = (e) => {
    setPhoneInput(e.target.value);
  };

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
