import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter, Router } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faUserAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import blogLinkContext from '../../contexts/blogLinkContext';
import UserDropdown from '../userDropdown/UserDropdown';
import { useCookies } from 'react-cookie';

function Header(props) {
  let router = useRouter();
  const [cookies] = useCookies(['token']);
  const [toggleUserDropdown, setToggleUserDropdown] = useState(false);

  let [toggleHamburger, setToggleHamburger] = useState(false);
  const toggleHamburgerMenu = () => {
    setToggleHamburger((prevState) => !prevState);
  };

  const showUserDropdown = () => {
    setToggleUserDropdown((prevState) => !prevState);
  };

  return (
    <header
      style={toggleHamburger ? { height: '23rem' } : null}
      className="header"
    >
      <div
        className={
          !toggleHamburger
            ? 'mobile-header-items-box'
            : 'mobile-header-items-box-toggle'
        }
      >
        <div className="mobile-header-top-left-socials">
          <a
            href="#"
            className="mobile-header-social-link header-socials-tooltip"
            data-title="آپارات"
          >
            <img
              src="/aparat-icon-31.png"
              alt=""
              className="mobile-header-top-left-social"
            />
          </a>
          <a
            href="#"
            className="mobile-header-social-link header-socials-tooltip"
            data-title="twitch"
          >
            <img
              src="/twitch.png"
              alt=""
              className="mobile-header-top-left-social"
            />
          </a>
          <a
            href="#"
            className="mobile-header-social-link header-socials-tooltip"
            data-title="اینستاگرام"
          >
            <img
              src="/instagram.png"
              alt=""
              className="mobile-header-top-left-social"
            />
          </a>
          <a
            href="#"
            className="mobile-header-social-link header-socials-tooltip"
            data-title="تلگرام"
          >
            <img
              src="/telegram.png"
              alt=""
              className="mobile-header-top-left-social"
            />
          </a>
        </div>
        {props.blogHeader || props.panelHeader ? (
          <Link href="/">
            <a className="mobile-header-navbar-item">خانه</a>
          </Link>
        ) : (
          <ScrollLink
            activeClass="mobile-header-navbar-item-active"
            to="top-slider-section"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="mobile-header-navbar-item"
            id="mobile-home-section-link"
          >
            خانه
          </ScrollLink>
        )}
        {props.blogHeader || props.panelHeader ? (
          <Link href="/#aboutUs">
            <a className="mobile-header-navbar-item">درباره ما</a>
          </Link>
        ) : (
          <ScrollLink
            activeClass="mobile-header-navbar-item-active"
            to="make-mony"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="mobile-header-navbar-item"
            id="mobile-aboutus-section-link"
          >
            درباره ما
          </ScrollLink>
        )}
        {props.blogHeader || props.panelHeader ? (
          <Link href="/#games">
            <a className="mobile-header-navbar-item">بازی ها</a>
          </Link>
        ) : (
          <ScrollLink
            activeClass="mobile-header-navbar-item-active"
            to="games-section"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="mobile-header-navbar-item"
            id="mobile-games-section-link"
          >
            بازی ها
          </ScrollLink>
        )}
        {props.blogHeader ? (
          <Link href="/blog">
            <a className="mobile-header-navbar-item-blog">بلاگ</a>
          </Link>
        ) : (
          <Link href="/blog">
            <a className="mobile-header-navbar-item">بلاگ</a>
          </Link>
        )}
        {props.blogHeader || props.panelHeader ? (
          <Link href="/#contactUs">
            <a className="mobile-header-navbar-item">ارتباط با ما</a>
          </Link>
        ) : (
          <ScrollLink
            activeClass="mobile-header-navbar-item-active"
            to="contact-us"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="mobile-header-navbar-item"
            id="mobile-contactus-section-link"
          >
            ارتباط با ما
          </ScrollLink>
        )}
      </div>
      <div id="hamburgerIcon" onClick={toggleHamburgerMenu}>
        <FontAwesomeIcon
          icon={toggleHamburger ? faTimes : faBars}
          className="hamburger-icon"
          id="hamburgerIconSelf"
        />
      </div>
      <img src="/BGIcon.png" alt="logo" className="mobile-header-logo" />
      <img src="/BGIcon.png" alt="logo" className="header-logo" />
      <div className="header-login-logo-box">
        <UserDropdown
          toggle={toggleUserDropdown}
          hideDropdown={() => setToggleUserDropdown(false)}
        />
        <div className="header-login-logo-keeper">
          <FontAwesomeIcon
            icon={faUserAlt}
            onClick={
              cookies.token === undefined
                ? props.showLoginRegisterModal
                : showUserDropdown
            }
            style={{ color: '' }}
            className={
              cookies.token === undefined
                ? 'header-login-logo'
                : 'header-login-logo-active'
            }
            id="loginLogo"
          />
        </div>
      </div>
      <div className="header-phone-logo-box">
        {props.blogHeader || props.panelHeader ? (
          <Link href="/#contactUs">
            <FontAwesomeIcon icon={faPhoneAlt} className="header-phone-logo" />
          </Link>
        ) : (
          <ScrollLink
            activeClass="header-phone-logo-active"
            to="contact-us"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
            className="header-phone-logo"
            id="home-section-link"
          >
            <FontAwesomeIcon icon={faPhoneAlt} />
          </ScrollLink>
        )}
      </div>
      <div className="header-top">
        <div className="header-top-left">
          <div className="header-top-left-socials">
            <a href="#" className="header-socials-tooltip" data-title="آپارات">
              <img
                src="/aparat-icon-31.png"
                alt=""
                className="header-top-left-social"
              />
            </a>
            <a href="#" className="header-socials-tooltip" data-title="twitch">
              <img
                src="/twitch.png"
                alt=""
                className="header-top-left-social"
              />
            </a>
            <a
              href="#"
              className="header-socials-tooltip"
              data-title="اینستاگرام"
            >
              <img
                src="/instagram.png"
                alt=""
                className="header-top-left-social"
              />
            </a>
            <a href="#" className="header-socials-tooltip" data-title="تلگرام">
              <img
                src="/telegram.png"
                alt=""
                className="header-top-left-social"
              />
            </a>
          </div>
          <p className="header-top-left-title">ما را دنبال کنید:</p>
        </div>
        <div className="header-top-center"></div>
        <div className="header-top-right">
          <p>با بازی مورد علاقه خود درامد زایی کنید</p>
        </div>
      </div>
      <div className="header-navbar">
        <div className="header-navbar-left">
          {props.blogHeader ? (
            <Link href="/blog">
              <a className="header-navbar-item-blog">بلاگ</a>
            </Link>
          ) : (
            <Link href="/blog">
              <a className="header-navbar-item">بلاگ</a>
            </Link>
          )}

          {props.blogHeader || props.panelHeader ? (
            <Link href="/#games">
              <a className="header-navbar-item">بازی ها</a>
            </Link>
          ) : (
            <ScrollLink
              activeClass="header-navbar-item-active"
              to="games-section"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="header-navbar-item"
              id="games-section-link"
            >
              بازی ها
            </ScrollLink>
          )}
        </div>
        <div className="header-navbar-item-center"></div>
        <div className="header-navbar-right">
          {props.blogHeader || props.panelHeader ? (
            <Link href="/#aboutUs">
              <a className="header-navbar-item">درباره ما</a>
            </Link>
          ) : (
            <ScrollLink
              activeClass="header-navbar-item-active"
              to="make-mony"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="header-navbar-item"
              id="aboutus-section-link"
            >
              درباره ما
            </ScrollLink>
          )}
          {props.blogHeader || props.panelHeader ? (
            <Link href="/">
              <a className="header-navbar-item">خانه</a>
            </Link>
          ) : (
            <ScrollLink
              activeClass="header-navbar-item-active"
              to="top-slider-section"
              spy={true}
              smooth={true}
              duration={500}
              offset={-150}
              className="header-navbar-item"
              id="home-section-link"
            >
              خانه
            </ScrollLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
