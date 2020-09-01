import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactCodeInput from 'react-code-input';
import { ToastContainer, toast } from 'react-toastify';
import Timer from './Timer';
import classes from './loginSide.module.css';

function LoginSide(props) {
  let firstInput = useRef(null);
  // useEffect(() => {
  //   firstInput.current.focus();
  // }, []);
  useEffect(() => {
    if (props.show) {
      firstInput.current.focus();
    }
    if (props.show === false) {
      console.log('false');
      setPhoneInput({ ...phoneInput, value: '', valid: true, message: '' });
      setStep2Code({ ...step2Code, value: '', valid: true, message: '' });
      setLoginStepTwoSwitch(false);
    }
  }, [props.show]);

  let [phoneInput, setPhoneInput] = useState({
    value: '',
    valid: true,
    message: '',
  });
  let [step2Code, setStep2Code] = useState({
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
      setLoginStep1Statuses({
        ...loginStep1Statuses,
        loading: true,
        success: false,
        error: false,
      });

      axios
        .post('http://185.211.56.9:5000/Account/Login', {
          phoneNumber: phoneInput.value,
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.succeeded === true) {
            setLoginStep1Statuses({
              ...loginStep1Statuses,
              loading: false,
              success: true,
              error: false,
            });
            setLoginStepTwoSwitch(true);
          } else {
            setLoginStep1Statuses({
              ...loginStep1Statuses,
              loading: false,
              success: false,
              error: true,
            });
            toast(res.data.message, { type: toast.TYPE.ERROR });
          }
        })
        .catch((err) => {
          setLoginStep1Statuses({
            ...loginStep1Statuses,
            loading: false,
            success: false,
            error: true,
          });
          toast('خطای شبکه', { type: toast.TYPE.ERROR });
        });
    }
  };

  const loginReactCodeInputCganger = (val) => {
    setStep2Code({ ...step2Code, value: val });
  };

  const loginStep2ClickHandler = () => {
    if (step2Code.value.length !== 6 || !/^\d+$/.test(step2Code.value)) {
      toast('کد وارد شده معتبر نیست', { type: toast.TYPE.ERROR });
    }

    if (step2Code.value.length === 6 && /^\d+$/.test(step2Code.value)) {
      setLoginStep2Statuses({
        ...loginStep2Statuses,
        loading: true,
        success: false,
        error: false,
      });

      axios
        .post('http://185.211.56.9:5000/Account/Authenticate', {
          phoneNumber: phoneInput.value,
          token: step2Code.value,
          rememberMe: true,
        })
        .then((res) => {
          if (res.data.token !== null) {
            setLoginStep2Statuses({
              ...loginStep2Statuses,
              loading: false,
              success: true,
              error: false,
            });
            setLoginStepTwoSwitch(false);
            props.closeModalAfterLogin();
            toast('ورود موفقیت آمیز بود', { type: toast.TYPE.SUCCESS });
          } else {
            setLoginStep2Statuses({
              ...loginStep2Statuses,
              loading: true,
              success: false,
              error: false,
            });
            toast('کد وارد شده صحیح نمی باشد', { type: toast.TYPE.ERROR });
          }
        })
        .catch((err) => {
          setLoginStep2Statuses({
            ...loginStep2Statuses,
            loading: false,
            success: false,
            error: true,
          });

          toast('خطای شبکه', { type: toast.TYPE.ERROR });
        });
    }
  };

  const loginStep2BackHandler = () => {
    setLoginStepTwoSwitch(false);
  };

  console.log(step2Code.value);

  return (
    <>
      {!loginStepTwoSwitch ? (
        <div className={classes.loginSideMain}>
          <input
            autoFocus
            ref={firstInput}
            type="text"
            value={phoneInput.value}
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
          <h6 className={classes.loginStep2MainTitle}>
            کد دریافتی را وارد کنید
          </h6>
          <ReactCodeInput
            type="tezt"
            fields={6}
            value={step2Code.value}
            onChange={(val) => loginReactCodeInputCganger(val)}
          />

          <Timer backToStep1={loginStep2BackHandler} />

          <div className={classes.loginStep2Buttonsbox}>
            <button
              type="button"
              onClick={loginStep2ClickHandler}
              disabled={loginStep2Statuses.loading}
              className={classes.loginStep2SubmitButton}
            >
              {loginStep2Statuses.loading ? 'صبور باشید' : 'ادامه'}
            </button>

            <button
              type="button"
              onClick={loginStep2BackHandler}
              disabled={loginStep2Statuses.loading}
              className={classes.loginStep2BackButton}
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
