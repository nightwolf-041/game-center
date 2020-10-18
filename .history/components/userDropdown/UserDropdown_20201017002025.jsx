import React from 'react';
import classes from './userDropdown.module.css';

function UserDropdown({ toggle }) {
  return (
    <div className={toggle ? classes.userDropdown : classes.userDropdownHidden}>
      <div className={classes.userDropdownItem}>داشبورد</div>
      <div className={classes.userDropdownItem}>خروج</div>
    </div>
  );
}

export default UserDropdown;
