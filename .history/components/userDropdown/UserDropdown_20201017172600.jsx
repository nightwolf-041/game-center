import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from '';
import { useCookies } from 'react-cookie';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import classes from './userDropdown.module.css';

function UserDropdown({ toggle, hideDropdown }) {
  const userDropdownRef = useRef(null);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  useOnClickOutside(userDropdownRef, () => hideDropdown());

  const removeCookieHandler = () => {
    removeCookie('token');
  };

  return (
    <div
      ref={userDropdownRef}
      className={toggle ? classes.userDropdown : classes.userDropdownHidden}
    >
      <Link href="/panel">
        <a className={classes.userDropdownItem}>داشبورد</a>
      </Link>
      <div className={classes.userDropdownItem} onClick={removeCookieHandler}>
        خروج
      </div>
    </div>
  );
}

export default UserDropdown;
