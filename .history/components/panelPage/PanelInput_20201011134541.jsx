import React from 'react';

function PanelInput() {
  return (
    <div className="form-group name-group">
      <div className="palceholder">
        <label for={props.inputID}>{props.labelName}</label>
        <span className="star">*</span>
      </div>
      <input type="text" className="form-control" id={props.inputID} />
    </div>
  );
}

export default PanelInput;
