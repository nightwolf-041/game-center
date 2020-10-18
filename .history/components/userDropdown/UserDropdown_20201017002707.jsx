import React from 'react';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import classes from './userDropdown.module.css';

function UserDropdown({ toggle }) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return (
    <div className={toggle ? classes.userDropdown : classes.userDropdownHidden}>
      <Link href="/panel">
        <a className={classes.userDropdownItem}>داشبورد</a>
      </Link>
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
