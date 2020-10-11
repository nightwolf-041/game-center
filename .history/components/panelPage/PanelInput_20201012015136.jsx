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
  // { label, register, required }
  const { register, required } = props;

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
          name={props.name}
          // ref={register({ required })}
          ref={register({
            required,
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address',
            },
          })}
        />
      </div>
      <span className={classes.panelInputValidationSpan}>
        {/* {props.validMessage} */}
      </span>
    </>
  );
}

export default PanelInput;
