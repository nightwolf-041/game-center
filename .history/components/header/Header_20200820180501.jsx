import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faUserAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  let [toggleHamburger, setToggleHamburger] = useState(false);
  const toggleHamburgerMenu = () => {
    setToggleHamburger((prevState) => !prevState);
  };

  return (
    <header className={!toggleHamburger ? 'header' : 'header-toggle-mobile'}>
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
        <Link
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
        </Link>
        <Link
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
        </Link>
        <Link
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
        </Link>
        <Link
          activeClass="mobile-header-navbar-item-active"
          to="blog-section"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="mobile-header-navbar-item"
          id="mobile-blog-section-link"
        >
          بلاگ
        </Link>
        <Link
          activeClass="mobile-header-navbar-item-active"
          to="contact-us"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
          className="mobile-header-navbar-item"
          id="mobile-contactus-section-link"
        >
          ارتباط با ما
        </Link>
      </div>
      <div id="mobileLoginLogoKeeper" onClick={props.showLoginRegisterModal}>
        <i
          className="fas fa-user-alt header-login-logo"
          id="mobileLoginLogoKeeperSelf"
        ></i>
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
        <div
          className="header-login-logo-keeper"
          onClick={props.showLoginRegisterModal}
        >
          <FontAwesomeIcon
            icon={faUserAlt}
            className="header-login-logo"
            id="loginLogo"
          />
        </div>
      </div>
      <div className="header-phone-logo-box">
        <Link
          activeClass="header-phone-logo-active"
          to="contact-us"
          spy={true}
          smooth={true}
          duration={500}
          offset={-350}
          className="header-phone-logo"
          id="home-section-link"
        >
          <FontAwesomeIcon icon={faPhoneAlt} />
        </Link>
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
          <Link
            activeClass="header-navbar-item-active"
            to="blog-section"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
            className="header-navbar-item"
            id="blog-section-link"
          >
            بلاگ
          </Link>
          <Link
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
          </Link>
        </div>
        <div className="header-navbar-item-center"></div>
        <div className="header-navbar-right">
          <Link
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
          </Link>
          <Link
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
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;