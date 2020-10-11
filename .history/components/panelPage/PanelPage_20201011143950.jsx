import React from 'react';
import PanelInput from './PanelInput';
import classes from './panelPage.module.css';

function PanelPage() {
  return (
    <div className={classes.panelPageMain}>
      <div className={classes.panelPageMainBackdrop}></div>
      <h1 className={classes.panelPageTitle}>تکمیل اطلاعات شخصی</h1>
      <div className={classes.panelMainTop}>
        <div className={classes.panelMainTopLeft}></div>
        <div className={classes.panelMainTopRight}>
          <PanelInput
            inputID="name"
            placeholderName
            requireInput
            inputValue
            inputChange
          />
        </div>
      </div>
      <div className={classes.panelMainBottom}></div>
    </div>
  );
}

export default PanelPage;
