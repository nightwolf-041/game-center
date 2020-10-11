import React, { useState } from 'react';
import classes from './panelPage.module.css';

function PanelInput() {
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);
  return (
    <div className={classes.panelMainInputBox}>
      <div className={classes.panelMainInputPlaceholderBox} onClick={}>
        <label for={props.inputID}>{props.placeholderName}</label>
        {props.requireInput && <span>*</span>}
      </div>
      <input
        type="text"
        className={classes.panelMainInput}
        id={props.inputID}
        value={props.inputValue}
        onChange={prop.inputChange}
        onBlur={}
      />
    </div>
  );
}

export default PanelInput;
