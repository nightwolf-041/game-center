import React from 'react';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import classes from './userDropdown.module.css';

function UserDropdown({ toggle, hideDropdown }) {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  useOnClickOutside(ref, () => hideDropdown());
  return (
    <div
      ref={userDropdownRef}
      className={toggle ? classes.userDropdown : classes.userDropdownHidden}
    >
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
