import React, { useState } from 'react';
import axios from 'axios';
import ReactCodeInput from 'react-code-input';
import { ToastContainer, toast } from 'react-toastify';
import Timer from './Timer';
import classes from './loginSide.module.css';

function LoginSide() {
  return (
    <input
      type="text"
      placeholder="شماره همراه"
      className={classes.loginPhoneInput}
    />
  );
}

export default LoginSide;
