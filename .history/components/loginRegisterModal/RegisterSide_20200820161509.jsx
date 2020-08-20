import React, { useState } from 'react';
import axios from 'axios';
import ReactCodeInput from 'react-code-input';
import { ToastContainer, toast } from 'react-toastify';
import classes from './registerSide.module.css';

function RegisterSide() {
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

  let [minutes, setMinutes] = useState(2);
  let [seconds, setSeconds] = useState(0);

  let [registerStepTwoSwitch, setRegisterStepTwoSwitch] = useState(false);

  let [myTimer, setMyTimer] = useState(null);

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
      let regName = nameInput.value;
      let regFamily = familyInput.value;
      let regPhonenumber = phoneInput.value;

      const registerData = {
        firstName: regName,
        lastName: regFamily,
        phoneNumber: regPhonenumber,
      };

      console.log(registerData);

      // setRegisterStep1Statuses({
      //   ...registerStep1Statuses,
      //   loading: true,
      //   success: false,
      //   error: false,
      // });

      setRegisterStepTwoSwitch(true);
      setMinutes(2);
      setSeconds(0);

      clearInterval(myTimer);

      setMyTimer(
        setInterval(() => {
          // setSeconds((seconds) => seconds + 1);
          if (seconds > 0) {
            setSeconds((seconds) => seconds - 1);
          }
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(myTimer);
              setRegisterStepTwoSwitch(false);
            } else {
              setMinutes((minutes) => minutes - 1);
              setSeconds(59);
            }
          }
        }, 1000)
      );

      // axios
      //   .post('http://185.211.59.237/Account/RegisterClient', registerData)
      //   .then((res) => {
      //     console.log(res.data);

      //     if (res.data.state === 1) {
      //       setRegisterStep1Statuses({
      //         ...registerStep1Statuses,
      //         loading: false,
      //         success: true,
      //         error: false,
      //       });

      //       setRegisterStepTwoSwitch(true);
      //       setTimerValues({ ...timer, minutes: 2, seconds: 0 });

      //       this.setState({
      //         registerStepTwoSwitch: true,
      //         minutes: 2,
      //         seconds: 0,
      //       });

      //       clearInterval(this.myTimer);

      //       setMyTimer(
      //         setInterval(() => {
      //           let { minutes, seconds } = timerValues;
      //           if (seconds > 0) {
      //             setTimerValues({ ...timerValues, seconds: seconds - 1 });
      //           }
      //           if (seconds === 0) {
      //             if (minutes === 0) {
      //               clearInterval(myTimer);
      //               setRegisterStepTwoSwitch(false);
      //             } else {
      //               setTimerValues({
      //                 ...timerValues,
      //                 minutes: minutes - 1,
      //                 seconds: 59,
      //               });
      //             }
      //           }
      //         }, 1000)
      //       );
      //     } else {
      //       setRegisterStep1Statuses({
      //         ...registerStep1Statuses,
      //         loading: false,
      //         success: false,
      //         error: true,
      //       });
      //       toast(res.data.message, { type: toast.TYPE.ERROR });
      //     }
      //   })
      //   .catch((err) => {
      //     setRegisterStep1Statuses({
      //       ...registerStep1Statuses,
      //       loading: false,
      //       success: false,
      //       error: true,
      //     });
      //     toast('خطای شبکه', { type: toast.TYPE.ERROR });
      //   });
    }
  };

  const registerReactCodeInputCganger = (val) => {
    setStep2Code({ ...step2Code, value: val });
  };

  const registerStep2ClickHandler = () => {
    setRegisterStep2Statuses({
      ...registerStep2Statuses,
      loading: true,
      success: false,
      error: false,
    });

    axios
      .post('http://185.211.59.237/Account/Authenticate', {
        phoneNumber: this.state.registerPhoneNumberValue,
        smsToken: this.state.registerStep2CodeValue,
        rememberMe: this.state.registerChecked,
        roleGuid: '91b3cdab-39c1-40fb-b077-a2d6e611f50a',
      })
      .then((res) => {
        if (res.data.token !== null) {
          const registerStep2Status = { ...this.state.registerStep2Status };
          registerStep2Status.loading = false;
          registerStep2Status.success = true;
          registerStep2Status.error = false;

          this.setState({
            registerStep2Status: registerStep2Status,
            registerStepTwoSwitch: false,
            loginRegisterSwitch: false,
            registerBoxMinHeight: false,
            token: res.data.token,
          });
          toast('ثبت نام موفقیت آمیز بود', { type: toast.TYPE.SUCCESS });

          const { cookies } = this.props;

          let exp = new Date();
          exp.setDate(exp.getDate() + 30);
          console.log(exp);

          if (this.state.registerChecked) {
            cookies.set('token', res.data.token, {
              path: '/',
              expires: exp,
            });
            cookies.set('contractorOrClient', 'client', {
              path: '/',
              expires: exp,
            });
          } else {
            cookies.set('token', res.data.token, { path: '/' });
            cookies.set('contractorOrClient', 'client', { path: '/' });
          }

          this.props.history.replace('/');
        } else {
          const registerStep2Status = { ...this.state.registerStep2Status };
          registerStep2Status.loading = false;
          registerStep2Status.success = false;
          registerStep2Status.error = true;
          registerStep2Status.errorMsg = res.data.message;

          this.setState({
            registerStep2Status: registerStep2Status,
            // registerStepTwoSwitch: false,
            // loginRegisterSwitch: false
          });
          toast('کد وارد شده صحیح نمی باشد', { type: toast.TYPE.ERROR });
        }
      })
      .catch((err) => {
        const registerStep2Status = { ...this.state.registerStep2Status };
        registerStep2Status.loading = false;
        registerStep2Status.success = false;
        registerStep2Status.error = true;
        registerStep2Status.errorMsg = err.message;
        this.setState({ registerStep2Status: registerStep2Status });

        toast('خطای شبکه', { type: toast.TYPE.ERROR });
      });
  };

  const registerStep2BackHandler = () => {
    setRegisterStepTwoSwitch(false);
  };
  return (
    <>
      {!registerStepTwoSwitch ? (
        <div className={classes.registerSideMain}>
          <input
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
              className={classes.registerSideButton}
              onClick={registerStep1ClickHandler}
            >
              دریافت کد
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

          <div className={classes.timerBox}>
            <span>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>

          <div className={classes.registerStep2Buttonsbox}>
            <button
              type="button"
              onClick={registerStep2ClickHandler}
              disabled={registerStep1Statuses.loading}
              className={classes.registerStep2SubmitButton}
            >
              {registerStep1Statuses.loading ? 'صبور باشید' : 'ثبت نام'}
            </button>

            <button
              type="button"
              onClick={registerStep2BackHandler}
              disabled={registerStep1Statuses.loading}
              className={classes.registerStep2BackButton}
            >
              بازگشت
            </button>
          </div>
        </div>
      )}

      <ToastContainer
        autoClose={4000}
        position={toast.POSITION.TOP_CENTER}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnVisibilityChange={false}
        pauseOnHover={false}
        rtl
      />
    </>
  );
}

export default RegisterSide;
