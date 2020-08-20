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

  const loginStep1ClickHandler = () => {
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

      // axios
      //   .post('http://185.211.59.237/Account/RegisterClient', phoneInputValue)
      //   .then((res) => {
      //     console.log(res.data);

      //     if (res.data.state === 1) {
      //       setLoginStep2Statuses({
      //         ...loginStep1Statuses,
      //         loading: false,
      //         success: true,
      //         error: false,
      //       });
      //       setLoginStepTwoSwitch(true);
      //     } else {
      //       setLoginStep2Statuses({
      //         ...loginStep1Statuses,
      //         loading: false,
      //         success: false,
      //         error: true,
      //       });
      //       toast(res.data.message, { type: toast.TYPE.ERROR });
      //     }
      //   })
      //   .catch((err) => {
      //     setLoginStep2Statuses({
      //       ...loginStep1Statuses,
      //       loading: false,
      //       success: false,
      //       error: true,
      //     });
      //     toast('خطای شبکه', { type: toast.TYPE.ERROR });
      //   });
    }
  };

  return (
    <>
      {!loginStepTwoSwitch ? (
        <div className={classes.loginSideMain}>
          <input
            type="text"
            placeholder="شماره همراه"
            onChange={phoneInputChangeHandler}
            className={classes.loginSidePhoneInput}
          />
          {phoneInput.message && (
            <div className={classes.loginSideInputErrorsSpan}>
              {phoneInput.message}
            </div>
          )}
          <div className={classes.loginSideButtonBox}>
            <button
              type="button"
              disabled={loginStep1Statuses.loading}
              className={classes.loginSideButton}
              onClick={loginStep1ClickHandler}
            >
              {loginStep1Statuses.loading ? 'صبور باشید' : 'دریافت کد'}
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.loginSideStep2Main}>
          <h6 className={classes.registerStep2MainTitle}>
            کد دریافتی را وارد کنید
          </h6>
          <ReactCodeInput
            type="tezt"
            fields={6}
            onChange={(val) => registerReactCodeInputCganger(val)}
          />

          <Timer backToStep1={registerStep2BackHandler} />

          <div className={classes.registerStep2Buttonsbox}>
            <button
              type="button"
              onClick={registerStep2ClickHandler}
              disabled={registerStep2Statuses.loading}
              className={classes.registerStep2SubmitButton}
            >
              {registerStep2Statuses.loading ? 'صبور باشید' : 'ثبت نام'}
            </button>

            <button
              type="button"
              onClick={registerStep2BackHandler}
              disabled={registerStep2Statuses.loading}
              className={classes.registerStep2BackButton}
            >
              بازگشت
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginSide;