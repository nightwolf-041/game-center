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
  let [loginStep1Statuses, setLoginStep1Statuses] = useState({
    loading: null,
    success: null,
    error: null,
  });
  let [loginStep2Statuses, setLoginStep2Statuses] = useState({
    loading: null,
    success: null,
    error: null,
  });
  let [loginStepTwoSwitch, setLoginStepTwoSwitch] = useState(false);

  const phoneInputChangeHandler = (e) => {
    setPhoneInput({ ...phoneInput, value: e.target.value });
  };

  loginStep1ClickHandler = () => {
    if (!phoneInput.value) {
      setPhoneInput({ ...phoneInput, valid: false, message: 'الزامیست' });
    } else if (!/^\d+$/.test(phoneInput.value)) {
      setPhoneInput({
        ...phoneInput,
        valid: false,
        message: 'شماره موبایل معتبر نیست',
      });
    } else if (phoneInput.value.length !== 11) {
      setPhoneInput({
        ...phoneInput,
        valid: false,
        message: 'شماره موبایل صحیح نیست',
      });
    } else {
      setPhoneInput({ ...phoneInput, valid: true, message: '' });
    }

    if (phoneInput.value.length === 11 && /^\d+$/.test(phoneInput.value)) {
      let phoneInputValue = phoneInput.value;
      setRegisterStep1Statuses({
        ...registerStep1Statuses,
        loading: true,
        success: false,
        error: false,
      });
      setRegisterStepTwoSwitch(true);

      axios
        .post('http://185.211.59.237/Account/RegisterClient', registerData)
        .then((res) => {
          console.log(res.data);

          if (res.data.state === 1) {
            setRegisterStep1Statuses({
              ...registerStep1Statuses,
              loading: false,
              success: true,
              error: false,
            });

            setRegisterStepTwoSwitch(true);
            setTimerValues({ ...timer, minutes: 2, seconds: 0 });

            this.setState({
              registerStepTwoSwitch: true,
            });
          } else {
            setRegisterStep1Statuses({
              ...registerStep1Statuses,
              loading: false,
              success: false,
              error: true,
            });
            toast(res.data.message, { type: toast.TYPE.ERROR });
          }
        })
        .catch((err) => {
          setRegisterStep1Statuses({
            ...registerStep1Statuses,
            loading: false,
            success: false,
            error: true,
          });
          toast('خطای شبکه', { type: toast.TYPE.ERROR });
        });
    }
  };

  return (
    <>
      {!loginStepTwoSwitch ? (
        <input
          type="text"
          placeholder="شماره همراه"
          onChange={phoneInputChangeHandler}
          className={classes.loginPhoneInput}
        />
      ) : null}
    </>
  );
}

export default LoginSide;
