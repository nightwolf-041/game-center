import React from 'react';
import classes from './userDropdown.module.css';

function UserDropdown({ toggle }) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return (
    <div className={toggle ? classes.userDropdown : classes.userDropdownHidden}>
      <Link href="/#contactUs">
        <a className="mobile-header-navbar-item">ارتباط با ما</a>
      </Link>
      <div className={classes.userDropdownItem}>داشبورد</div>
      <div
        className={classes.userDropdownItem}
        onClick={() => removeCookie('token')}
      >
        خروج
      </div>
    </div>
  );
}

export default UserDropdown;
