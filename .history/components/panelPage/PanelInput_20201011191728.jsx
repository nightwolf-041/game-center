import React, { useEffect, useState } from 'react';
import classes from './panelPage.module.css';

function PanelInput(props) {
  const renderInputClassName = () => {
    if (props.centerText) {
      return classes.panelMainCenterInput;
    } else if (props.rightToLeft) {
      return classes.panelMainRTLInput;
    } else {
      return classes.panelMainLTRInput;
    }
  };

  return (
    <>
      <div className={classes.panelMainInputBox}>
        <div className={classes.panelMainInputPlaceholderBox}>
          <label htmlFor={props.inputID}>{props.placeholderName}</label>
          {props.requireInput && <span>*</span>}
        </div>
        <input
          type="text"
          className={renderInputClassName()}
          id={props.inputID}
          value={props.inputValue}
          onChange={props.inputChange}
        />
      </div>
      <span className={classes.panelInputValidationSpan}>
        {props.validMessage}
      </span>
    </>
  );
}

export default PanelInput;
