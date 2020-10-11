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
        className={classes.panelMainInput}
        id={props.inputID}
        value={props.inputValue}
        onChange={props.inputChange}
      />
    </div>
  );
}

export default PanelInput;
