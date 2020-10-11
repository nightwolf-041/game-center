import React, { useState } from 'react';
import PanelInput from './PanelInput';
import classes from './panelPage.module.css';

function PanelPage() {
  const [latinName, setLatinName] = useState({
    name: '',
    family: '',
  });
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
              rightToLeft
              inputValue={latinName.name}
              inputChange={(e) =>
                setLatinName({ ...latinName, name: e.target.value })
              }
            />
            <PanelInput
              inputID="latin-family"
              placeholderName="نام خانوادگی لاتین"
              requireInput
              rightToLeft
              inputValue={latinName.family}
              inputChange={(e) =>
                setLatinName({ ...latinName, family: e.target.value })
              }
            />
          </div>
        </div>
        <div className={classes.panelMainBottom}></div>
      </div>
    </div>
  );
}

export default PanelPage;