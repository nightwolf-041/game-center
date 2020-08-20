import React, { useState } from 'react';
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

  let [registerStep1Statuses, setRegisterStep1Statuses] = useState({
    loading = null,
    success = null,
    error = null
  })

  let [timerValues, setTimerValues] = useState({
    minutes: 2,
    seconds: 0
  })

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

      setRegisterStep1Statuses({...registerStep1Statuses, loading: true, success: false, error: false})

      axios
        .post('http://185.211.59.237/Account/RegisterClient', registerData)
        .then((res) => {
          console.log(res.data);

          if (res.data.state === 1) {
            setRegisterStep1Statuses({...registerStep1Statuses, loading: false, success: true, error: false})

            setRegisterStepTwoSwitch(true)
            setTimerValues({...timer, minutes: 2, seconds: 0})

            this.setState({
              registerStepTwoSwitch: true,
              minutes: 2,
              seconds: 0,
            });

            clearInterval(this.myTimer);

            this.myTimer = setInterval(() => {
              let { minutes, seconds } = this.state;

              if (seconds > 0) {
                this.setState(({ seconds }) => ({
                  seconds: seconds - 1,
                }));
              }
              if (seconds === 0) {
                if (minutes === 0) {
                  clearInterval(this.myTimer);
                  this.setState({
                    registerStepTwoSwitch: false,
                    registerBoxMinHeight: false,
                  });
                } else {
                  this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59,
                  }));
                }
              }
            }, 1000);
          } else {
            console.log(res.data);
            const registerStatus = { ...this.state.registerStatus };
            registerStatus.loading = false;
            registerStatus.success = false;
            registerStatus.error = true;
            registerStatus.errorMsg = res.data.message;

            this.setState({
              registerStatus: registerStatus,
            });

            toast(res.data.message, { type: toast.TYPE.ERROR });
          }
        })
        .catch((err) => {
          const registerStatus = { ...this.state.registerStatus };
          registerStatus.loading = false;
          registerStatus.success = false;
          registerStatus.error = true;
          registerStatus.errorMsg = err.message;
          this.setState({ registerStatus: registerStatus });
        });
    }
  };

  return (
    <div className={classes.registerSideMain}>
      <input
        type="text"
        placeholder="نام"
        value={nameInput.value}
        className={classes.registerSideTextInput}
        onChange={nameInputChangeHandler}
      />
      <input
        type="text"
        placeholder="نام خانوادگی"
        value={familyInput.value}
        className={classes.registerSideTextInput}
        onChange={familyInputChangeHandler}
      />
      <input
        type="text"
        placeholder="شماره همراه"
        value={phoneInput.value}
        className={classes.registerSidePhoneInput}
        onChange={phoneInputChangeHandler}
      />
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
  );
}

export default RegisterSide;
