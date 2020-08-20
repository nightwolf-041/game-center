import React, { useState } from 'react';
import axios from 'axios';
import ReactCodeInput from 'react-code-input';
import { ToastContainer, toast } from 'react-toastify';
import Timer from './Timer';
import classes from './loginSide.module.css';

function LoginSide() {
  let [phoneInput, setPhoneInput] = useState({
    value: '',
    valid: true,
    message: '',
  });

  let [registerStep1Statuses, setRegisterStep1Statuses] = useState({
    loading: null,
    success: null,
    error: null,
  });
  let [registerStep2Statuses, setRegisterStep2Statuses] = useState({
    loading: null,
    success: null,
    error: null,
  });

  return (
    <input
      type="text"
      placeholder="شماره همراه"
      className={classes.loginPhoneInput}
    />
  );
}

export default LoginSide;
