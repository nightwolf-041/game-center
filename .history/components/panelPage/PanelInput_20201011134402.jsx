import React from 'react';

function PanelInput() {
    
  return <div class="form-group name-group">
  <div class="palceholder">
    <label for="name">Name</label>
    <span class="star">*</span>
  </div>
  <input type="text" class="form-control" id="name" required>
</div>;
}

export default PanelInput;
