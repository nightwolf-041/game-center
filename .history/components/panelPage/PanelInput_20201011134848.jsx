import React from 'react';

function PanelInput() {
  return (
    <div className={classes.panelMainInputBox}>
      <div className={classes.panelMainInputPlaceholderBox}>
        <label for={props.inputID}>{props.labelName}</label>
        <span>*</span>
      </div>
      <input
        type="text"
        className={classes.panelMainInput}
        id={props.inputID}
      />
    </div>
  );
}

export default PanelInput;
