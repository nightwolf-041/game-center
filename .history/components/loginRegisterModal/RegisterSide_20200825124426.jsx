import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactCodeInput from 'react-code-input';
import { toast } from 'react-toastify';
import Timer from './Timer';
import classes from './registerSide.module.css';

function RegisterSide(props) {
  const firstInput = useRef(null);
  // useEffect(() => {
  //   firstInput.current.focus();
  // }, []);

  useEffect(() => {
    if (props.show) {
      firstInput.current.focus();
    }
  }, [props.show]);

  let [nameInput, setNameInput] = useState({
    value: '',
    valid: true,
    message: '',
  });
  let [familyInput, setFamilyInput] = useState({
    value: '',
    valid: true,
    message: '',
  });
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

  let [registerStepTwoSwitch, setRegisterStepTwoSwitch] = useState(false);
  // let [registerToSuccessModal, setRegisterToSuccessModal] = useState(false);

  const nameInputChangeHandler = (e) => {
    setNameInput({ ...nameInput, value: e.target.value });
  };
  const familyInputChangeHandler = (e) => {
    setFamilyInput({ ...familyInput, value: e.target.value });
  };
  const phoneInputChangeHandler = (e) => {
    setPhoneInput({ ...phoneInput, value: e.target.value });
  };

  const registerStep1ClickHandler = () => {
    if (!nameInput.value) {
      setNameInput({ ...nameInput, valid: false, message: 'الزامیست' });
    } else if (nameInput.value.length < 3) {
      setNameInput({ ...nameInput, valid: false, message: 'کوتاه است' });
    } else {
      setNameInput({ ...nameInput, valid: true, message: '' });
    }

    if (!familyInput.value) {
      setFamilyInput({ ...familyInput, valid: false, message: 'الزامیست' });
    } else if (familyInput.value.length < 3) {
      setFamilyInput({ ...familyInput, valid: false, message: 'کوتاه است' });
    } else {
      setFamilyInput({ ...familyInput, valid: true, message: '' });
    }

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

    if (
      nameInput.value.length >= 3 &&
      familyInput.value.length >= 3 &&
      phoneInput.value.length === 11 &&
      /^\d+$/.test(phoneInput.value)
    ) {
      setRegisterStep1Statuses({
        ...registerStep1Statuses,
        loading: true,
        success: false,
        error: false,
      });

      // setRegisterStepTwoSwitch(true);

      axios
        .post('http://185.211.56.9:5000/Account/Register', {
          firstName: nameInput.value.trim(),
          lastName: familyInput.value.trim(),
          phoneNumber: phoneInput.value,
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.succeeded === true) {
            setRegisterStep1Statuses({
              ...registerStep1Statuses,
              loading: false,
              success: true,
              error: false,
            });
            setRegisterStepTwoSwitch(true);
          } else {
            setRegisterStep1Statuses({
              ...registerStep1Statuses,
              loading: false,
              success: false,
              error: true,
            });
            toast(res.data.errors[0], { type: toast.TYPE.ERROR });
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

  const registerReactCodeInputCganger = (val) => {
    setStep2Code({ ...step2Code, value: val });
  };

  const registerStep2ClickHandler = () => {
    if (step2Code.value.length !== 6 || !/^\d+$/.test(step2Code.value)) {
      toast('کد وارد شده معتبر نیست', { type: toast.TYPE.ERROR });
    }

    if (step2Code.value.length === 6 && /^\d+$/.test(step2Code.value)) {
      setRegisterStep2Statuses({
        ...registerStep2Statuses,
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
          console.log(res.data);
          if (res.data.token !== undefined && res.data.succeeded === true) {
            setRegisterStep2Statuses({
              ...registerStep2Statuses,
              loading: false,
              success: true,
              error: false,
            });
            // setRegisterStepTwoSwitch(false);
            props.showSuccessModalHandler();
            toast('ثبت نام موفقیت آمیز بود', { type: toast.TYPE.SUCCESS });
          } else {
            setRegisterStep2Statuses({
              ...registerStep2Statuses,
              loading: false,
              success: false,
              error: true,
            });
            toast('کد وارد شده صحیح نمی باشد', { type: toast.TYPE.ERROR });
          }
        })
        .catch((err) => {
          setRegisterStep2Statuses({
            ...registerStep2Statuses,
            loading: false,
            success: false,
            error: true,
          });
          toast('خطای شبکه', { type: toast.TYPE.ERROR });
        });
    }
  };

  const registerStep2BackHandler = () => {
    setRegisterStepTwoSwitch(false);
  };

  return (
    <>
      {!registerStepTwoSwitch ? (
        <div className={classes.registerSideMain}>
          <input
            autoFocus
            ref={firstInput}
            type="text"
            placeholder="نام"
            value={nameInput.value}
            className={classes.registerSideTextInput}
            onChange={nameInputChangeHandler}
          />
          {nameInput.message && (
            <div className={classes.registerInputErrorsSpan}>
              {nameInput.message}
            </div>
          )}
          <input
            type="text"
            placeholder="نام خانوادگی"
            value={familyInput.value}
            className={classes.registerSideTextInput}
            onChange={familyInputChangeHandler}
          />
          {familyInput.message && (
            <div className={classes.registerInputErrorsSpan}>
              {familyInput.message}
            </div>
          )}
          <input
            type="text"
            placeholder="شماره همراه"
            value={phoneInput.value}
            className={classes.registerSidePhoneInput}
            onChange={phoneInputChangeHandler}
          />
          {phoneInput.message && (
            <div className={classes.registerInputErrorsSpan}>
              {phoneInput.message}
            </div>
          )}
          <div className={classes.registerSideButtonBox}>
            <button
              type="button"
              disabled={registerStep1Statuses.loading}
              className={classes.registerSideButton}
              onClick={registerStep1ClickHandler}
            >
              {registerStep1Statuses.loading ? 'صبور باشید' : 'دریافت کد'}
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.registerStep2Main}>
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

export default RegisterSide;
