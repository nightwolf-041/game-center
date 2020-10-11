import React, { useEffect, useState } from 'react';
import classes from './panelPage.module.css';

function PanelInput(props) {
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);
  useEffect(() => {
    if (props.inputValue.length > 0) {
      setShowPlaceHolder(false);
    } else {
      setShowPlaceHolder(true);
    }
  }, [props.inputValue]);

  renderInputClassName = () => {
    if (props.centerText) {
      return classes.panelMainCenterInput;
    } else if (props.rightToLeft) {
      return classes.panelMainRTLInput;
    } else {
      return classes.panelMainLTRInput;
    }
  };

  return (
    <div className={classes.panelMainInputBox}>
      {showPlaceHolder && (
        <div className={classes.panelMainInputPlaceholderBox}>
          {props.requireInput && <span>*</span>}
          <label for={props.inputID}>{props.placeholderName}</label>
        </div>
      )}
      <input
        type="text"
        className={
          props.rightToLeft
            ? classes.panelMainRTLInput
            : classes.panelMainLTRInput
        }
        id={props.inputID}
        value={props.inputValue}
        onChange={props.inputChange}
      />
    </div>
  );
}

export default PanelInput;
