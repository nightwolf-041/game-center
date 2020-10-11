import React from 'react';

function PanelInput() {
  return (
    <div class="form-group name-group">
      <div class="palceholder">
        <label for={props.inputID}>Name</label>
        <span class="star">*</span>
      </div>
      <input type="text" class="form-control" id={props.inputID} />
    </div>
  );
}

export default PanelInput;
