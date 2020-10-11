import React, { useEffect, useState } from 'react';
import classes from './panelPage.module.css';

function PanelInput() {
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);
  useEffect(() => {
    if (props.inputValue.length > 0) {
      setShowPlaceHolder(false);
    }
  }, [props.inputValue]);

  return (
    <div className={classes.panelMainInputBox}>
      <div
        className={classes.panelMainInputPlaceholderBox}
        onClick={() => setShowPlaceHolder(false)}
      >
        <label for={props.inputID}>{props.placeholderName}</label>
        {props.requireInput && <span>*</span>}
      </div>
      <input
        type="text"
        className={classes.panelMainInput}
        id={props.inputID}
        value={props.inputValue}
        onChange={props.inputChange}
      />
    </div>
  );
}

export default PanelInput;
