import React from 'react';
import classes from './userDropdown.module.css';

function UserDropdown() {
  return (
    <div className={classes.userDropdown}>
      <div className={classes.userDropdownItem}>داشبورد</div>
      <div className={classes.userDropdownItem}>خروج</div>
    </div>
  );
}

export default UserDropdown;
