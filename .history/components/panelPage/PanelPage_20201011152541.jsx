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
  const [identifireCode, setActivity] = useState('');

  return (
    <div className={classes.panelPageMain}>
      <div className={classes.panelPageMainBackdrop}></div>
      <div className={classes.panelPageTitleBox}>
        <h1 className={classes.panelPageTitle}>تکمیل اطلاعات شخصی</h1>
      </div>
      <div className="container">
        <div className={classes.panelMainTop}>
          <div className={classes.panelMainTopLeft}></div>
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
          </div>
        </div>
        <div className={classes.panelMainBottom}></div>
      </div>
    </div>
  );
}

export default PanelPage;
