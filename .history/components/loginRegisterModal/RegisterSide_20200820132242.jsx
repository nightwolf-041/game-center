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
    if (!nameInput) {
      setNameInput({ ...nameInput, valid: false, message: 'الزامیست' });
    } else if (nameInput.length < 3) {
      setNameInput({ ...nameInput, valid: false, message: 'کوتاه است' });
    } else {
      setNameInput({ ...nameInput, valid: true, message: '' });
    }

    if (!familyInput) {
      setFamilyInput({ ...familyInput, valid: false, message: 'الزامیست' });
    } else if (familyInput.length < 3) {
      setFamilyInput({ ...familyInput, valid: false, message: 'کوتاه است' });
    } else {
      setFamilyInput({ ...familyInput, valid: true, message: '' });
    }

    if (!phoneInput) {
      setPhoneInput({ ...phoneInput, valid: false, message: 'الزامیست' });
    } else if (!/^\d+$/.test(phoneInput)) {
      setPhoneInput({
        ...phoneInput,
        valid: false,
        message: 'شماره موبایل معتبر نیست',
      });
    } else if (phoneInput.length !== 11) {
      setPhoneInput({
        ...phoneInput,
        valid: false,
        message: 'شماره موبایل صحیح نیست',
      });
    } else {
      setPhoneInput({ ...phoneInput, valid: true, message: '' });
    }

    if (
      this.state.registerNameValue.length >= 3 &&
      this.state.registerFamlyValue.length >= 3 &&
      this.state.cityValue !== null &&
      this.state.registerPhoneNumberValue.length === 11 &&
      /^\d+$/.test(this.state.registerPhoneNumberValue) &&
      this.state.registerRuleChecked === true
    ) {
      let regName = this.state.registerNameValue;
      let regFamily = this.state.registerFamlyValue;
      let regPhonenumber = this.state.registerPhoneNumberValue;
      let regCity = this.state.cityValue.cityGuid;
      let regGender = this.state.genderValue.value;

      const registerData = {
        firstName: regName,
        lastName: regFamily,
        email: '',
        phoneNumber: regPhonenumber,
        cityGuid: regCity,
        genderGuid: regGender,
      };

      console.log(registerData);

      const registerStatus = { ...this.state.registerStatus };
      registerStatus.loading = true;
      registerStatus.success = false;
      registerStatus.error = false;
      this.setState({ registerStatus: registerStatus });

      axios
        .post('http://185.211.59.237/Account/RegisterClient', registerData)
        .then((res) => {
          console.log(res.data.state);

          if (res.data.state === 1) {
            const registerStatus = { ...this.state.registerStatus };
            registerStatus.loading = false;
            registerStatus.success = true;
            registerStatus.error = false;

            this.setState({
              registerStatus: registerStatus,
              registerStepTwoSwitch: true,
              registerBoxMinHeight: true,
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
