import React, { useState } from 'react';
import PanelInput from './PanelInput';
import classes from './panelPage.module.css';

function PanelPage() {
  const [latinName, setLatinName] = useState({
    name: '',
    family: '',
  });
  const [email, setEmail] = useState('');
  const [activity, setActivity] = useState('');
  const [identifireCode, setIdentifireCode] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startYear, setStartYear] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className={classes.panelPageMain}>
      <div className={classes.panelPageMainBackdrop}></div>
      <div className={classes.panelPageTitleBox}>
        <h1 className={classes.panelPageTitle}>تکمیل اطلاعات شخصی</h1>
      </div>
      <div className="container">
        <div className={classes.panelMainTop}>
          <div className={classes.panelMainTopLeft}>
            <PanelInput
              inputID="birth-day"
              placeholderName="تاریخ تولد"
              requireInput
              inputValue={birthDay}
              inputChange={(e) => setBirthDay(e.target.value)}
            />
            <PanelInput
              inputID="phone-number"
              placeholderName="تلفن ثابت"
              requireInput
              inputValue={phoneNumber}
              inputChange={(e) => setPhoneNumber(e.target.value)}
            />
            <PanelInput
              inputID="start-year"
              placeholderName="سال شروع فعالیت"
              requireInput
              inputValue={startYear}
              inputChange={(e) => setStartYear(e.target.value)}
            />
            <PanelInput
              inputID="location"
              placeholderName="محل سکونت"
              requireInput
              inputValue={location}
              inputChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className={classes.panelMainTopRight}>
            <PanelInput
              inputID="latin-name"
              placeholderName="نام لاتین"
              requireInput
              centerText
              inputValue={latinName.name}
              inputChange={(e) =>
                setLatinName({ ...latinName, name: e.target.value })
              }
            />
            <PanelInput
              inputID="latin-family"
              placeholderName="نام خانوادگی لاتین"
              requireInput
              centerText
              inputValue={latinName.family}
              inputChange={(e) =>
                setLatinName({ ...latinName, family: e.target.value })
              }
            />
            <PanelInput
              inputID="email"
              placeholderName="ایمیل"
              requireInput
              centerText
              inputValue={email}
              inputChange={(e) => setEmail(e.target.value)}
            />
            <PanelInput
              inputID="activities"
              placeholderName="حوضه فعالیت"
              requireInput
              //   centerText
              inputValue={activity}
              inputChange={(e) => setActivity(e.target.value)}
            />
            <PanelInput
              inputID="activities"
              placeholderName="حوضه فعالیت"
              requireInput
              //   centerText
              inputValue={email}
              inputChange={(e) => setEmail(e.target.value)}
            />
            <PanelInput
              inputID="identifire-code"
              placeholderName="کد معرف"
              centerText
              inputValue={identifireCode}
              inputChange={(e) => setIdentifireCode(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.panelMainBottom}></div>
      </div>
    </div>
  );
}

export default PanelPage;
