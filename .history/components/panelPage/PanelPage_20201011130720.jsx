import React from 'react';
import classes from './panelPage.module.css';

function PanelPage() {
  return (
    <div className={classes.panelPageMain}>
      <div className={classes.panelPageMainBackdrop}></div>
      <h1 className={classes.panelPageTitle}>تکمیل اطلاعات شخصی</h1>
    </div>
  );
}

export default PanelPage;
