import React from 'react';

function PanelInput() {
  return (
    <div className={classes.panelMainInputBox}>
      <div className={classes.panelMainInputPlaceholderBox}>
        <label for={props.inputID}>{props.placeholderName}</label>
        {props.requireSpan && <span>*</span>}
      </div>
      <input
        type="text"
        className={classes.panelMainInput}
        id={props.inputID}
        value={props.inputValue}
        onChange={prop.inputChange}
      />
    </div>
  );
}

export default PanelInput;
