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
      <input
        type="text"
        className={classes.panelMainInput}
        id={props.inputID}
        value={props.inputValue}
        onChange={props.inputChange}
      />
      {showPlaceHolder && (
        <div className={classes.panelMainInputPlaceholderBox}>
          <label for={props.inputID}>{props.placeholderName}</label>
          {props.requireInput && <span>*</span>}
        </div>
      )}
    </div>
  );
}

export default PanelInput;
