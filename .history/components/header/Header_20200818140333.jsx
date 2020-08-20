import React from 'react';

function Header() {
  return (
    <header class="header">
      <div class="mobile-header-items-box">
        <div class="mobile-header-top-left-socials">
          <a href="#" class="mobile-header-social-link">
            <img
              src="./img/aparat-icon-31.png"
              alt=""
              class="mobile-header-top-left-social"
            />
          </a>
          <a href="#" class="mobile-header-social-link">
            <img
              src="./img/twitch.png"
              alt=""
              class="mobile-header-top-left-social"
            />
          </a>
          <a href="#" class="mobile-header-social-link">
            <img
              src="./img/instagram.png"
              alt=""
              class="mobile-header-top-left-social"
            />
          </a>
          <a href="#" class="mobile-header-social-link">
            <img
              src="./img/telegram.png"
              alt=""
              class="mobile-header-top-left-social"
            />
          </a>
        </div>
        <a
          href="#"
          class="mobile-header-navbar-item"
          id="mobile-home-section-link"
        >
          خانه
        </a>
        <a
          href="#"
          class="mobile-header-navbar-item"
          id="mobile-aboutus-section-link"
        >
          درباره ما
        </a>
        <a
          href="#"
          class="mobile-header-navbar-item"
          id="mobile-games-section-link"
        >
          بازی ها
        </a>
        <a
          href="#"
          class="mobile-header-navbar-item"
          id="mobile-blog-section-link"
        >
          بلاگ
        </a>
        <a
          href="#"
          class="mobile-header-navbar-item"
          id="mobile-contactus-section-link"
        >
          تماس با ما
        </a>
      </div>
      <div id="mobileLoginLogoKeeper">
        <i
          class="fas fa-user-alt header-login-logo"
          id="mobileLoginLogoKeeperSelf"
        ></i>
      </div>
      <div id="hamburgerIcon">
        <i class="fas fa-bars hamburger-icon" id="hamburgerIconSelf"></i>
      </div>
      <img src="./img/BGIcon.png" alt="logo" class="mobile-header-logo" />
      <img src="./img/BGIcon.png" alt="logo" class="header-logo" />
      <div class="header-login-logo-box">
        <div class="header-login-logo-keeper">
          <i class="fa fa-user-alt header-login-logo" id="loginLogo"></i>
        </div>
      </div>
      <div class="header-phone-logo-box">
        <div class="header-phone-logo-keeper">
          <i class="fa fa-phone-alt header-phone-logo"></i>
        </div>
      </div>
      <div class="header-top">
        <div class="header-top-left">
          <div class="header-top-left-socials">
            <a href="#" class="header-socials-tooltip" data-title="آپارات">
              <img
                src="./img/aparat-icon-31.png"
                alt=""
                class="header-top-left-social"
              />
            </a>
            <a href="#" class="header-socials-tooltip" data-title="twitch">
              <img
                src="./img/twitch.png"
                alt=""
                class="header-top-left-social"
              />
            </a>
            <a href="#" class="header-socials-tooltip" data-title="اینستاگرام">
              <img
                src="./img/instagram.png"
                alt=""
                class="header-top-left-social"
              />
            </a>
            <a href="#" class="header-socials-tooltip" data-title="تلگرام">
              <img
                src="./img/telegram.png"
                alt=""
                class="header-top-left-social"
              />
            </a>
          </div>
          <p class="header-top-left-title">ما را دنبال کنید:</p>
        </div>
        <div class="header-top-center"></div>
        <div class="header-top-right">
          <p>با بازی مورد علاقه خود درامد زایی کنید</p>
        </div>
      </div>
      <div class="header-navbar">
        <div class="header-navbar-left">
          <a href="#" class="header-navbar-item" id="blog-section-link">
            بلاگ
          </a>
          <a href="#" class="header-navbar-item" id="games-section-link">
            بازی ها
          </a>
        </div>
        <div class="header-navbar-item-center"></div>
        <div class="header-navbar-right">
          <a href="#" class="header-navbar-item" id="aboutus-section-link">
            درباره ما
          </a>
          <a href="#" class="header-navbar-item" id="home-section-link">
            خانه
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
